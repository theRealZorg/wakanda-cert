

model.Developer.fullname.onGet = function() {
	return this.firstName +" " + this.lastName;
};


model.Developer.active.events.init = function(event) {
	this.active = false;
};


model.Developer.events.remove = function(event) {
	this.tasks.remove();
};


model.Developer.email.events.validate = function(event) {
	var regex = /^([0-9a-zA-Z]([-_\\.]*[0-9a-zA-Z]+)*)@([0-9a-zA-Z]([-_\\.]*[0-9a-zA-Z]+)*)[\\.]([a-zA-Z]{2,9})$/;
	if(!regex.test(this.email))  return {error: 7, errorMessage: 'email format incorrect'};
};


model.Developer.taskCount.onGet = function() {
	return this.tasks.length;
};




model.Developer.events.validate = function(event) {
	 if (this.firstName == null || this.lastName == null) {
        return {error: 7, errorMessage: 'name  must have a value'};
    }
};


model.Developer.events.restrict = function(event) {
//	var result = ds.Developer.createEntityCollection();
//	var currSession = currentSession() ;
//	if (currSession.belongsTo("Manager") ) result = ds.Developer.all();
//	return result;
return ds.Developer.all()
};
