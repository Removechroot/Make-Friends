const db = uniCloud.database()
exports.main = async (event, context) => {

	//event为客户端上传的参数
	const collection = db.collection('table-list') // 获取表'unicloud-test'的集合对象
	const {affectedDocs} = await collection.get()
	const res = await collection.skip(event.page*5).limit(5).get() // 获取表中的10条数据，结果为json格式

	const obj = {
		total: affectedDocs,
		context: res
	}
	return obj // 返回json给客户端
};
