<template>
	<view>
		<!-- 时间 -->
		<view v-if="shoreTime" class="py-2 flex align-center justify-center font-sm text-light-muted">{{ shoreTime }}</view>
		<!-- 消息气泡 -->
		<view class="flex align-start px-2 my-2" :style="isSelf ? 'flex-direction: row-reverse;' : ''">
			<view class="flex align-start px-2 my-2" :style="isSelf ? 'flex-direction: row-reverse;' : ''">
				<image :src="item.avatar" mode="" class="rounded-circle" style="height: 100rpx;width: 100rpx;"></image>

				<view class="bg-light p-2 rounded mx-2" style="max-width: 400rpx;">{{ item.msg }}</view>
			</view>
		</view>
	</view>
</template>

<script>
const uid = 1;
import $T from '../../common/time.js';
export default {
	props: {
		item: Object,
		index: Number,
		pretime: [Number, String]
	},
	data() {
		return {};
	},
	computed: {
		isSelf() {
			return uid === this.item.user_id;
		},
		shoreTime() {
			return $T.getChatTime(this.item.create_time, this.pretime);
		}
	},
	methods: {}
};
</script>

<style></style>
