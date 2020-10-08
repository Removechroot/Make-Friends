<template>
	<view>
		<list-item title="账号与安全"></list-item>
		<list-item title="资料编辑"></list-item>
		<list-item title="清除缓存" @click="clear">
			<text>{{ currentSize | format }}</text>
		</list-item>
		<list-item title="意见反馈"></list-item>
		<list-item title="关于本程序"></list-item>
		<view class="w-100 mt-2">
			<button type="primary" class="bg-main text-white border-bottom-0" hover-class="bg-light" style="width: 660rpx;border-radius: 50rpx;">退出登录</button>
		</view>
	</view>
</template>

<script>
import listItem from '@/components/uni-ui/list-item/list-item.vue';

export default {
	components: {
		listItem
	},
	data() {
		return {
			currentSize: 1000
		};
	},
	filters: {
		format(value) {
			return value > 1024 ? (value / 1024).toFixed(2) + 'MB' : value.toFixed(2) + 'KB';
		}
	},
	onLoad() {
		this.getStoragInfo();
	},
	methods: {
		clear() {
			uni.showModal({
				title: '提示',
				content: '是否清楚所有缓存',
				cancelText: '取消',
				confirmText: '清除',
				success: res => {
					if (res.confirm) {
						uni.clearStorageSync();

						setTimeout(() => {
							uni.showToast({
								title: '清除成功',
								
							});
							this.getStoragInfo();
						}, 800);
						
					}
				}
			});
		},
		getStoragInfo() {
			let res = uni.getStorageInfoSync();
			this.currentSize = res.currentSize;
		}
	}
};
</script>

<style></style>
