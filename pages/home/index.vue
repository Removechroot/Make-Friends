<template>
	<view>
		<!-- #ifdef MP-WEIXIN -->

		<uni-nav-bar :shadow="false" :border="false">
			<view slot="left" @click="clickLeft"><view class="iconfont icon-qiandao font-lg text-main ml-2"></view></view>
			<view class="flex flex-1 justify-center align-center" style="background: #F7F7F7;border-radius: 4px; min-width: 600upx; color: #CCCCCC;height: 60upx;" @click="clickCenten">
				<text class="iconfont icon-sousuo font-sm"></text>
				<view class="font-sm">搜索</view>
			</view>
			<view slot="right" @click="clickright"><view class="iconfont icon-fatie font-lg"></view></view>
		</uni-nav-bar>
		<!-- #endif -->
		<!-- 顶部选项卡 -->
		<scroll-view scroll-x class="scroll-row border-bottom border-light-secondary" :scroll-into-view="scrollInto" scroll-with-animation style="height: 100rpx;">
			<view
				v-for="item in tabBars"
				:key="item.id"
				:id="'tab_' + item.id"
				class="scroll-row-item px-3 py-1 font-md"
				:class="tabIndex == item.id ? 'text-main font-lg font-weight-bold' : ''"
				@click="changetTab(item.id)"
			>
				{{ item.name }}
			</view>
		</scroll-view>

		<!-- 滑动视图 -->
		<swiper :duration="150" :current="tabIndex" @change="onchange" :style="'height:' + windowHeight + 'px'">
			<swiper-item v-for="(item, index) in newsList" :key="index">
				<scroll-view scroll-y :style="'height:' + windowHeight + 'px'" @scrolltolower="loadmore(index)">
					<template v-if="item.list.length > 0">
						<!-- 内容渲染 -->
						<block v-for="(item2, index2) in item.list" :key="index2">
							<common-list :item="item2" :index="index2" @Follow="Follow" @type="type"></common-list>
							<!-- 全局分割线 -->
							<divider></divider>
						</block>
						<!-- 上拉加载模块 -->
						<!-- <load-more :loadmore="item.loadmore"></load-more> -->
						<template v-if="item.list.length > 2">
							<uni-load-more :status="status"></uni-load-more>
						</template>
					</template>
					<template v-else>
						<nothing>
							<view class="font-sm">
								该模块与推荐模块一致，请体验推荐模块！
							</view>
						</nothing>
					</template>
				</scroll-view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
import commonList from '@/components/common/common-list.vue';
// #ifdef MP-WEIXIN
import uniNavBar from '@/components/uni-ui/uni-nav-bar/uni-nav-bar.vue';
// #endif
import uniLoadMore from '@/components/uni-load-more/uni-load-more.vue';
import GetNice from '../../util/GetNice.js';
export default {
	components: {
		commonList,
		uniLoadMore,
		// #ifdef MP-WEIXIN
		uniNavBar
		// #endif
	},
	data() {
		return {
			tabltlist: [],
			windowHeight: 0,
			scrollInto: '',
			tabIndex: 0,
			tabBars: [
				{
					name: '推荐',
					id: 0
				},
				{
					name: '测试',
					id: 1
				},
				{
					name: '热点',
					id: 2
				},
				{
					name: '财经',
					id: 3
				},
				{
					name: '娱乐',
					id: 4
				},
				{
					name: '军事',
					id: 5
				},
				{
					name: '历史',
					id: 6
				},
				{
					name: '本地',
					id: 7
				}
			],
			newsList: [],
			page: 0,
			total: 0,
			arr: [],
			status: 'more'
		};
	},
	// 点击自定义按钮
	onNavigationBarButtonTap(e) {
		uni.navigateTo({
			url: '../add-input/add-input'
		});
	},
	// 点击搜索文本框
	onNavigationBarSearchInputClicked() {
		uni.navigateTo({
			url: '../search/search?type=post'
		});
	},
	onPullDownRefresh() {
		setTimeout(() => {
			this.getdata();
			uni.stopPullDownRefresh();
		}, 800);
	},
	onLoad() {
		let getwindows = uni.getSystemInfoSync();
		this.windowHeight = getwindows.windowHeight - uni.upx2px(102);

		if (this.tabBars.length) {
			this.GetData();
		}
	},
	onTabItemTap(e) {
		if (e.index !== 0) return;
	},
	methods: {
		// #ifdef MP-WEIXIN

		clickLeft() {
			setTimeout(()=>{
				uni.showModal({
					content:"签到成功",
					showCancel:false
				})
			},500)
		},
		clickCenten() {
			uni.navigateTo({
				url: '../search/search?type=post'
			});
		},
		clickright() {
			uni.navigateTo({
				url:"../add-input/add-input"
			})
		},
		// #endif
		async GetData() {
			let res = await uniCloud.callFunction({
				name: 'gettablelist',
				data: {
					page: this.page
				}
			});
			for (let i = 0; i < this.tabBars.length; i++) {
				this.arr.push({
					list: []
				});
			}

			this.newsList = this.arr;
			if (res.success) {
				this.arr[this.tabIndex].list = res.result.context.data;
				this.newsList = this.arr;
				this.total = res.result.total;
			}
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
					this.newsList[this.tabIndex].list[index].isFollow = type;
					let msg = type === true ? '关注成功' : '取消关注';
					uni.showToast({
						title: msg
					});
				});
		},
		//点赞操作
		type(type) {
			let list = this.newsList[this.tabIndex].list[type.index];
			GetNice.Nice(type, list);
		},

		changetTab(index) {
			if (this.tabIndex === index) return;
			this.tabIndex = index;
			this.scrollInto = 'tab_' + index;
			this.getlist();
		},
		onchange(index) {
			let { detail } = index;
			this.changetTab(detail.current);
		},
		// 上拉加载更多
		loadmore(index) {
			//如果 不是上拉加载更多状态 允许进入
			if (this.status !== 'more') return;
			//如果 总条数相等 不允许进入
			if (this.total === this.newsList[this.tabIndex].list.length) return (this.status = 'nomore');
			// 设置加载中状态
			this.status = 'loading';
			// +1页码
			this.page++;
			// 调用 云函数
			uniCloud
				.callFunction({
					name: 'gettablelist',
					data: {
						page: this.page
					}
				})
				.then(res => {
					if (res.success) {
						// list 为新值
						let list = res.result.context.data;
						// 旧数据 与新数据合并
						this.newsList[this.tabIndex].list = [...this.newsList[this.tabIndex].list, ...list];
						// 还原上拉加载更多
						this.status = 'more';
					}
				});
		}
	}
};
</script>

<style lang="scss"></style>
