/**
 * Created by dewdap on 7/24/15.
 */

angular.module('bighornsheepApp').factory('ifscCodeService',function(){
    var factory = {};
    var bighornsheepAppHost = '';

    factory.getBankDetailByIFSCcode = function(ifsc_code) {
        return 'data/data.json';
    };

    factory.getIFSCCodesBySearchText = function(query) {
        return $http.get()
    };

//factory.getManagerUsernames = function () {
//    return $http.get(makeBranchHost + '/cgi-bin/rest.cgi/webgroups?group=CPDBranchManagers')
//        .then(function (response) {
//            return response.data.OUTPUT;
//        });
//};

    return factory;
});