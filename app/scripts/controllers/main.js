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
        $scope.bankDetails = [
        {
            logo : 'images/icici_bank_logo_3895.gif',
            name : 'ICICI BANK LTD',
            ifsc : 'ICIC23534534',
            address : 'ICICI BANK LTD., 2/62,1 TO 4 , SADAR BAZAR, DELHI CANTONMENT, NEW DELHI 110010, DELHI'
        },
        {
            logo : 'images/yes_bank_logo.jpeg',
            name : 'YES BANK LTD',
            ifsc : 'YBKL002343450',
            address : 'YES BANK , UJJAIN, RISHINAGAR, MADHYA PRADESH'
        },
        {
            logo : 'images/axis_bank_logo.jpeg',
            name : 'AXIS BANK LTD',
            ifsc : 'AXIS00909090',
            address : 'AXIS BANK LTD 234 PLOT NO 45, PARDESHI NAGAR, MUMBAI, ANDHERI 234324'
        },
        {
            logo : 'images/pnb_logo.png',
            name : 'PUNJAB NATIONAL BANK',
            ifsc : 'PUNB0015000',
            address : 'LAL BAZAR, DISTT- VADODARA'
        },
        {
            logo : 'images/icici_bank_logo_3895.gif',
            name : 'ICICI BANK LTD',
            ifsc : 'ICIC23534534',
            address : 'ICICI BANK LTD., 2/62,1 TO 4 , DEWAS, MADHYA PRADESH'
        },
        {
            logo : 'images/axis_bank_logo.jpeg',
            name : 'AXIS BANK LTD',
            ifsc : 'AXIS00909090',
            address : 'AXIS BANK LTD 234 PLOT NO 45, PARDESHI NAGAR, MUMBAI, ANDHERI 234324'
        },
        {
            logo : 'images/pnb_logo.png',
            name : 'PUNJAB NATIONAL BANK',
            ifsc : 'PUNB0015000',
            address : 'LAL BAZAR, DISTT- VADODARA'
        },
        {
            logo : 'images/icici_bank_logo_3895.gif',
            name : 'ICICI BANK LTD',
            ifsc : 'ICIC23534534',
            address : 'ICICI BANK LTD., 2/62,1 TO 4 , SADAR BAZAR, DELHI CANTONMENT, NEW DELHI 110010, DELHI'
        },
        {
            logo : 'images/hdfc_bank.jpeg',
            name : 'HDFC BANK LTD',
            ifsc : 'HDFC234234234',
            address : 'HDFC BANK , VISHNUPURI, TUKOGANJ INDORE MADHYA PRADESH'
        },
        {
            logo : 'images/pnb_logo.png',
            name : 'PUNJAB NATIONAL BANK',
            ifsc : 'PUNB0015000',
            address : 'LAL BAZAR, DISTT- VADODARA'
        },
        {
            logo : 'images/icici_bank_logo_3895.gif',
            name : 'ICICI BANK LTD',
            ifsc : 'ICIC23534534',
            address : 'ICICI BANK LTD., 2/62,1 TO 4 , SADAR BAZAR, DELHI CANTONMENT, NEW DELHI 110010, DELHI'
        },
        {
            logo : 'images/axis_bank_logo.jpeg',
            name : 'AXIS BANK LTD',
            ifsc : 'AXIS00909090',
            address : 'AXIS BANK LTD 234 PLOT NO 45, PARDESHI NAGAR, MUMBAI, ANDHERI 234324'
        },
        {
            logo : 'images/pnb_logo.png',
            name : 'PUNJAB NATIONAL BANK',
            ifsc : 'PUNB0015000',
            address : 'LAL BAZAR, DISTT- INDORE'
        },
        {
            logo : 'images/hdfc_bank.jpeg',
            name : 'HDFC BANK LTD',
            ifsc : 'HDFC2343423444',
            address : 'HDFC BANK, ANNAMALAI, TUMKUR, TAMILNADU'
        },
        {
            logo : 'images/axis_bank_logo.jpeg',
            name : 'AXIS BANK LTD',
            ifsc : 'AXIS00909090',
            address : 'AXIS BANK LTD NAI SARAK, UJJAIN MADHYA PRADESH'
        },
        {
            logo : 'images/pnb_logo.png',
            name : 'PUNJAB NATIONAL BANK',
            ifsc : 'PUNB0015000',
            address : 'LAL BAZAR, DISTT- UJJAIN'
        }
    ];
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
