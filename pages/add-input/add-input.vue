<template>
	<view>
		<!-- 自定义导航模块 -->
		<uni-nav-bar left-icon="back" fixed status-bar :border="false" @goblack="goblack">
			<view class="flex align-center justify-center w-100">
				<text>所有人可见</text>
				<text class="iconfont icon-icon-test m-0"></text>
			</view>
		</uni-nav-bar>

		<!-- 文本域 -->
		<textarea v-model="content" placeholder="说一句话试试~" class="uni-textarea  mt-3 px-3" />
		<!-- 图片上传处理模块 -->
		<uni-upload-image v-show="show" :list="imageList" @change="changeimages" ref="uploadImage"></uni-upload-image>
		<!-- 底部操作 -->
		<view class="bg-white fixed-bottom flex align-center border-top" style="height: 120rpx;">
			<view class="iconfont icon-caidan  foor-btn"></view>
			<view class="iconfont icon-huati foor-btn"></view>
			<view class="iconfont icon-tupian foor-btn" hover-class="text-main" @click="iconClickEvent('uploadImage')"></view>

			<view
				@click="SendDynamic"
				class="bg-main text-white ml-auto flex justify-center align-center rounded mr-2 animate__animated"
				style="width: 140rpx;height: 60rpx;"
				hover-class="animate__jello"
			>
				发送
			</view>
		</view>
	</view>
</template>

<script>
import uniNavBar from '@/components/uni-ui/uni-nav-bar/uni-nav-bar.vue';
import uniUploadImage from '@/components/uni-ui/uni-upload-image.vue';

export default {
	components: { uniNavBar, uniUploadImage },
	data() {
		return {
			content: '',
			imageList: [],
			// 是不是已经弹出过提示框
			showback: false,
			result: [],
			UserInfo: {}
		};
	},
	computed: {
		show() {
			return this.imageList.length > 0;
		}
	},
	// 当用户有返回操作时
	onBackPress() {
		// 判断是否第一次显示保存草稿 并且 Imagelist 长度大于0 或者文本不等于空值
		if (!this.showback && (this.imageList.length > 0 || this.content !== '')) {
			this.goblackmodal();
			return true;
		}
	},
	// 页面加载时候自动获取本地存储
	onLoad() {
		uni.getStorage({
			key: 'add_input',
			success: res => {
				let result = JSON.parse(res.data);
				this.content = result.content;
				this.imageList = result.imageList;
			}
		});
	},

	methods: {
		changeimages(e) {
			this.imageList = e;
		},
		store() {
			// 设置storge方法
			uni.setStorage({
				key: 'add_input',
				data: JSON.stringify({
					content: this.content,
					imageList: this.imageList
				})
			});
		},
		// 删除storge方法
		removestore() {
			uni.removeStorage({
				key: 'add_input'
			});
		},
		// 返回方法
		goblack() {
			uni.navigateBack();
		},
		// 返回时候的提示框封装方法
		goblackmodal() {
			uni.showModal({
				content: '你是不是想保存草稿啊靓仔！',
				showCancel: '',
				showCancel: true,
				cancelText: '不保存',
				confirmText: '保存',
				complete: res => {
					// 当用户摁下保存时候
					if (res.confirm) {
						this.store();
					}
					// 当用户摁下取消时候
					else {
						this.removestore();
					}
					uni.navigateBack();
				}
			});
			this.showback = true;
		},
		// 底部图表点击事件
		iconClickEvent(e) {
			switch (e) {
				case 'uploadImage':
					this.$refs.uploadImage.chooseImage();
					break;
			}
		},
		SendDynamic() {
			uni.showToast({
				title: '发布中',
				icon: 'loading'
			});
			if (this.imageList.length > 0) {
				for (let i = 0; i < this.imageList.length; i++) {
					uniCloud
						.uploadFile({
							cloudPath: `images/${Date.now()}.jpg`,
							filePath: this.imageList[i]
						})
						.then(res => {
							if (!res.success) return;
							this.result.push({
								imgUrl: res.fileID
							});
							this.updatacloud();
						});
				}
			} else {
				this.updatacloud();
			}
		},
		updatacloud() {
			let UserInfo = JSON.parse(uni.getStorageSync('UserInfo'));
			uniCloud
				.callFunction({
					name: 'add-input',
					data: {
						username: UserInfo.nickName,
						userpic: UserInfo.avatarUrl.length > 0 ? UserInfo.avatarUrl : 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-mf-ser1/5c225bb0-093e-11eb-b244-a9f5e5565f30.jpg',
						newstime: Date.now(),
						isFollow: false,
						title: this.content,
						titlepic: this.result.length > 0 ? this.result : [],
						support: {
							type: '',
							support_count: 0,
							unsupport_count: 0
						},
						comment_count: 0,
						share_name: 0,
						review: [],
						Uid: this.UserInfo.Uid
					}
				})
				.then(() => {
					uni.showToast({
						title: '发布成功',
						success() {
							uni.reLaunch({
								url: '../home/index'
							});
						}
					});
				});
		}
	}
};
</script>

<style>
.foor-btn {
	width: 86rpx;
	height: 86rpx;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 50rpx;
}
</style>
