export default {
	//监听网络状态
	onNetWork() {
		let func = res => {
			if (res.networkType === 'none') {
				uni.showToast({
					title: '无网络连接请检查网路'
				});
			}
			uni.getNetworkType({success: func});
			uni.onNetworkStatusChange(func);
		}
	}
}
