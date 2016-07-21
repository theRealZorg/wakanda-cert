

(model.Task.methods.getUserTasks = function(userID) {
	var res = {
			status : false,
			result : {
				message : '',
				tasks : []
			}
		};
	
	try{
		res.result.tasks = ds.Task.query("developer.ID == :1",userID).toArray("label, project.name");
		res.status = true;
	
	}catch(e){
		res.result.message = e.message;
	}finally{
		return res;
	}
}).scope = 'public';