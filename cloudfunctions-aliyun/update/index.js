'use strict';
const db = uniCloud.database()
exports.main = async (event, context) => {
	const collection = db.collection('table-list')
	const docList = await collection.get();

	if (!docList.data || docList.data.length === 0) {
		return {
			status: -1,
			msg: '集合table-list内没有数据'
		}
	}
	if (event.type === "isFollow") {
		var res = await collection.doc(event.id).update({
			isFollow: event.isFollow
		});
	} else if (event.type === "typeManage") {
		var res = await collection.doc(event.id).update({
			support:event.support
		});
	}else if(event.type === "review"){
		var res = await collection.doc(event.id).update({
			review:event.review,
			comment_count:event.comment_count
		});
	}

	// 
	if (res.updated === 1) {
		return { 
			status: 0,
			msg: `修改成功`
		}
	} else {
		return {
			status: -1,
			msg: `修改失败`
		}
	}
};
