<template>
	<view>
		<view class="flex align-center p-2" hover-class="bg-hover-light">
			<image src="/static/xkm.jpg" class="rounded-circle" style="width: 100rpx;height: 100rpx;"></image>
			<view class="flex flex-column flex-1 px-2">
				<text class="font-lg font-weight-bold text-dark">昵称</text>
				<text class="font-sm text-muted">总帖子：10 今日发帖:0</text>
			</view>
			<text class="iconfont icon-jinru"></text>
		</view>
		<view class="flex justify-center align-center p-2">
			<block v-for="(item, index) in myData" :key="index">
				<view class="flex-1 flex flex-column align-center" hover-class="bg-light">
					<text class="font-lg ">{{ item.num }}</text>
					<text class="font text-muted">{{ item.name }}</text>
				</view>
			</block>
		</view>
		<!-- AD位置 -->
		<view class=" flex justify-center align-center p-2 px-3">
			<image src="/static/demo2ima.jpg" style="height: 170rpx;" class="rounded" mode="aspectFill"></image>
		</view>

		<list-item title="浏览历史" icon="icon-liulan"></list-item>
		<list-item title="社区认证" icon="icon-huiyuanvip"></list-item>
		<list-item title="审核帖子" icon="icon-jianpan1"></list-item>
	</view>
</template>
 
<script>
import listItem from '@/components/uni-ui/list-item/list-item.vue'
export default {
	components:{
listItem
	},
	data() {
		return {
			myData: [{ name: '帖子', num: 1 }, { name: '动态', num: 2 }, { name: '评论', num: 3 }, { name: '粉丝', num: 6 }]
		};
	},
	onNavigationBarButtonTap() {
		uni.navigateTo({
			url:"../user-set/user-set"
		})
	},
	methods: {}
};
</script>

<style></style>
