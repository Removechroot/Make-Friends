<template>
	<view>
		<template v-if="list.length > 0">
			<block v-for="(item, index) in list" :key="index"><msg :item="item" :index="index"></msg></block>
		</template>
		<template v-else>
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
			list:[]
			// list: [
			// 	{
			// 		avatar: '../../static/xia.jpg',
			// 		username: '虾老板',
			// 		updata_time: '1601460630',
			// 		content: '今晚来唱歌',
			// 		noread: '1'
			// 	},
			// 	{
			// 		avatar: '../../static/xk.jpg',
			// 		username: '罗三岁',
			// 		updata_time: '1601461269',
			// 		content: '你先唱',
			// 		noread: '2'
			// 	},
			// 	{
			// 		avatar: '../../static/mb.jpg',
			// 		username: '可爱面包',
			// 		updata_time: '1601461369',
			// 		content: '靓仔~',
			// 		noread: '5'
			// 	},
			// 	{
			// 		avatar: '../../static/kx.jpg',
			// 		username: 'W',
			// 		updata_time: '1601461469',
			// 		content: '面包好可爱',
			// 		noread: '1'
			// 	},
			// 	{
			// 		avatar: '../../static/xkm.jpg',
			// 		username: '小可的猫',
			// 		updata_time: '1601461489',
			// 		content: '瞄~~~~~',
			// 		noread: '1'
			// 	}
			// ]
			
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
				console.log(res)
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
