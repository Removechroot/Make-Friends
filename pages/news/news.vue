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
						<common-list :item="item" :index="index" @type="type"></common-list>
						<divider></divider>
					</block>
					<load-more :loadmore="loadmore"></load-more>
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
						<swiper-item v-for="(item,index) in swiperimglist" :key="index">
							<image :src="item.Url" mode="widthFix" class="rounded w-100" style="height: 300px;"></image>
						</swiper-item>
					</swiper>
					<!-- 最近更新 -->
					<view class="p-2 font-md">最近更新</view>

					<!-- 话题列表组件 -->

					<block v-for="(item, index) in topicList" :key="index">
						<topic-list :item="item" :index="index">
							
						</topic-list>
						</block>
				</scroll-view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
import uniNavBar from '@/components/uni-ui/uni-nav-bar/uni-nav-bar.vue';
import CommonList from '@/components/common/common-list.vue';
import loadMore from '@/components/common/load-more.vue';
import hotCart from '@/components/news/hotCart';
import topicList from '@/components/news/topic-list.vue';
export default {
	components: {
		uniNavBar,
		CommonList,
		loadMore,
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
			loadmore: '上拉加载更多',
			hotlist: [{ name: '关注' }, { name: '话题' }, { name: '热门' }, { name: '鬼畜' }, { name: '快落' }, { name: '肥宅' }],
			topicList:[],
			swiperimglist:[]
		};
	},
	onLoad() {
		let getwindows = uni.getSystemInfoSync();
		this.windowHeight = getwindows.windowHeight - getwindows.statusBarHeight - 44;

		this.GetData()
	},
	methods: {
		async GetData(){
			// 获取已关注数据
			await uniCloud.callFunction({
				name:"gettablelist",
				success: (res) => {
					let result = res.result.data
					this.list = result;
				}
			})
			// 获取话题列表
			await uniCloud.callFunction({
				name:"GettopicList",
				success: (res) => {
					let result = res.result.data
					this.topicList = result
				}
			})
			//获取幻灯片
			await uniCloud.callFunction({
				name:"Getswiperimglist",
				success: (res) => {
					let result = res.result.data
					this.swiperimglist = result
				}
			})
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
		type(type) {
			// 如果是首次顶
			let item = this.list[type.index];
			let msg = type.type === 'support' ? '顶成功' : '踩成功';
			if (item.support.type === '') {
				item.support.type = type.type;
				item.support[type.type + '_count']++;
				return;
			}
			// 如果之前顶了suppor
			if (item.support.type === 'support' && type.type === 'unsupport') {
				item.support.support_count--;
				item.support.unsupport_count++;
			}
			// 如果之前顶了unsuppor
			if (item.support.type === 'unsupport' && type.type === 'support') {
				item.support.support_count++;
				item.support.unsupport_count--;
			}
			item.support.type = type.type;
			uni.showToast({
				title: msg
			});
		},
		loadmoreEvent(e) {
			// 验证是否处于可加载状态
			if (this.loadmore !== '上拉加载更多') return;
			// 设置状态
			this.loadmore = '加载中...';

			setTimeout(() => {
				this.list = [...this.list, ...this.list];
				this.loadmore = '上拉加载更多';
			}, 2000);
		},
		more() {
			uni.navigateTo({
				url: '../topic-cate/topic-cate'
			});
		},
		// 打开搜索页
		OpenSeach(){
			uni.navigateTo({
				url:'../search/search?type=topic'
			})
		}
	}
};
</script>

<style>
.text-main {
	color: #ff4a6a;
}
</style>
