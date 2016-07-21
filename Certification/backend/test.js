

//var project = {
//	name : "Course",
//	type : "Training"
//	
//}

//var data = loadText(ds.getModelFolder().path  + "../backend/projects.json")
//var projects = JSON.parse(data)
//var prjt ;
//projects.forEach(function(project){
//	prjt = new ds.Project()
//	prjt.name = project.name
//	prjt.type = project.type
//	prjt.save()
//})

//var email = "aaa@aa.com"
//var assign = new ds.Assignement()
//assign.project= prjt.ID
//var dev = ds.Developer.find("email = :1", email)
//assign.developer = dev.ID
//assign.AssignDate = new Date()
//assign.save()

dev.assignTo(prjt)
//directory.setLoginListener("loginFunc")

//createUserSession({
//    ID: "0001000100010001000100010001000100010002",
//    name: "jsmith",
//    fullName: "Jennifer Smith",
//    storage:    { 
//           
//            access: "Test direct access"
//                    },
//    belongsTo: [ 'Administrator', 'Manager' ] });
    
//getUserSessions()    

//var user = new ds.User()
//user.username = "test"
//user.password  = "pass"
//user.fullName = "Amine Kham"
//user.email = "akhamlichi@wakanda.io"
//user.save()
//var u = ds.User.find("username = test")
//u.accessType = 2
//u.save()

//loginByPassword("test","pass")

var ws = require("postsWS")
ws.getPosts()