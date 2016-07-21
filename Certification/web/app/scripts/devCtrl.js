app.controller("devCtrl", devCtrl);


function devCtrl($rootScope,$scope,WakandaManager) {
	
	$scope.getProjects = function () {
		 WakandaManager.ready().then(function() {
            var $wakanda = WakandaManager.$wakanda;
            var ds = $wakanda.getDatastore();
            ds.Project.$all().$promise.then(function(event) {
                $scope.projects = event.result;
            });
        });
		
	};
    $scope.AllDevs = function() {
        WakandaManager.ready().then(function() {
            var $wakanda = WakandaManager.$wakanda;
            var ds = $wakanda.getDatastore();
            ds.Developer.$all({pageSize : 4}).$promise.then(function(event) {
                $scope.devs = event.result; 
            });
        });
    };
    
    $scope.getDevByProjet = function (project) {
    	WakandaManager.ready().then(function() {
            var $wakanda = WakandaManager.$wakanda;
            var ds = $wakanda.getDatastore();
            ds.Developer.$query({
            	filter : "assignementCollection.prj.ID == :1",
            	params : [project.ID],
            	pageSize : 4
            	})
            .$promise.then(function(event) {
                $scope.devs = event.result;
                
            });
        });
        
    }
    
    $scope.setDev = function (dev) {
    	$rootScope.developer =  dev
    }
    $scope.getProjects()
};