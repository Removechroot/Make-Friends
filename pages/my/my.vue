<template>
	<view>
		<!-- #ifdef APP-PLUS -->
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
		//获取uni_id_token
		let res = uni.getStorageSync('uni_id_token');
		// ？？？ 这里uniCloud 更改了this指向，解决方法未知
		let that = this;
		// 调用 checkToken 方法
		uniCloud.callFunction({
			name: 'user-center',
			data: {
				action: 'checkToken',
				params: {
					token: res
				}
			},
			// 成功回调
			success({ result }) {
				if (result.code > 0) return;
				that.islogin = true;
				uni.setStorageSync('UserInfo',JSON.stringify({
					avatarUrl:result.userInfo.userInfo.avatarUrl,
					nickName:result.userInfo.userInfo.nickName,
					Uid:result.uid 
				}));
				that.userInfo = result.userInfo.userInfo;
			},
			//失败回调
			fail() {
				that.islogin = false;
				return
			}
		});
	},
	methods: {
		loginByWeixin() {
			if (this.islogin) return;
			uni.showLoading({
				title: '请稍后'
			});
			uni.login({
				provider: 'weixin',
				success: res => {
					this.GetopenID(res.code);
				}
			});
		},
		getUserInfo(uid) {
			let that = this;
			uni.getUserInfo({
				success: ({ userInfo }) => {
					uniCloud.callFunction({
						name: 'user-center',

						data: {
							action: 'pushuserinfo',
							uid,
							userInfo
						},
						success(res) {
							if (!res.success) return;
							uni.setStorageSync('UserInfo',JSON.stringify({
								avatarUrl:res.result.data[0].userInfo.avatarUrl,
								nickName:res.result.data[0].userInfo.nickName,
								Uid:res.result.data[0]._id
							}));
							that.userInfo = res.result.data[0].userInfo;
						}
					});

					this.islogin = true;
				}
			});
		},
		GetopenID(code) {
			uniCloud.callFunction({
				name: 'user-center',
				data: {
					action: 'loginByWeixin',
					params: {
						code
					}
				},
				success: res => {
					if (res.result.code === 0) {
						uni.setStorageSync('uni_id_token', res.result.token);
						this.getUserInfo(res.result.uid);
					}
				},
				fail() {
					uni.uni.showToast({
						title: '用户取消登录'
					});
				},
				complete() {
					uni.hideLoading();
				}
			});
		}
	}
};
</script>

<style></style>
