<template>
	<view>
		<view class=" flex p-2 align-center border-bottom border-light-secondary " hover-class="bg-light" @click="opendetail(index)">
			<image :src="item.avatar" style="width: 100rpx; height: 100rpx;" class="rounded-circle mr-2"></image>
			<view class="flex flex-column flex-1">
				<text class="font-md text-dark">{{ item.username }}</text>
				<uni-badge :text="item.age" :type="!item.sex ? 'error' : 'primary'" size="small">
					<text class="iconfont  font-sm text-white" :class="item.sex ? 'icon-nan' : 'icon-nv'" style="margin-right: 5rpx;"></text>
				</uni-badge>
			</view>
			<view class="uni-icon uni-icon-checkbox-filled " :class="item.isFollow ? 'text-light-muted' : 'text-main'"></view>
		</view>
	</view>
</template>

<script>
	import uniBadge from '@/components/uni-badge/uni-badge.vue';
	export default {
		components:{
			uniBadge
		},
		props:['item','index'],
		data() {
			return {
				
			}
		},
		
		methods: {
			opendetail(index){
				// this.$emit('opendetail',index)
			}
		}
	}
</script>

<style>

</style>
