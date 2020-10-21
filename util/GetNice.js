export default{

	Nice(type,list,Uid){
		let msg = type.type === 'support' ? '顶成功' : '踩成功';
		if (list.support.type === '') {
			list.support.type = type.type;
			list.support[type.type + '_count']++;
			return;
		}
		// 如果之前顶了suppor
		if (list.support.type === 'support' && type.type === 'unsupport') {
			list.support.support_count--;
			list.support.unsupport_count++;
		}
		// 如果之前顶了unsuppor
		if (list.support.type === 'unsupport' && type.type === 'support') {
			list.support.support_count++;
			list.support.unsupport_count--;
		}
		list.support.type = type.type;
		let support = list.support
		this.typeManage(type.id,support,msg)
	},
	// 顶踩操作处理函数
	typeManage(id,support,msg) {
		uniCloud.callFunction({ 
			name:"update",
			data:{
				type:"typeManage",
				id,
				support
			}  
		}).then(res=>{ 
			if(res.result.status !== 0) return
			uni.showToast({ 
				title: msg,  
	
			})  
		})  
	}
}
	 