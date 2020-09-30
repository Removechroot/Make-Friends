<template>
	<view>
		<view class="flex align-center justify-between">
			<text class="font-md">热门分类</text>
			<view class="flex align-center font text-secondary animate__animated" hover-class="animate__jello" @click="OpenMore">
				更多<text class="iconfont icon-jinru"></text>
			</view>
		</view>
		<view class="flex align-center py-3 border-bottom px-1">
			<view class="border rounded bg-light mx-1 px-2 animate__animated "
			hover-class="animate__jello"
			v-for="item in  hotCart" :key="item.name" @click="Opendetail(item,index)">
				{{item.name}}
			</view>
		
		
		</view>
	</view>
</template>

<script>
	export default {
		props:['hotCart'],
		data() {
			return {

			}
		},
		methods: {
			OpenMore(){
				console.log('Send More')
				this.$emit('more')
			},
			Opendetail(...arges){
				console.log('Send detail')
				this.$emit('Opendetail',arges)
			}
		}
	}
</script>

<style>

</style>
