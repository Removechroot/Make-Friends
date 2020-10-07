<template>
	<view>
		<block>
			<view class="flex border-bottom align-center p-2 mt-2 border-light-secondary" hover-class="bg-light" style="height: 100rpx;" @click="open">
				<image :src="item.avatar" class="rounded-circle" style="width: 80rpx;height: 80rpx;"></image>
				<view class="flex flex-column ml-2 font flex-1">
					<view class="flex align-center justify-between">
						<text class="font-md">{{ item.username }}</text>
						<text class="font-sm text-secondary">{{ item.updata_time | formatTime }}</text>
					</view>
					<view class="flex align-center justify-between">
						<text class="text-secondary text-ellipsis" style="max-width: 500rpx;">{{ item.content }}</text>
						<uni-badge :text="item.noread" type="error"></uni-badge>
					</view>
				</view>
			</view>
		</block>
	</view>
</template>

<script>
import uniBadge from '@/components/uni-badge/uni-badge.vue';
import formatTime from '../../common/time.js'
export default {
	components: { uniBadge },
	props:{
		item:Object,
		index:Number
	},
	data() {
		return {

		};
	},
	filters: {
		formatTime(value) {
			return formatTime.gettime(value);
		}
	},
	methods: {
		open(){
			// console.log('asd')
			uni.navigateTo({
				url:'../../pages/user-chat/user-chat'
			})
		}
	}
};
</script>

<style></style>
