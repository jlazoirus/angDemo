'use strict';

/**
 * @ngdoc service
 * @name rock3rlabsApp.dataService
 * @description
 * # dataService
 * Service in the rock3rlabsApp.
 */
angular.module('rock3rlabsApp')
  .service('dataService', ['$http', '$q', function ($http, $q) {
     return {
        getData:  function(){
            var deferred = $q.defer();

            $http.get('../activity-data.json').success(function(data) {
              return deferred.resolve(data);
            });

            return deferred.promise;
        }
     };

  }]);
