const db = uniCloud.database()
exports.main = async (event, context) => {
	const collection = db.collection('table-list')
	const res = await collection.add(event)
	return res
};