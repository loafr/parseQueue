 angular.module('parseQ').controller('MainCtrl', function(mainService, $scope) {

 	//$scope.questions = mainService.getData();
 	$scope.postData = function() {
 		mainService.createQ($scope.question).then(function(response) {
 			//console.log(response)
 		}); 
 		$scope.question = '';
 		getParseData();
 	};//end postData

 	var getParseData = function() {
 		mainService.getData().then(function(response) {
 			$scope.questions = response;
 			//console.log($scope.questions);
 		});
 	};//end getParseData
 	getParseData();

 	$scope.changeStatus = function(question) {
 		question.status = 'yellow';
 		mainService.updateData(question).then(function(response) {
 			//console.log(response);
 			getParseData();
 		})
 	};//end changeStatus

 	$scope.deleteData = function(question) {
 		mainService.deleteData(question).then(function(response) {
 			getParseData();
 		});
 	};//end deleteData
 });

