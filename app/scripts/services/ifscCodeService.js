/**
 * Created by dewdap on 7/24/15.
 */

angular.module('bighornsheepApp').factory('ifscCodeService',function($http){
    var factory = {};
    var bighornsheepAppHost = 'http://bighornsheep-tradewithme.rhcloud.com';

    factory.getBankDetailByIFSCcode = function(ifsc_code) {
        return 'data/data.json';
    };

    factory.getIFSCCodesBySearchText = function(query) {
        return $http.get(bighornsheepAppHost+'/query?str='+query)
            .then(function(res){
               return res.data;
            });
    };

    factory.greetUser = function(name){
      return $http.get(bighornsheepAppHost+'/greet?name='+name)
          .then(function(res){
                return res.data;
          });
    };

    factory.getStateList = function() {
       return $http.get(bighornsheepAppHost+'/states')
           .then(function(res){
                return res.data;
           });
    };

    factory.getBanksList = function() {
       return $http.get(bighornsheepAppHost+'/banks')
           .then(function(res){
                return res.data;
           });
    };

    factory.getCityList = function(state) {
       return $http.get(bighornsheepAppHost+'/cities?state='+state)
           .then(function(res){
                return res.data;
           });
    };

//    factory.getManagerUsernames = function () {
//        return $http.get(makeBranchHost + '/cgi-bin/rest.cgi/webgroups?group=CPDBranchManagers')
//            .then(function (response) {
//                return response.data.OUTPUT;
//            });
//    };

    return factory;
});