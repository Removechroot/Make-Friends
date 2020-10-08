<template>
	<!-- 首页卡片 -->
	<view class="p-2 animate__animated animate__fast animate__fadeIn" >
		<!-- 头像文字与关注 -->
		<view class="flex align-center justify-between">
			<view class="flex justify-center align-center img">
				<!-- 头像 -->
				<image :src="item.userpic" lazy-load @click="openspace"></image>
				<!-- 昵称发布时间 -->
				<view class="username">
					<view class="font" style="line-height: 1.5;">{{ item.username }}</view>
					<view class="font-sm" style="color: #9d9589;line-height: 1.5;">{{ item.newstime }}</view>
				</view>
			</view>
			<!-- 关注按钮 -->
			<view class="focus flex justify-center align-center" hover-class="animate__animated animate__jello animate__fast" @click="follow" v-if="!item.isFollow">关注</view>
		</view>
		<view>
			<!-- 内容区域 -->
			<view class="centencon" @click="openDtail">{{ item.title }}</view>
			<!-- 详情 -->
			<slot>
			<!-- 图片区域 -->
			<image v-if="item.titlepic" :src="item.titlepic" @click="openDtail" style="height: 355rpx; border-radius: 5px;" class="w-100"></image>
		</slot>
		</view>
		<!-- 底部图表 -->
		<view class="flex bottom">
			<!-- 顶 -->
			<view
				class="flex align-center justify-center flex-1 animate__animated animate__faster"
				hover-class="animate__jello text-main" @click="dosupport('support')"
				:class="item.support.type === 'support' ? 'ac-select' : ''">
				
				<text class="iconfont icon-dianzan2 mr-2" :style="item.support.type === 'support' ? 'color:#ff4a6a;' : ''"></text>
				<text>{{ item.support.support_count }}</text>
			</view>
			<!-- 踩 -->
			
			
			<view
				class="flex align-center justify-center flex-1 animate__animated animate__faster"
				hover-class="animate__jello text-main"
				@click="dosupport('unsupport')"
				:class="item.support.type === 'unsupport' ? 'ac-select' : ''"
			>
				<text class="iconfont icon-cai mr-2" :style="item.support.type === 'unsupport' ? 'color:#ff4a6a;' : ''"></text>
				<text>{{ item.support.unsupport_count }}</text>
			</view>

			<view class="flex align-center justify-center flex-1 animate__animated animate__faster" @click="doComment" hover-class="animate__animated animate__jello animate__fast">
				<text class="iconfont icon-pinglun mr-2"></text>
				<text>{{ item.comment_count }}</text>
			</view>

			
			<view class="flex align-center justify-center flex-1 animate__animated animate__faster" @click="doShare" hover-class="animate__animated animate__jello animate__fast">
				<text class="iconfont icon-fenxiang_2 mr-2"></text>
				<text>{{ item.share_name }}</text>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	props: {
		item: Object,
		index: {
			type:Number,
			default:-1
		},
		isdetail:false
	},
	methods: {
		openspace() {
			console.log(1);
		},
		follow() {
			this.$emit('Follow', this.index);
		},
		openDtail() {
			if(this.isdetail) return
			uni.navigateTo({
				url:"../../pages/detail/detail?detail=" + JSON.stringify(this.item)
			})
		},
		// 顶踩操作
		dosupport(type) {
			this.$emit('type', {
				index: this.index,
				type
			});
			
		},
		doComment(){
			if(!this.isdetail){
				return this.openDtail()
			}
			this.$emit('doComment')
		},
		doShare(){
			if(!this.isdetail){
				return this.openDtail()
			}
			this.$emit('doShare')
		}
	}
};
</script>

<style>
.img image {
	width: 85rpx;
	height: 85rpx;
	border-radius: 100%;
}
.username {
	padding-right: 160;
}
.focus {
	width: 90rpx;
	height: 50rpx;
	background-color: #ff4a6a;
	color: #fff;
	border-radius: 5px;
}
.centencon {
	font-size: 30rpx;
	margin: 10rpx 0;
}

.bottonfz {
	font-size: 35rpx;
}
.bottonfz text {
	padding-left: 10rpx;
}
.ac-select {
	color: #ff4a6a;
}
</style>
