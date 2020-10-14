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
			<swiper-item v-for="(item, index) in newsList" :key="index">
				<scroll-view scroll-y :style="'height:' + windowHeight + 'px'" @scrolltolower="loadmore(index)">
					<template v-if="item.list.length > 0">
						<!-- 内容渲染 -->
						<block v-for="(item2, index2) in item.list" :key="index2">
							<common-list :item="item2" :index="index2" @Follow="Follow" @type="type"></common-list>
							<!-- 全局分割线 -->
							<divider></divider>
						</block>
						<!-- 上拉加载模块 -->
						<!-- <load-more :loadmore="item.loadmore"></load-more> -->
						<template v-if="item.list.length >2">
						<uni-load-more :status="status"></uni-load-more>
						</template>
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
import commonList from '@/components/common/common-list.vue';
// import loadMore from '@/components/common/load-more';
import uniLoadMore from '@/components/uni-load-more/uni-load-more.vue';
export default {
	components: {
		commonList,
		// loadMore
		uniLoadMore
	},
	data() {
		return {
			tabltlist: [],
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
			newsList: [],
			page: 0,
			total: 0,
			arr: [],
			status: 'more'
		};
	},
	// 点击自定义按钮
	onNavigationBarButtonTap(e) {
		uni.navigateTo({
			url: '../add-input/add-input'
		});
	},
	// 点击搜索文本框
	onNavigationBarSearchInputClicked() {
		uni.navigateTo({
			url: '../search/search?type=post'
		});
	},
	onPullDownRefresh() {
		setTimeout(() => {
			this.getdata();
			uni.stopPullDownRefresh();
		}, 800);
	},
	onLoad() {
		let getwindows = uni.getSystemInfoSync();
		this.windowHeight = getwindows.windowHeight - uni.upx2px(102);

		if (this.tabBars.length) {
			this.getlist();
		}
	},
	computed: {},
	methods: {
		async getlist() {
			let res = await uniCloud.callFunction({
				name: 'gettablelist',
				data: {
					page: this.page
				}
			});
			for (let i = 0; i < this.tabBars.length; i++) {
				this.arr.push({
					list: []
				});
			}

			this.newsList = this.arr;
			if (res.success) {
				this.arr[this.tabIndex].list = res.result.context.data;
				this.newsList= this.arr
				this.total = res.result.total;
			}
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
			this.getlist();
		},
		onchange(index) {
			let { detail } = index;
			this.changetTab(detail.current);
		},
		// 上拉加载更多
		 loadmore(index) {
			 //如果 不是上拉加载更多状态 允许进入
			if (this.status !== 'more') return;
			//如果 总条数相等 不允许进入
			if(this.total === this.newsList[this.tabIndex].list.length) return this.status = "nomore"
			// 设置加载中状态
			this.status="loading"
			// +1页码
			this.page++
			// 调用 云函数
			uniCloud.callFunction({
				name: 'gettablelist',
				data: {
					page: this.page
				}
			}).then(res=>{
				if(res.success){
					// list 为新值
					let list = res.result.context.data
					// 旧数据 与新数据合并
					this.newsList[this.tabIndex].list=([...this.newsList[this.tabIndex].list,...list])
					// 还原上拉加载更多
					this.status = 'more' 
				} 
			})

		}
	}
};
</script>

<style lang="scss"></style>
