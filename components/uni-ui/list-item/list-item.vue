<template>
	<view  hover-class="bg-light" @click="click">
		<view class="flex align-center py-3 px-4 justify-center">
			<text class="iconfont" :class="icon"></text>
			<text class="flex-1 px-1">{{title}}</text>
			<slot></slot>
			<text class="iconfont icon-jinru text-muted"></text>
		</view>
	</view>
</template>

<script>
	export default{
		props:{
			title:{
				type:String,
				default:'',
				
			},
			icon:{
				type:String,
				default:''
			}
			},
		data(){
			return{
				}
			},
			methods:{
				click(){
					this.$emit('click')
				}
			}
	}
</script>