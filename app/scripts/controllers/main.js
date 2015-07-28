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
        $scope.bankList = ['Abu Dhabi Commercial Bank Ltd.',
            'American Express Bank Ltd.',
            'Arab Bangladesh Bank Limited',
            'Allahabad Bank',
            'Andhra Bank',
            'Axis Bank',
            'Antwerp Diamond Bank N.V.',
            'Bank Internasional Indonesia',
            'Bank of America N.A.',
            'Bank of Bahrain & Kuwait BSC',
            'Barclays Bank Plc',
            'BNP PARIBAS',
            'Bank of Ceylon',
            'Bank of Baroda',
            'Bank of India',
            'Bank of Maharashtra',
            'Canara Bank',
            'Central Bank of India',
            'Calyon Bank',
            'Citibank N.A.',
            'Cho Hung Bank',
            'Chinatrust Commercial Bank Ltd.',
            'City Union Bank Ltd.',
            'Coastal Local Area Bank Ltd.',
            'Corporation Bank',
            'Catholic Syrian Bank Ltd.',
            'Deutsche Bank AG',
            'Development Credit Bank Ltd.',
            'Dena Bank',
            'IndusInd Bank Limited',
            'ICICI Bank',
            'IDBI Bank Limited',
            'Indian Bank',
            'Indian Overseas Bank',
            'Industrial Development Bank of India',
            'ING Vysya Bank',
            'J P Morgan Chase Bank, National Association',
            'Krung Thai Bank Public Company Limited',
            'Kotak Mahindra Bank Limited',
            'Karnataka Bank',
            'Karur Vysya Bank Limited.',
            'Lord Krishna Bank Ltd.',
            'Mashreqbank psc',
            'Mizuho Corporate Bank Ltd.',
            'Oman International Bank S A O G',
            'Oriental Bank of Commerce',
            'Punjab & Sind Bank',
            'Punjab National Bank',
            'Societe Generale',
            'Sonali Bank',
            'Standard Chartered Bank',
            'State Bank of Mauritius Ltd.',
            'SBI Commercial and International Bank Ltd.',
            'State Bank of Bikaner and Jaipur',
            'State Bank of Hyderabad',
            'State Bank of India',
            'State Bank of Mysore',
            'State Bank of Patiala',
            'State Bank of Travancore',
            'Syndicate Bank',
            'The Bank of Nova Scotia',
            'The Bank of Tokyo-Mitsubishi, Ltd.',
            'The Development Bank of Singapore Ltd. (DBS Bank Ltd.)',
            'The Hongkong & Shanghai Banking Corporation Ltd.',
            'Tamilnad Mercantile Bank Ltd.',
            'The Bank of Rajasthan Limited',
            'The Dhanalakshmi Bank Limited.',
            'The Federal Bank Ltd.',
            'The HDFC Bank Ltd.',
            'The Jammu & Kashmir Bank Ltd.',
            'The Nainital Bank Ltd.',
            'The Sangli Bank Ltd.',
            'The South Indian Bank Ltd.',
            'The Ratnakar Bank Ltd.',
            'The Royal Bank of Scotland N.V.',
            'The Lakshmi Vilas Bank Ltd',
            'UCO Bank',
            'Union Bank of India',
            'United Bank Of India',
            'Vijaya Bank',
            'Yes Bank'];
        $scope.statesList = ['Andaman and Nicobar Islands',
            'Andhra Pradesh',
            'Arunachal Pradesh',
            'Assam',
            'Bihar',
            'Chandigarh',
            'Chhattisgarh',
            'Dadra and Nagar',
            'Daman and Diu',
            'Delhi',
            'Goa',
            'Gujarat',
            'Haryana	',
            'Himachal Pradesh',
            'Jammu and Kashmir',
            'Jharkhand',
            'Karnataka',
            'Kerala',
            'Lakshadweep',
            'Madhya Pradesh',
            'Maharashtra',
            'Manipur',
            'Meghalaya',
            'Mizoram',
            'Nagaland',
            'Orissa',
            'Pondicherry',
            'Punjab',
            'Rajasthan',
            'Sikkim',
            'Tamil Nadu',
            'Telangana',
            'Tripura',
            'Uttar Pradesh',
            'West Bengal'];
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

        ifscCodeService.greetUser('Pradeep').then(function(res){
           $scope.greeting = res.title;
        });

    }]);
