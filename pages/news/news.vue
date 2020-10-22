<template>
	<view>
		<!-- 自定义头部 -->
		<uni-nav-bar :border="false" :fixed="true" :statusBar="true" @clickRight="openAddinput">
			<view class="flex align-center justify-center font-weight-bold w-100">
				<view
					@click="changeTab(index)"
					class="font-md  mx-1 text-light-muted"
					v-for="(item, index) in tabBars"
					:key="index"
					:class="tabIndex === index ? 'font-lg text-main' : 'font-sm text-light-muted'"
				>
					{{ item.name }}
				</view>
			</view>
			<text slot="right" class="iconfont icon-fatie font-lg"></text>
		</uni-nav-bar>

		<!-- 滑动视图 -->

		<swiper :current="tabIndex" :style="'height:' + windowHeight + 'px'" @change="onchange" :duration="150">
			<swiper-item>
				<!-- 关注 -->
				<scroll-view :scroll-y="true" :style="'height:' + windowHeight + 'px'" @scrolltolower="loadmoreEvent">
					<block v-for="(item, index) in list" :key="index">
						<common-list :item="item" :index="index" @type="type" @Follow="Follow"></common-list>
						<divider></divider>
					</block>
					<template v-if="isshow">
						<nothing><view>点个关注吧太难了</view></nothing>
					</template>
					<template v-if="list.length > 3">
						<uni-load-more :status="status"></uni-load-more>
					</template>
				</scroll-view> 
			</swiper-item>
			<!-- 话题 -->
			<swiper-item>
				<scroll-view :scroll-y="true" :style="'height:' + windowHeight + 'px'">
					<!-- 热门分类 -->
					<hot-cart :hotCart="hotlist" @more="more"></hot-cart>
					<!-- 搜索框 -->
					<view class="p-2">
						<view class="flex rounded bg-light align-center justify-center py-2 text-secondary" style="height: 30rpx;" @click="OpenSeach">
							<text class="iconfont icon-sousuo mr-2"></text>
							<text>搜索话题</text>
						</view>
					</view>
					<!-- 轮播图 -->
					<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" class="px-2 pb-2">
						<swiper-item v-for="(item, index) in swiperimglist" :key="index">
							<image :src="item.Url" mode="widthFix" class="rounded w-100" style="height: 300px;"></image>
						</swiper-item>
					</swiper>
					<!-- 最近更新 -->
					<view class="p-2 font-md">最近更新</view>

					<!-- 话题列表组件 -->

					<block v-for="(item, index) in topicList" :key="index"><topic-list :item="item" :index="index"></topic-list></block>
				</scroll-view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
import uniNavBar from '@/components/uni-ui/uni-nav-bar/uni-nav-bar.vue';
import CommonList from '@/components/common/common-list.vue';
import uniLoadMore from '@/components/uni-load-more/uni-load-more.vue';
// import loadMore from '@/components/common/load-more.vue';
import hotCart from '@/components/news/hotCart';
import topicList from '@/components/news/topic-list.vue';
import GetNice from '../../util/GetNice.js';
export default {
	components: {
		uniNavBar,
		CommonList,
		uniLoadMore,
		hotCart,
		topicList
	},
	data() {
		return {
			tabIndex: 0,
			tabBars: [
				{
					name: '关注'
				},
				{
					name: '话题'
				}
			],
			windowHeight: 500,
			list: [],
			status: 'more',
			hotlist: [{ name: '关注' }, { name: '话题' }, { name: '热门' }, { name: '鬼畜' }, { name: '快落' }, { name: '肥宅' }],
			topicList: [],
			swiperimglist: [],
			affectedDocs: 0,
			page: 0,
			isshow: false,
			Uid:""
		};
	},
	onLoad() {
		this.Uid = JSON.parse(uni.getStorageSync('UserInfo')) 
		let getwindows = uni.getSystemInfoSync();
		this.windowHeight = getwindows.windowHeight - getwindows.statusBarHeight - 44;
		this.getlist();
		this.GetData();
	},
	onTabItemTap(e) {
		if(e.text !== "动态") return	
		if(this.list.length >=0) this.isshow  = false
		this.getlist()
		

	},
	methods: {
		GetData() {
			// 获取话题列表
			uniCloud
				.callFunction({
					name: 'GettopicList'
				})
				.then(res => {
					let result = res.result.data;
					this.topicList = result;
				});
			//获取幻灯片
			uniCloud
				.callFunction({
					name: 'Getswiperimglist'
				})
				.then(res => {
					let result = res.result.data;
					this.swiperimglist = result;
				});
		},
		Follow(data) {
			let { id, type, index } = data;
			uniCloud
				.callFunction({
					name: 'update',
					data: {
						type: 'isFollow',
						id,
						isFollow: type
					}
				})
				.then(res => {
					if (res.result.status !== 0) return;

					this.list[index].isFollow = type;
					this.list.splice(index, 1);
					let msg = type === true ? '关注成功' : '取消关注';
					uni.showToast({
						title: msg
					});
					if (this.list.length === 0)  this.isshow = true
				});
		},
		getlist() {
			// 获取已关注数据
			uniCloud
				.callFunction({
					name: 'GetFollow',
				})
				.then(res => {
					if (!res.success) return;

					let { context, affectedDocs } = res.result;
					this.list = context;
					if (this.list.length === 0) return this.isshow = true;
					this.affectedDocs = affectedDocs;
					
				});
		},
		// 打开发布页面
		openAddinput() {
			uni.navigateTo({
				url: '../add-input/add-input'
			});
		},
		onchange(index) {
			this.tabIndex = index.detail.current;
		},
		changeTab(index) {
			this.tabIndex = index;
		},
		// 点赞操作
		type(type) {
			let list = this.list[type.index];
			GetNice.Nice(type,list) 
			
			
			
			// // 如果是首次顶
			// let item = this.list[type.index];
			// let msg = type.type === 'support' ? '顶成功' : '踩成功';
			// if (item.support.type === '') {
			// 	item.support.type = type.type;
			// 	item.support[type.type + '_count']++;
			// 	return;
			// }
			// // 如果之前顶了suppor
			// if (item.support.type === 'support' && type.type === 'unsupport') {
			// 	item.support.support_count--;
			// 	item.support.unsupport_count++;
			// }
			// // 如果之前顶了unsuppor
			// if (item.support.type === 'unsupport' && type.type === 'support') {
			// 	item.support.support_count++;
			// 	item.support.unsupport_count--;
			// }
			// item.support.type = type.type; 
			// uni.showToast({
			// 	title: msg
			// });
		},
		loadmoreEvent() {
			if (this.status !== 'more') return;
			if (this.list.length === this.affectedDocs) return (this.status = 'nomore');
			this.status = 'loading';
			this.page++;
			uniCloud
				.callFunction({
					name: 'GetFollow',
					data: {
						page: this.page
					}
				})
				.then(res => {
					let newlist = res.result.context;
					this.list = [...this.list, ...newlist];
					this.status = 'more';
				}); 
		},
		more() {
			uni.navigateTo({
				url: '../topic-cate/topic-cate'
			});
		},
		// 打开搜索页
		OpenSeach() {
			uni.navigateTo({
				url: '../search/search?type=topic'
			});
		}
	}
};
</script>

<style>
.text-main {
	color: #ff4a6a;
}
</style>
