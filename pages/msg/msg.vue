<template>
	<view>
		<template v-if="!isshow">
			<block v-for="(item, index) in list" :key="index"><msg :item="item" :index="index"></msg></block>
		</template>
		<template v-if="isshow">
			<nothing><text>还没人给你发消息...</text></nothing>
		</template>

		<!-- 弹出框 -->
<uni-popup ref="popup" type="top">
	<view class="flex align-center justify-center font-md border-bottom bg-white py-2" hover-class="bg-light" @click="popupEventAdd">
		<text class="iconfont icon-sousuo mr-2"></text>添加好友
	</view>
	<view class="flex align-center justify-center font-md bg-white py-2" hover-class="bg-light" @click="popupEventClear">
		<text class="iconfont icon-clean mr-2"></text>清除列表
	</view>
</uni-popup>
	</view>
</template>

<script>
import msg from '@/components/msg/msg.vue';
import nothing from '../../components/common/nothing.vue';
import uniPopup from '../../components/uni-popup/uni-popup.vue'

export default {
	components: {
		msg,
		nothing,
		uniPopup
	},
	data() {
		return {
			list:[],
			isshow:true
		};
	},
	// 监听下拉刷新
	onPullDownRefresh() {
		this.refres();
	},
	// 点击头部按钮
	onNavigationBarButtonTap(e) {
		switch (e.index) {
			case 0: //左边
				uni.navigateTo({
					url:'../user-list/user-list'
				})
				this.$refs.popup.close()
				break;
			case 1: // 右边
				this.$refs.popup.open()
				break;
		}
	},
	onLoad() {
		this.GetData()
	},
	methods: {
		async GetData(){
			await uniCloud.callFunction({
				name:"Getmsglist"
			}).then(res=>{
				this.list = res.result.data
				this.isshow = false
			})
		},
		refres() {
			let temp = [];
			setTimeout(() => {
				// 模拟数据刷新
				// 停止下拉刷新
				uni.stopPullDownRefresh();
			}, 1000);
		},
		// 添加好友
		popupEventAdd(){
			uni.navigateTo({
				url:'../search/search?type=user'
			})
			this.$refs.popup.close()
		},
		// 清除列表
		popupEventClear(){
			this.$refs.popup.close()
		}
	}
};
</script>

<style></style>
