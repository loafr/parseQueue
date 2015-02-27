 angular.module('parseQ').service('mainService', function($http, $q) {
 	//
 	this.createQ = function(question) {
 		var deferred = $q.defer();
 		$http({
 			method: 'POST',
 			url: 'https://api.parse.com/1/classes/questions',
 			data: {
 				text: question, 
 				status: 'red'
 			}
 		}).then(function(response) {
 			deferred.resolve(response.data.results);
 		});
 		return deferred.promise;
 	};//end of createQ

 	this.getData = function() {
 		var deferred = $q.defer();
 		$http({
 			method: 'GET',
 			url: 'https://api.parse.com/1/classes/questions/'
 		}).then(function(response) {
 			deferred.resolve(response.data.results);
 		});
 		return deferred.promise;
 	};//end of getData

 	this.updateData = function(object) {
 		var deferred = $q.defer();
 		$http({
 			method: 'PUT',
 			url: 'https://api.parse.com/1/classes/questions/' + object.objectId,
 			data: object
 		}).then(function(response) {
 			deferred.resolve(response.data.results);
 		});
 		return deferred.promise;
 	};//end of updateData

 	this.deleteData = function(object) {
 		var deferred = $q.defer();
 		$http({
 			method: 'DELETE',
 			url: 'https://api.parse.com/1/classes/questions/' + object.objectId
 		}).then(function(response) {
 			deferred.resolve(response.data.results);
 		})
 		return deferred.promise;
 	};//end of deleteData
 });

