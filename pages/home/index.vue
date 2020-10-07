<template>
	<view>
		<!-- 顶部选项卡 -->
		<scroll-view scroll-x class="scroll-row border-bottom border-light-secondary" :scroll-into-view="scrollInto" scroll-with-animation style="height: 100rpx;">
			<view
				v-for="item in tabBars"
				:key="item.id"
				:id="'tab_' + item.id"
				class="scroll-row-item px-3 py-1 font-md"
				:class="tabIndex == item.id ? 'text-main font-lg font-weight-bold' : ''"
				@click="changetTab(item.id)"
			>
				{{ item.name }}
			</view>
		</scroll-view>

		<!-- 滑动视图 -->
		<swiper :duration="150" :current="tabIndex" @change="onchange" :style="'height:' + windowHeight + 'px'">
			<swiper-item v-for="(item, index) in newsList" :key="item.id">
				<scroll-view scroll-y :style="'height:' + windowHeight + 'px'" @scrolltolower="loadmore(index)">
					<template v-if="item.list.length > 0">
					
					<!-- 内容渲染 -->
					<block v-for="(item2, index2) in item.list" :key="index2">
						<common-list :item="item2" :index="index2" @Follow="Follow" @type="type"></common-list>
						<!-- 全局分割线 -->
						<divider></divider>
					</block>
					<!-- 上拉加载模块 -->
					<load-more :loadmore="item.loadmore"></load-more>
					</template>
					<template v-else>
						<nothing></nothing>
					</template>
				</scroll-view>
			</swiper-item>
		</swiper>
	</view>
</template>
 
<script>
	const demo = [{
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
						},{
							username: '虾老板',
							userpic: '../../static/xia.jpg',
							newstime: '2020-20-20 下午4:32',
							isFollow: false,
							title: '我喜欢了一个30岁的女人...居然让我....',
							titlepic: '',
							support: {
								type: 'unsupport',
								support_count: 0,
								unsupport_count: '999+'
							},
							comment_count: 2,
							share_name: 2
						}]
import commonList from '@/components/common/common-list.vue';
import loadMore from '@/components/common/load-more';
export default {
	components: {
		commonList,
		loadMore
	},
	data() {
		return {
			windowHeight: 0,
			scrollInto: '',
			tabIndex: 0,
			tabBars: [
				{
					name: '关注',
					id: 0
				},
				{
					name: '推荐',
					id: 1
				},
				{
					name: '热点',
					id: 2
				},
				{
					name: '财经',
					id: 3
				},
				{
					name: '娱乐',
					id: 4
				},
				{
					name: '军事',
					id: 5
				},
				{
					name: '历史',
					id: 6
				},
				{
					name: '本地',
					id: 7
				}
			],
			newsList: []
		};
	},
	// 点击自定义按钮
	onNavigationBarButtonTap(e){
			uni.navigateTo({
				url:"../add-input/add-input"
			})
		},
	// 点击搜索文本框
	onNavigationBarSearchInputClicked(){
		uni.navigateTo({
			url:'../search/search?type=post'
		})
	},
	onPullDownRefresh(){
			setTimeout(()=>{
				this.getdata()
				uni.stopPullDownRefresh()
			},800)
	},
	onLoad() {
		
		//临时代码
		uni.getStorage({
			key:"addlist",
			success:res=>{
				let result = res.data
				demo.unshift(result)
			}
			
		})
		
		
		
		// 临时代码
		
		
		
		
		
		let getwindows = uni.getSystemInfoSync();
		this.windowHeight = getwindows.windowHeight - uni.upx2px(102);
		this.getData();
	},
	computed: {},
	methods: {
		getData() {
			var arr = [];
			for (let i = 0; i < this.tabBars.length; i++) {
				let obj = {
					// 1.上拉加载更多 2.加载中 3.没有更多数据
					loadmore: '上拉加载更多',
					list: []
				};
				if(i < 2 ) obj.list = demo
				arr.push(obj);
			}
			this.newsList = arr;
		},
		Follow(index) {
			this.list[index].isFollow = true;
			uni.showToast({
				title: '关注成功'
			});
		},
		// 顶踩操作
		type(type) {
			console.log(type);
			// 如果是首次顶
			let item = this.newsList[0].list[type.index];
			let msg = type.type === 'support' ? '顶成功' : '踩成功';
			if (item.support.type === '') {
				console.log(1);
				item.support.type = type.type;
				item.support[type.type + '_count']++;
				return;
			}
			// 如果之前顶了suppor
			if (item.support.type === 'support' && type.type === 'unsupport') {
				console.log(2);
				item.support.support_count--;
				item.support.unsupport_count++;
			}
			// 如果之前顶了unsuppor
			if (item.support.type === 'unsupport' && type.type === 'support') {
				console.log(3);
				item.support.support_count++;
				item.support.unsupport_count--;
			}
			item.support.type = type.type;
			uni.showToast({
				title: msg
			});
		},
		changetTab(index) {
			if (this.tabIndex === index) return;
			this.tabIndex = index;
			this.scrollInto = 'tab_' + index;
		},
		onchange(index) {
			let { detail } = index;
			this.changetTab(detail.current);
		},
		// 上拉加载更多
		loadmore(index) {
			// 拿到当前列表
			let list = this.newsList[index];
			if (list.loadmore !== '上拉加载更多') return;
			// 修改当前列表加载状态
			list.loadmore = '努力加载中...';

			// 模拟数据请求
			setTimeout(() => {
				list.list = [...list.list, ...list.list];
				list.loadmore = '上拉加载更多';
			}, 800);
		}
	}
};
</script>

<style lang="scss"></style>
