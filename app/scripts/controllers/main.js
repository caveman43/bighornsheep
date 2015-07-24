'use strict';

/**
 * @ngdoc function
 * @name bighornsheepApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the bighornsheepApp
 */
angular.module('bighornsheepApp')
  .controller('MainCtrl',function ($scope, ifscCodeService) {

    var ifscCode = ifscCodeService.getBankDetailByIFSCcode('ifsc');
    $scope.test = 'ifscode';



  });
