'use strict';
const db = uniCloud.database()
exports.main = async (event, context) => {
	if(event.ketword === "" || event.ketword === "?") return {
		status:-1,
		msg:"没有内容"
	}
	const collection = db.collection('table-list')
	
	const res = await collection.where({
		title: new RegExp(event.keyword)
	}).get() 
	let key = event.keyword
	return {
		status:200,
		res,
		key
	} // 返回json给客户端
};
