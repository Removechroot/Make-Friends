<template>
	<view>
		<list-item title="账号与安全"></list-item>
		<list-item title="资料编辑"></list-item>
		<list-item title="清除缓存"></list-item>
		<list-item title="意见反馈"></list-item>
		<list-item title="关于本程序"></list-item>
		<view class="w-100 mt-2">
			<button type="primary" class="bg-main text-white border-bottom-0"  hover-class="bg-light" style="width: 660rpx;border-radius: 50rpx;">退出登录</button>
		</view>
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
				
			}
		},
		methods: {
			 
		}
	}
</script>

<style>

</style>
