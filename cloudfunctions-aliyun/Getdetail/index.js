'use strict';
const db = uniCloud.database()
exports.main = async (event, context) => {
	const collection = db.collection('table-list')
	const res = await collection.where({
		_id:event.cid
	}).limit(1).get()
	return res
};
