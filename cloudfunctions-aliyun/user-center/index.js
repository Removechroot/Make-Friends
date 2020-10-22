const uniID = require('uni-id');
const db = uniCloud.database();
exports.main = async (event, context) => {
	let params = event.params || {}
	let noCheckAction = ['loginByWeixin', 'code2SessionWeixin', 'checkToken','pushuserinfo']
	if (noCheckAction.indexOf(event.action) === -1) {
		return {
			code: 403,
			msg: '缺少参数'
		}
	}
	let res = {}
	switch (event.action) {
		case 'loginByWeixin':
			res = await uniID.loginByWeixin({
				code: params.code
			});
			break;
		case 'code2SessionWeixin':
			res = await uniID.code2SessionWeixin({
				code: params.code
			})
			break;
		case 'checkToken':
			res = await uniID.checkToken(params.token)
			break;
		case 'pushuserinfo': // 首次登录上传用户信息
			const collection = db.collection('uni-id-users')
			updata = await collection.doc(event.uid).update({
				userInfo:event.userInfo
			})
			res = await collection.where({
				_id:event.uid
			}).limit(1).get()

			
			break;
		default:
			res = {
				code: 403,
				msg: '非法访问'
			}
			break;
	}
	return res


}
