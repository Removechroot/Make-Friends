<script>
	export default {
		onLaunch: function() {
			let token = uni.getStorageSync("uni_id_token")
			uniCloud.callFunction({
				name:"user-center",
				data:{
					action:"checkToken",
					params:{
						token
					}
				}
			}).then(res=>{
				if(res.result.code > 0)  return
			})
			
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/* uni官方css */
	@import './common/uni.css';
	/*每个页面公共css */
	@import './common/common.css';
	/* iconfont图标库 */
	@import './common/icon.css';
	/* 公共动画库 */
	@import './common/animate.css';
	/* 自定义 Css库 der */
	@import './common/der.css';
	

</style>
