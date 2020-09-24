<template>
	<view>
		<!-- 自定义导航模块 -->
		<uni-nav-bar left-icon="back" fixed status-bar :border="false">
			<view class="flex align-center justify-center w-100">
				<text>所有人可见</text>
				<text class="iconfont icon-icon-test m-0"></text>
			</view>
		</uni-nav-bar>
		
		<!-- 文本域 -->
		<textarea  v-model="content"  placeholder="说一句话试试~"  class="uni-textarea  mt-3 px-3"/>
		<!-- 图片上传处理模块 -->
		<uni-upload-image @change="changeimages"></uni-upload-image>
		<!-- 底部操作 -->
		<view class="bg-white fixed-bottom flex align-center border-top" style="height: 85rpx;">
			<view class="iconfont icon-caidan  foor-btn"></view>
			<view class="iconfont icon-huati foor-btn"></view>
			<view class="iconfont icon-tupian foor-btn"></view>
			
			<view class="bg-main text-white ml-auto flex justify-center align-center rounded mr-2 animate__animated" style="width: 140rpx;height: 60rpx;" hover-class="animate__jello">发送</view>
			
		</view>
	</view>
</template>

<script>
import uniNavBar from '@/components/uni-ui/uni-nav-bar/uni-nav-bar.vue';
import uniUploadImage from '@/components/uni-ui/uni-upload-image.vue';

export default {
	components: { uniNavBar,uniUploadImage },
	data() {
		return {
			content:''
		};
	},
	methods: {
		changeimages(e){
			console.log(e)
		}
	}
};
</script>

<style>
	.foor-btn{
		width: 86rpx;
		height: 86rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 50rpx
	}
</style>
