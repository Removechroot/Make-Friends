<template>
	<view>
		<!-- 详细页头部样式 -->
		<topic-detail :info="info"></topic-detail>
		<divider></divider>
		<view class="p-2 flex align-center border-bottom " hover-class="bg-light" v-for="(item, index) in hostList" :key="index">
			<text class="iconfont icon-xihuan1 text-main"></text>
			<text class="font text-dark text-ellipsis">{{ item.title }}</text>
		</view>
		<divider></divider>
		<!-- tab -->
		<view class="flex align-center py-2">
			<view class="flex-1 font-md  flex align-center justify-center" @click="OnclickEvent(0)" :class="tabindex ===0? 'text-main font-lg font-weight-bold': ''">默认</view>
			<view class="flex-1 font-md flex align-center justify-center" @click="OnclickEvent(1)" :class="tabindex ===1? 'text-main font-lg font-weight-bold': ''">最新</view>
		</view>

		<!-- 列表 -->
		<template v-if="listdata.length>0">
		
		<block v-for="(item, index) in listdata" :ket="index">
			<common-list :item="item" :index="index"></common-list>
			<divider></divider>
		</block>
		</template>
		
		<template v-else>
			<nothing></nothing>
		</template>
		<!-- 上拉加载更多 -->
		<load-more :loadmore="loadtext"></load-more>
		
	</view>
</template>

<script>
const demo = [{
						username: '测试账号',
						userpic: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-mf-ser1/bab00190-e3a6-4624-b380-a95a6436961a.jpg',
						newstime: 1603279506555,
						isFollow: false,
						title: '微信小程序版本可通过以下二维码扫码查看',
						  titlepic: [
						    {
						      imgUrl: "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-mf-ser1/31477a10-144c-11eb-899d-733ae62bed2f.jpg"
						    },
						    {
						      imgUrl: "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-mf-ser1/31477a10-144c-11eb-899d-733ae62bed2f.jpg"
						    },
						    {
						      imgUrl: "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-mf-ser1/31477a10-144c-11eb-899d-733ae62bed2f.jpg"
						    }
						  ],
						support: {
							type: '',
							support_count: 99,
							unsupport_count: 2
						},
						comment_count: 2,
						share_name: 2
					}]
import topicDetail from '../../components/topic-detail/topic-detail.vue'
import commonList from '@/components/common/common-list.vue';
import nothing from '../../components/common/nothing.vue'
import loadMore from '@/components/common/load-more';
export default {
	components:{
		topicDetail,
		commonList,
		nothing,
		loadMore
	},
	computed:{
		// 当前列表数据
		listdata(){
			return this.tabindex === 0 ? this.defauledata : this.hotData
		},
		// 当前上拉加载
		loadtext(){
			return this.tabindex === 0 ? this.loadtext1 : this.loadtext2
		}
	},
	onReachBottom() {
		this.loadmore()
	},
	data() {
		return {
			info:[],
			hostList:[
				{
				"title":'[新人必读]这是我也不知道为了凑数撑开写的字然后还得为了测试长度溢出问题'
				},
				{
				"title":'[新人必读2]这是我也不知道为了凑数撑开写的字然后还得为了测试长度溢出问题'
				}
			],
			// 默认列表
			defauledata:[],
			hotData:[],
			tabindex:0,
			loadtext1:'上拉加载更多',
			loadtext2:'上拉加载更多'

		}
	},
	onLoad(e) {

		if(!e) return
		let res = JSON.parse(e.detail)
		this.info = res
		this.defauledata = demo
	},
	methods: {
		OnclickEvent(index){
			this.tabindex=index
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
		loadmore(){
			// 拿到当前列表下标
			let index = this.tabindex
			// 判断是否处于可加载状态
			console.log(index)
			if(this.loadtext !== "上拉加载更多") return
			// 设置上拉加载数据处于加载中
			console.log('1')
			// 模拟请求
			if(index === 0){
				console.log('2')
				this.loadtext1 = '加载中...'
				setTimeout(()=>{
					this.defauledata = [...this.defauledata,...this.defauledata]
					this.loadtext1= "上拉加载更多"
				},2000)
			}else{
				console.log('3')
				this.loadtext2 = '加载中...'
				setTimeout(()=>{
					this.hotData = [...this.hotData,...this.hotData]
					this.loadtext2 = "上拉加载更多"
				},2000)
			}
		
			
		}
	}
}
</script>

<style></style>
