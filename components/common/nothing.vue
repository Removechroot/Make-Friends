<template>
	<view class="flex flex-column align-center justify-center pt-5">
		<image src="/static/nothing.png" style="width: 300rpx; height: 300rpx;"></image>
		<slot>
		<text class="font-md">很抱歉，此页面不存在或已删除！</text>
		</slot>
	</view>
</template>

