export default {
	//设置头像
	setAvatar() {
		uniCloud.callFunction({
			name: 'user-center',
			data: {
				action: 'setAvatar',
				params: {
					avatar: 'https://img.cdn.aliyun.dcloud.net.cn/uni-app/uniCloud/unicloudlogo.png'
				}
			},
			success(res) {
				uni.showModal({
					showCancel: false,
					content: JSON.stringify(res.result)
				})
			},
			fail(e) {
				console.error(e)
				uni.showModal({
					showCancel: false,
					content: '设置失败，请稍后再试'
				})
			}
		})
	},
	//更新用户信息
	updateUser() {
		uniCloud.callFunction({
			name: 'user-center',
			data: {
				action: 'updateUser',
				params: {
					nickname: '法外狂徒张三'
				}
			},
			success(res) {
				uni.showModal({
					showCancel: false,
					content: JSON.stringify(res.result)
				})
			},
			fail(e) {
				console.error(e)
				uni.showModal({
					showCancel: false,
					content: '请求云函数失败，请稍后再试'
				})
			}
		})
	},
	/// 检查 TOken
	checkToken(toKen) {
		console.warn('注意1.1.0版本会返回userInfo，请不要返回全部信息给客户端')
		uniCloud.callFunction({
			name: 'user-center',
			data: {
				action: 'checkToken',
				uniIdToken: toKen
			},
			success(res) {
				return res
			},
			fail(e) {
				console.error(e)
				uni.showModal({
					showCancel: false,
					content: '请求云函数失败，请稍后再试'
				})
			}
		})
	},
	// 密码强度
	encryptPwd() {
		uniCloud.callFunction({
			name: 'user-center',
			data: {
				action: 'encryptPwd'
			},
			success(res) {
				uni.showModal({
					showCancel: false,
					content: JSON.stringify(res.result)
				})
			},
			fail(e) {
				console.error(e)
				uni.showModal({
					showCancel: false,
					content: '重置失败，请稍后再试'
				})
			}
		})
	},
	// 退出登录
	logout() {
		uniCloud.callFunction({
			name: 'user-center',
			data: {
				action: 'logout'
			},
			success(res) {
				uni.showModal({
					showCancel: false,
					content: JSON.stringify(res.result)
				})
				uni.removeStorageSync('uni_id_token')
				uni.removeStorageSync('uni_id_token_expired')
			},
			fail(e) {
				console.error(e)
				uni.showModal({
					showCancel: false,
					content: '登出失败，请稍后再试'
				})
			}
		})
	},
}
