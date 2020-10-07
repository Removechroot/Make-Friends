<template>
	<view>
		<!-- tab -->
		<view class="flex align-center" style="height: 100rpx;">
			<view
				class="flex-1 font-md  flex align-center justify-center"
				v-for="(item, index) in list"
				:key="index"
				@click="OnclickEvent(index)"
				:class="tabIndex === index ? 'text-main font-lg font-weight-bold' : ''"
			>
				{{ item.name }}
				<text v-if="item.num" class="ml-2">{{ item.num }}</text>
			</view>
		</view>
		<!-- 列表 -->
		<swiper :duration="150" :current="tabIndex" @change="onchange" :style="'height:' + windowHeight + 'px'">
			<swiper-item v-for="(item, index) in newsList" :key="item.id">
				<scroll-view scroll-y :style="'height:' + windowHeight + 'px'" @scrolltolower="loadmore(index)">
					<template v-if="item.list.length > 0">
						<!-- 内容渲染 -->
						<block v-for="(item2, index2) in item.list" :key="index2">
							<!-- 样表样式 -->
							<user-list :item="item2" :index="index2"></user-list>
						</block>
						<!-- 上拉加载模块 -->
						<load-more v-if="item.list.length > 10" :loadmore="item.loadmore"></load-more>
					</template>
					<template v-else>
						<nothing></nothing>
					</template>
				</scroll-view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
const demo = [
	{
		avatar: '../../static/lxg.jpg',
		username: '用户1',
		age: 21,
		sex: 0,
		isFollow: false
	},
	{
		avatar: '../../static/lxg.jpg',
		username: '用户2',
		age: 21,
		sex: 1,
		isFollow: true
	}
];
import loadMore from '@/components/common/load-more';
import userList from '@/components/user-list/user-list.vue'
export default {
	components: {
		loadMore,
		userList
	},
	data() {
		return {
			windowHeight: 600,
			tabIndex: 0,
			list: [
				{
					name: '互关',
					num: 0
				},
				{
					name: '关注',
					num: 12
				},
				{
					name: '粉丝',
					num: 13
				}
			],
			newsList: []
		};
	},
	// 获取系统高度
	onLoad() {
		uni.getSystemInfo({
			success: res => {
				this.windowHeight = res.windowHeight - uni.upx2px(100);
			}
		});
		this.getData();
	},
	// 监听点击头部输入框时间
	onNavigationBarSearchInputClicked(e) {
		uni.navigateTo({
			url: '../search/search?type=user'
		});
	},
	onNavigationBarButtonTap() {
		uni.navigateBack();
	},

	methods: {
		OnclickEvent(index) {
			this.tabIndex = index;
		},
		onchange(e) {
			console.log(e);
		},
		loadmore(index) {
			// 拿到当前列表
			let list = this.newsList[index];
			if (list.loadmore !== '上拉加载更多') return;
			// 修改当前列表加载状态
			list.loadmore = '努力加载中...';

			// 模拟数据请求
			setTimeout(() => {
				list.list = [...list.list, ...list.list];
				list.loadmore = '上拉加载更多';
			}, 800);
		},
		getData() {
			var arr = [];
			for (let i = 0; i < this.list.length; i++) {
				let obj = {
					// 1.上拉加载更多 2.加载中 3.没有更多数据
					loadmore: '上拉加载更多',
					list: []
				};
				if (i < 2) obj.list = demo;
				arr.push(obj);
			}
			this.newsList = arr;
		}
	}
};
</script>

<style></style>
