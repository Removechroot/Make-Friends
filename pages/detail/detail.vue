<template>
	<view>
		<!-- 帖子详细信息 -->
		<common-list :item="info" isdetail @doComment="doComment" @Follow="follow" @doShare="doShare" @type="dosupport">
			<view class="">
				{{ info.content }}
				<view><image :src="item.url" mode="" v-for="(item, index) in info.images" @click="preview(index)" :key="index" class="w-100" mode="widthFix"></image></view>
			</view>
		</common-list>
		<divider></divider>
		<view class="p-2 font-md font-weight-bold">最新评论：</view>
		<view class="px-2">
			<view class="uni-comment-list">
				<view class="uni-comment-face"><image src="../../static/demo2ima.jpg" mode="widthFix"></image></view>
				<view class="uni-comment-body">
					<text>我是狗</text>
					<view class="uni-comment-content">真的是狗</view>
					<view class="uni-comment-date"><view>2天前</view></view>
				</view>
			</view>
		</view>
		<more-share ref="share"></more-share>
		<!-- 占位 -->
		<view style="height: 100rpx;"></view>
		<bottonBtn :submit="submit"></bottonBtn>
		
	</view>
</template>

<script>
import commonList from '@/components/common/common-list.vue';
import bottonBtn from '@/components/common/botton-btn.vue';
import moreShare from '@/components/common/more-share.vue';


export default {
	components: {
		commonList,
		bottonBtn,
		moreShare
	},
	onNavigationBarButtonTap() {
		this.$refs.share.open();
	},
	onBackPress() {
		this.$refs.share.close();
	},
	data() {
		return {
			info: {
				username: '罗三岁小可爱',
				userpic: '../../static/xk.jpg',
				newstime: '2020-20-20 下午4:32',
				isFollow: false,
				title: '震惊...我居然舔了两口猫屁股',
				titlepic: '../../static/mpg.jpg',
				support: {
					type: '',
					support_count: '2',
					unsupport_count: 2
				},
				comment_count: 2,
				share_name: 2,
				images: [{ url: '/static/lxg-1.jpg' }, { url: '/static/xia.jpg' }],
				content: 'asasddsasd'
			},
			
		};
	},
	onLoad(e) {
		// 初始化
		if (!e.detail) return;
		this.__init(JSON.parse(e.detail));
	},
	computed: {
		imageslist() {
			return this.info.images.map(item => item.url);
		}
	},

	methods: {
		__init(data) {
			// 修改标题
			uni.setNavigationBarTitle({
				title: data.title
			});
			// 请求api
		},
		// 点击评论
		doComment() {},
		// 点击分享
		doShare() {},
		// 点击关注
		follow(index) {
			this.info.isFollow = true;
			uni.showToast({
				title: '关注成功'
			});
		},
		// 顶踩操作
		dosupport(e) {
			let msg = e.type === 'support' ? '顶' : '踩';
			if (this.info.support.type === e.type)
				return uni.showToast({
					title: '你已操作'
				});
			// 是不是首次操作
			if (this.info.support.type === '') {
				this.info.support[e.type + '_count']++;
			} else if (this.info.support.type === 'support' && e.type === 'unsupport') {
				this.info.support.support_count--;
				this.info.support.unsupport_count++;
			} else if (this.info.support.type === 'unsupport' && e.type === 'support') {
				this.info.support.support_count++;
				this.info.support.unsupport_count--;
			}
			this.info.support.type = e.type;
			uni.showToast({
				title: msg
			});
		},
		// 预览图片
		preview(index) {
			uni.previewImage({
				urls: this.imageslist,
				count: index
			});
		},
		submit(data) {
			let obj = {
				user_id: 1,
				avatar: '/static/mb.jpg',
				username: '昵称',
				msg: data,
				type: 'text',
				create_time: new Date().getTime()
			};

			this.list.push(obj);
		}
	}
};
</script>

<style></style>
