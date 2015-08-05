'use strict';

/**
 * @ngdoc function
 * @name bighornsheepApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the bighornsheepApp
 */
angular.module('bighornsheepApp')
  .controller('MainCtrl', ['$scope', 'ifscCodeService','filterFilter',function ($scope, ifscCodeService, filterFilter) {

        $scope.currentPage = 1;
        $scope.pageSize = 5;
        $scope.bankDetails = [];
        $scope.queryText = '';
        $scope.bankList = [];
        $scope.statesList = [];
        $scope.cityList = [];
        $scope.cityMap = {}; //caching of already fetched data would avoid repeated api calls to get cities
        $scope.filter = {};

//        $scope.$watch('filter.bankname',function(){
//            $scope.filteredBankDetails = filterFilter($scope.bankDetails, $scope.filter.bankname);
//            console.log($scope.filteredBankDetails);
//            console.log('value changed');
//        },false);


//        $scope.bankSearchFilter = function(bankdetail) {
//            console.log(bankdetail);
//            return (bankdetail.name.indexOf($scope.queryText) !== -1) ;
//        }

        $scope.queryIFSCCode = function() {
            ifscCodeService.getIFSCCodesBySearchText($scope.queryText).then(function(res){
                $scope.bankDetails = res;
            });
        };


        $scope.$watch('filter.state',function() {
            if($scope.cityMap.hasOwnProperty($scope.filter.state)){
                $scope.cityList = $scope.cityMap[$scope.filter.state]
            }
            else {
                ifscCodeService.getCityList($scope.filter.state).then(function(res){
                    $scope.cityMap[$scope.filter.state] = res;
                    $scope.cityList = $scope.cityMap[$scope.filter.state]
                });
            }
        },false);


        ifscCodeService.getBanksList().then(function(res){
           $scope.bankList = res;
        });

        ifscCodeService.getStateList().then(function(res){
            $scope.statesList = res;
        });

//        ifscCodeService.getCityList($scope.filter.state).then(function(res){
//            $scope.cityMap[$scope.filter.state] = res;
//        });

        ifscCodeService.greetUser('Pradeep').then(function(res){
           $scope.greeting = res.title;
        });

    }]);
