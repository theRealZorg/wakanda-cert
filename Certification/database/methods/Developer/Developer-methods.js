model.Developer.methods.addDeveloper = function(user) {
var res = {
    status: false,
    result: {
        message: '',
        dev: {}
    }

};


try {
    var theDeveloper = new ds.Developer();
    theDeveloper.firstName = user.firstName;
    theDeveloper.lastName = user.lastName;
    theDeveloper.email = user.email;
    theDeveloper.pass = user.password;
    theDeveloper.save();
    res.result.dev = theDeveloper;
    res.status = true;
    res.result.message = "user added with success"
}
catch (e) {
    res.result.message = e.message;
}
finally {
    return res;
}
}


model.Developer.methods.editDeveloper = function(user) {
var res = {
    status: false,
    result: {
        message: '',
        dev: {}
    }

};
try {
    var theDeveloper = ds.Developer.find('ID =:1', user.ID);
    theDeveloper.firstName = user.firstName;
    theDeveloper.lastName = user.lastName;
    theDeveloper.email = user.email;
    theDeveloper.password = user.password;
    theDeveloper.phone = user.phone;
    theDeveloper.save();
    res.result.dev = theDeveloper;
    res.status = true;
    res.result.message = "user edited with success"
}

catch (e) {
    res.result.message = e.message;
}
finally {
    return res;
}
}

model.Developer.methods.getDevelopers = function() {
	
	var res = {
			status : false,
			result : {
				message : '',
				devs : []
			}
		};
	
	try{
		res.result.devs = ds.Developer.all();
		res.status = true;
	
	}catch(e){
		res.result.message = e.message;
	}finally{
		return res;
	}
}

model.Developer.methods.getActiveDevelopers =  function() {
	
	var res = {
			status : false,
			result : {
				message : '',
				devs : []
			}
		};
	
	try{
		res.result.devs = ds.Developer.query("Tasks != null");
		res.status = true;
	
	}catch(e){
		res.result.message = e.message;
	}finally{
		return res;
	}
}



model.Developer.entityMethods.assignTo = function(project) {
	var res = {
    status: false,
    result: {
        message: '',
        dev: {}
    }
};
try {
    var assign = new ds.Assignement();
    assign.projet = project.ID
    assign.developer = this.ID
    assign.save();
    
    res.result.dev = assign;
    res.status = true;
    res.result.message = "Developer assigned with success"
}
catch (e) {
    res.result.message = e.message;
}
finally {
    return res;
}
};


model.Developer.methods.addDeveloper.scope = 'public';
model.Developer.methods.editDeveloper.scope = 'public';
model.Developer.methods.getDevelopers.scope = 'public';
model.Developer.methods.getActiveDevelopers.scope = 'public';

model.Developer.entityMethods.assignTo.scope = 'public';

