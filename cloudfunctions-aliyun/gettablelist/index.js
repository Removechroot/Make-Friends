const db = uniCloud.database()
exports.main = async (event, context) => {
	//event为客户端上传的参数
	const collection = db.collection('table-list') // 获取表'unicloud-test'的集合对象
	const {affectedDocs} = await collection.get()
	// const res = await collection.skip(event.page*5 || 0).limit(5).get() 
	const res = await collection.orderBy("newstime","desc").skip(event.page*5 || 0).limit(5).get() 

	const obj = {
		total: affectedDocs,
		context: res
	}
	return obj // 返回json给客户端
};
