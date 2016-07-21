app.controller("detailCtrl", detailCtrl);


function detailCtrl($rootScope,$scope,WakandaManager,$state) {
		
	
    $scope.getDev = function() {
        WakandaManager.ready().then(function() {
            var $wakanda = WakandaManager.$wakanda;
            var ds = $wakanda.getDatastore();
            ds.Developer.$query({
            	filter : "ID == :1",
            	params : [$rootScope.developer.ID]})
            	.$promise.then(function(event) {
                $scope.dev = event.result[0]; 
                
            });
            ds.Task.getUserTasks($rootScope.developer.ID).then(function(event) {
        		$scope.tasks = event.result.result.tasks;
        	})
        });
        	
    };
    
    $scope.saveDev= function(){
    	$scope.dev.$save().$promise.then(function () {
  		$state.go('developers');
		});

    }
    
};