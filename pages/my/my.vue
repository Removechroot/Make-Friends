<template>
	<view>
		<!-- #ifdef H5 -->
		<view class="flex justify-center align-center flex-column">
			<text class="mb-2">登录平台，使用更多功能</text>
			<view class="bg-secondary flex justify-center align-center bg-success rounded-circle" style="width: 100rpx;height: 100rpx;">
				<text class="iconfont icon-weixin  font-weight-light" style="font-size: 30px; color: #FFFFFF;"></text>
			</view>
			<text class="mt-2 ">微信登录</text>
		</view>
		<!-- #endif -->
		<!-- #ifdef MP-WEIXIN -->
		<template v-if="!islogin">
			<label for="WEIXIN">
				<view class="flex align-center p-2">
					<image :src="userInfo.avatarUrl" class="rounded-circle" style="width: 100rpx;height: 100rpx;"></image>
					<view class="flex flex-column flex-1 px-2">
						<text class="font-lg font-weight-bold text-dark">{{ userInfo.nickName }}</text>
					</view>
					<text class="iconfont icon-jinru"></text>
				</view>
			</label>
			<button open-type="getUserInfo" @getuserinfo="loginByWeixin" class="bg-white overflow-hidden" style="" id="WEIXIN"></button>
		</template>
		<!-- #endif -->

		<view class="flex align-center p-2" hover-class="bg-hover-light" v-if="islogin">
			<image :src="userInfo.avatarUrl" class="rounded-circle" style="width: 100rpx;height: 100rpx;"></image>
			<view class="flex flex-column flex-1 px-2">
				<text class="font-lg font-weight-bold text-dark">{{ userInfo.nickName }}</text>
				<text class="font-sm text-muted">总帖子：0 今日发帖:0</text>
			</view>
			<text class="iconfont icon-jinru"></text>
		</view>
		<view class="flex justify-center align-center p-2">
			<block v-for="(item, index) in myData" :key="index">
				<view class="flex-1 flex flex-column align-center" hover-class="bg-light">
					<text class="font-lg ">{{ item.num }}</text>
					<text class="font text-muted">{{ item.name }}</text>
				</view>
			</block>
		</view>
		<!-- AD位置 -->
		<view class=" flex justify-center align-center p-2 px-3" @click="getUserInfo">
			<image src="https://picsum.photos/750/170?random=1" style="height: 170rpx;" class="rounded" mode="widthFix"></image>
		</view>

		<list-item title="浏览历史" icon="icon-liulan"></list-item>
		<list-item title="社区认证" icon="icon-huiyuanvip"></list-item>
		<list-item title="审核帖子" icon="icon-jianpan1"></list-item>
	</view>
</template>

<script>
let weixinAuthService;
import listItem from '@/components/uni-ui/list-item/list-item.vue';
export default {
	components: {
		listItem
	},
	data() {
		return {
			myData: [{ name: '帖子', num: 1 }, { name: '动态', num: 2 }, { name: '评论', num: 3 }, { name: '粉丝', num: 6 }],
			islogin: false,
			userInfo: {
				avatarUrl: 'https://picsum.photos/100?random=1',
				nickName: '请登录！'
			}
		};
	},
	onNavigationBarButtonTap() {
		uni.navigateTo({
			url: '../user-set/user-set'
		});
	},
	onLoad() {
		// #ifdef MP-WEIXIN
		if (uni.getStorageSync('token')) {
			let token = uni.getStorageSync('token');
			uniCloud.callFunction({
				name: 'user-center',
				data: {
					action: 'checkToken',
					params: {
						token
					}
				},
				success: ({ result }) => {
					console.log(result);
					if (result.code > 0) {
						that.islogin = false;
					}
					this.userInfo = result.userInfo.userInfo;
					this.islogin = true;
				}
			});
		} else {
			this.loginByWeixin();
		}
		// #endif
	},
	methods: {
		loginByWeixin() {
			uni.showLoading({
				title: '登录中！'
			});
			if (this.islogin) return;
			// //#ifdef H5
			// uni.login({
			// 	provider: 'weixin',
			// 	success: function(loginRes) {
			// 		console.log(loginRes.authResult);
			// 	}
			// });
			// //#endif

			//#ifdef MP-WEIXIN || H5
			uni.getUserInfo({
				success: ({ userInfo }) => {
					this.userInfo = userInfo;
					this.getOpenID();
				}
			});
			//#endif
		},
		getOpenID() {
			uni.login({
				success: ({ code }) => {
					uniCloud.callFunction({
						name: 'user-center',
						data: {
							action: 'loginByWeixin',
							params: {
								code
							}
						},
						success: res => {
							if (res.result.code > 0)
								return uni.showModal({
									title: '登录失败请重试',
									showCancel: false
								});
							uni.setStorageSync('token', res.result.token);
							uniCloud.callFunction({
								name: 'user-center',
								data: {
									uid: res.result.uid,
									action: 'pushuserinfo',
									userInfo: this.userInfo
								}
							});
							this.islogin = true;
						},
						fail() {
							uni.showModal({
								title: '登录失败请重试',
								showCancel: false
							});
						},
						complete: () => {
							uni.hideLoading();
						}
					});
				}
			});
		}
	}
};
</script>

<style></style>
