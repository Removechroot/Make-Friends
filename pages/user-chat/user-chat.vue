<template>
	<view>
		<!-- 聊天列表 -->
		<scroll-view scroll-y style="position: absolute;left: 0;top: 0;right: 0;bottom: 100rpx;" :scroll-into-view="scrollInto" scroll-with-animation>
			<!-- 消息气泡 -->
			<block v-for="(item, index) in list" :key="index">
				<view :id="'chat' + index +1">
					<user-chat :item="item" :index="index" :pretime="index > 0 ? 'list[index-1].create_time' : '0' ">
					</user-chat>
					</view>
			</block>
		</scroll-view>
		<!-- 底部操作条 -->
		<!-- <view class="" style="height: 100rpx;" class="fixed-bottom flex align-center border-top bg-white">
			<input type="text" value="" class="flex-1 rounded bg-light ml-2" style="padding: 5rpx;" v-model="content" placeholder="文明发炎从我做起" @confirm="submit" />
			<view
				@click="submit"
				class="iconfont icon-fabu flex align-center justify-center font-lg animate__animated"
				hover-class="animate__jello text-main"
				style="width: 100rpx;"
			></view> -->
			<botton-btn @submit="submit"></botton-btn>
	</view>
</template>

<script>
//模拟数据

import userChat from '@/components/user-chat/user-chat.vue';
import bottonBtn from '@/components/common/botton-btn.vue';
export default {
	components: {
		userChat,
		bottonBtn
	},
	data() {
		return {
			scrollInto: '',
			content: '',
			list: [
				{
					user_id: 2,
					avatar: '/static/mb.jpg',
					username: '昵称',
					msg: '你好啊',
					type: 'text',
					create_time: (new Date()).getTime()
				},
				{
					user_id: 2,
					avatar: '/static/mb.jpg',
					username: '昵称',
					msg: '靓仔!!',
					type: 'text',
					create_time: (new Date()).getTime()
				}
			]
		};
	},
	onReady() {
		this.pagetoBottom();
	},
	methods: {
		// 发送按钮
		submit(data) {
			let obj = {
				user_id: 1,
				avatar: '/static/mb.jpg',
				username: '昵称',
				msg: data,
				type: 'text',
				create_time: (new Date()).getTime()
			};
			

			this.list.push(obj);
			this.pagetoBottom();
		},
		pagetoBottom() {
			let lastIndex = this.list.length-1;
			console.log(lastIndex)
			this.scrollInto = 'chat' + lastIndex
		}
	}
};
</script>

<style></style>
