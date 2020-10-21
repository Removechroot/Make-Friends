const db = uniCloud.database()
exports.main = async (event, context) => {
    //event为客户端上传的参数
    const collection = db.collection('table-list') // 获取表'unicloud-test'的集合对象
    // const res = await collection.where({"isFollow":true}).skip(event.page*5|| 0).limit(5).get() // 获取表中的10条数据，结果为json格式
    const {affectedDocs} = await collection.where({"isFollow":true}).get() // 获取表中的10条数据，结果为json格式
    const res = await collection.where({
		"isFollow":true,
		"Uid":event.Uid
		
	}).skip(event.page*5|| 0).limit(5).get() // 获取表中的10条数据，结果为json格式

	
    return {
		affectedDocs,
		context:res.data
		
	} // 返回json给客户端
};