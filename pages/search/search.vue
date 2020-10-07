<template>
	<view>
		<template v-if="searchList.length === 0">
			<!-- 搜索历史 -->
			<view class="py-2 font-md px-2">搜索历史</view>
			<view class="flex flex-wrap">
				<view class="border rounded border font mx-2 my-1 px-3 " hover-class="bg-light" v-for="item in list" :key="item" @click="clickSearchHistory(item)">{{ item }}</view>
			</view>
		</template>

		<template v-else>
			<!-- 数据列表 -->
			<block v-for="(item, index) in searchList" :key="index">
				<template v-if="type === 'post'">
				<!-- 帖子 -->
				<common-list :item="item" :index="index"></common-list>
				</template>
				<!-- 话题 -->
				<template v-else-if="type==='topic'">
				<topic-list :index='index' :item="item"></topic-list>
				</template>
				<!-- 用户 -->
				<template v-else>
				<user-list :index='index' :item="item"></user-list>
				</template>
				</block>
		</template>
	</view>
</template>

<script>
// 模拟数据

const demo = [
	{
		username: '罗三岁小可爱',
		userpic: '../../static/xk.jpg',
		newstime: '2020-20-20 下午4:32',
		isFollow: false,
		title: '震惊...我居然舔了两口猫屁股',
		titlepic: '../../static/mpg.jpg',
		support: {
			type: '',
			support_count: '999+',
			unsupport_count: 2
		},
		comment_count: 2,
		share_name: 2
	},
	{
		username: '虾老板',
		userpic: '../../static/xia.jpg',
		newstime: '2020-20-20 下午4:32',
		isFollow: false,
		title: '...居然让我....',
		titlepic: '',
		support: {
			type: 'unsupport',
			support_count: 0,
			unsupport_count: '999+'
		},
		comment_count: 2,
		share_name: 2
	},
	{
		username: '面包渣',
		userpic: '../../static/mb.jpg',
		newstime: '2020-20-20 下午4:32',
		isFollow: false,
		title: '文明观猴禁止炸房',
		titlepic: '../../static/kx.jpg',
		support: {
			type: '',
			support_count: 1,
			unsupport_count: 2
		},
		comment_count: 2,
		share_name: 2
	},
	{
		username: '虾老板的狗',
		userpic: '../../static/lxg.jpg',
		newstime: '2020-20-20 下午4:32',
		isFollow: false,
		title: '我是狗',
		titlepic: '../../static/lxg-1.jpg',
		support: {
			type: '',
			support_count: 1,
			unsupport_count: 2
		},
		comment_count: 2,
		share_name: 2
	},
	{
		username: '小可的猫',
		userpic: '../../static/xkm.jpg',
		newstime: '2020-20-20 下午4:32',
		isFollow: false,
		title: '我是猫',
		titlepic: '../../static/xkm.jpg',
		support: {
			type: 'unsupport',
			support_count: 0,
			unsupport_count: 1
		},
		comment_count: 2,
		share_name: 2
	},
	{
		username: '小狗',
		userpic: '../../static/timg.jpg',
		newstime: '2020-20-20 下午4:32',
		isFollow: false,
		title: '我虽然是够但是主人是真的狗',
		titlepic: '',
		support: {
			type: '',
			support_count: 1,
			unsupport_count: 2
		},
		comment_count: 2,
		share_name: 2
	},
	{
		username: '我是WWWWWW',
		userpic: '../../static/timg.jpg',
		newstime: '2020-20-20 下午4:32',
		isFollow: false,
		title: '我潜水！！！！你们加油 奥利给',
		titlepic: '../../static/u=1465454355,109973978&fm=26&gp=0.jpg',
		support: {
			type: '',
			support_count: 1,
			unsupport_count: 2
		},
		comment_count: 2,
		share_name: 2
	},
	{
		username: '虾老板',
		userpic: '../../static/xia.jpg',
		newstime: '2020-20-20 下午4:32',
		isFollow: false,
		title: '我今晚想唱歌 可以吗',
		titlepic: '../../static/u=1465454355,109973978&fm=26&gp=0.jpg',
		support: {
			type: '',
			support_count: 1,
			unsupport_count: 2
		},
		comment_count: 2,
		share_name: 2
	}
];
const demo2 = [
	{
		cover: '/static/demo1ima.jpg',
		title: '话题名称',
		desc: '话题描述',
		today_count: 0,
		news_count: 10
	},
	{
		cover: '/static/demo2ima.jpg',
		title: '话题名称',
		desc: '话题描述',
		today_count: 0,
		news_count: 10
	},
	{
		cover: '/static/demo1ima.jpg',
		title: '话题名称',
		desc: '话题描述',
		today_count: 0,
		news_count: 10
	},
	{
		cover: '/static/demo2ima.jpg',
		title: '话题名称',
		desc: '话题描述',
		today_count: 0,
		news_count: 10
	}
];
const demo3 = [
	{
		avatar: '/static/lxg.jpg',
		username: '用户1',
		age: 21,
		sex: 0,
		isFollow: false
	},
	{
		avatar: '/static/lxg.jpg',
		username: '用户2',
		age: 21,
		sex: 1,
		isFollow: true
	}
];
import commonList from '@/components/common/common-list.vue';
import topicList from '@/components/news/topic-list.vue';
import userList from '@/components/user-list/user-list.vue';
export default {
	components: {
		commonList,
		topicList,
		userList
	},
	data() {
		return {
			list: ['uni-app', 'c#', 'python', 'JAVA', 'photoshop', '这是一段很长的文本'],
			searchtext: '',
			searchList: [],
			// 当前搜索类型
			type: 'post'
		};
	},
	// 用户输入内容时候
	onNavigationBarSearchInputChanged(e) {
		this.searchtext = e.text;
	},
	// 点击了自定义按钮时候
	onNavigationBarButtonTap(e) {
		if (e.index === 0) {
			this.searEvent();
		}
	},
	onLoad(type) {
		if (!type.type) return;
		this.type = type.type;
		let pageTitle = '帖子';
		switch (this.type) {
			case 'post':
				pageTitle = '帖子';
				break;
			case 'topic':
				pageTitle = '话题';
				break;
			case 'user':
				pageTitle = '用户';
				break;
		}
		// 修改搜索占位
		// #ifdef APP-PLUS
		let currentWebview = this.$mp.page.$getAppWebview();
		let tn = currentWebview.getStyle().titleNView;
		// console.log(tn)
		tn.searchInput.placeholder = '搜索' + pageTitle;
		currentWebview.setStyle({
			titleNView: tn
		});
		// #endif
	},
	methods: {
		// 点击历史记录
		clickSearchHistory(text) {
			this.searchtext = text;
			this.searEvent();
		},
		searEvent() {
			// 收起键盘
			uni.hideKeyboard();
			// 进入loading状态
			uni.showLoading({
				title: '正在载入',
				mask: true,
				complete: () => {
					// 模拟获取数据
					setTimeout(() => {
						switch (this.type) {
							case 'post':
								this.searchList = demo;
								break;
							case 'topic':
								this.searchList = demo2;
								break;
							case 'user':
								this.searchList = demo3;
								break;
						}

						uni.hideLoading();
					}, 2000);
				}
			});
		}
	}
};
</script>

<style lang="scss"></style>
