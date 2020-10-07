<template>
	<view  style="height: 100rpx;" class="fixed-bottom flex align-center border-top bg-white">
		<input type="text" value="" class="flex-1 rounded bg-light ml-2" style="padding: 5rpx;" v-model="content" placeholder="文明发炎从我做起" @confirm="submit" />
		<view
			@click="submit"
			class="iconfont icon-fabu flex align-center justify-center font-lg animate__animated"
			hover-class="animate__jello text-main"
			style="width: 100rpx;"
		></view>
		</view>
</template>
 
<script>
	export default{
		data(){
			return{
				content:''
			}
			},methods:{
				submit(){
					if (this.content === '') {
						return uni.showToast({
							title: '消息不能为空'
						});
					}
					this.$emit('submit',this.content)
					this.content = ''
				}
			}
	}
</script>

<style>
</style> 
