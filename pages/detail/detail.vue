<template>
	<view v-if="IsShow">
		<!-- 帖子详细信息 -->
		<common-list :item="info" isdetail @doComment="doComment" @Follow="Follow" @doShare="doShare" @type="type">
			<view class="">
				{{ info.content }}
				<view>
					<block v-if="info.titlepic.length > 0">
						<image :src="item.imgUrl" mode="" @click="preview(index)" class="w-100" mode="aspectFit" v-for="(item, index) in info.titlepic"></image>
					</block>
				</view>
			</view>
		</common-list>
		<divider></divider>
		<view class="p-2 font-md font-weight-bold">最新评论：</view>
		<view class="px-2">
			<template v-if="review.length > 0">
			<view class="uni-comment-list" v-for="(item,index) in review">
				<view class="uni-comment-face"><image :src="item.avatar" mode="widthFix"></image></view>
				<view class="uni-comment-body">
					<text>{{ item.username }}</text>
					<view class="uni-comment-content">{{ item.msg }}</view>
					<view class="uni-comment-date">
						<view>{{ item.create_time|formatTime}}</view>
					</view>
				</view>
			</view>
			</template>
			<template v-else>
				<nothing>
					<view>
						抢沙发你是第一个！加油
					</view>
				</nothing>
			</template>
		</view>
		<more-share ref="share"></more-share>
		<!-- 占位 -->
		<view style="height: 100rpx;"></view>
		<bottonBtn @submit="submit"></bottonBtn>
	</view>
</template>

<script>
import commonList from '@/components/common/common-list.vue';
import bottonBtn from '@/components/common/botton-btn.vue';
import moreShare from '@/components/common/more-share.vue';
import GetNice from '../../util/GetNice.js';
import formatTime from '../../common/time.js';

export default {

	filters: {
		formatTime(value) {
			return formatTime.gettime(value);
		}
	},
	components: {
		commonList,
		bottonBtn,
		moreShare
	},
	onNavigationBarButtonTap() {
		this.$refs.share.open();
	},
	onBackPress() {
		this.info = [];
		// this.$refs.share.close();
	},
	data() {
		return {
			info: {},
			IsShow: false,
			review:[]
		};
	},
	onLoad(e) {
		// 初始化
		if (!e.detail) return;
		// 将传过来的参数转换成JOSN格式
		let { cid } = JSON.parse(e.detail);
		//调用云函数 调取table—list数据
		uniCloud
			.callFunction({
				name: 'Getdetail',
				data: {
					cid
				}
			})
			.then(res => {
				if (!res.success) return;
				let { data } = res.result;
				this.info = data[0];
				this.review = data[0].review
				this.IsShow = true;
				uni.setNavigationBarTitle({
					title: this.info.title
				});
			});
	},
	computed: {
		imageslist() {
			return this.info.titlepic.map(item => item.imgUrl);
		}
	},

	methods: {
		// 点击评论
		doComment() {},
		// 点击分享
		doShare() {},
		// 点击关注
		Follow(data) {
			let { id, type, index } = data;
			uniCloud
				.callFunction({
					name: 'update',
					data: {
						type: 'isFollow',
						id,
						isFollow: type
					}
				})
				.then(res => {
					if (res.result.status !== 0) return;
					this.info.isFollow = type;
					let msg = type === true ? '关注成功' : '取消关注';
					uni.showToast({
						title: msg
					});
				});
		},
		type(type) {
			GetNice.Nice(type, this.info);
		},
		// 预览图片
		preview(index) {
			uni.previewImage({
				urls: this.imageslist,
				count: index
			});
		},
		submit(data) {
			uni.showToast({
				title:"提交中...",
				icon:"loading"
			})
			let obj = {
				user_id: 1,
				avatar: '/static/mb.jpg',
				username: '昵称',
				msg: data,
				type: 'text',
				create_time: new Date().getTime()
			};
			this.review.push(obj);
			uniCloud.callFunction({
				name:"update",
				data:{
					type:"review",
					id:this.info._id,
					review:this.review,
					comment_count:this.review.length 
				} 
			}).then(()=>{ 
				uni.showToast({
					title:"发布成功"
				})
			})
		}
	}
};
</script>

<style></style>
