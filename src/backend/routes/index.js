var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

/* GET method to greet user - Test method only to check connection with node */
router.get('/greet', function(req,res) {
	var str = req.query.name;
	var msg = 'Hello '+str;
	res.send(200, {title : msg });
});


/* GET method to get list of states */
router.get('/states', function(req, res) {
    //Logic here to get bank list will be replace by a service which gets data from mongodb
   var stateList = ['Andaman and Nicobar Islands',
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
   res.send(200, stateList);
});

/* GET method to get list of banks */
router.get('/banks', function(req, res) {
    //Logic here to get bank list will be replace by a service which gets data from mongodb
   var banklist = ['Abu Dhabi Commercial Bank Ltd.',
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


    res.send(200, banklist);
});

/* GET method to get bank details by query */
router.get('/query', function(req, res) {
   var query = req.query.str;
   var bankDetails = [
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


   res.send(200, bankDetails);
});



/* GET method to get list of cities */
router.get('/cities', function(req,res) {
   var state = req.query.state;
    //Logic here to get bank list will be replace by a service which gets data from mongodb

    var stateCityMap = {
     'Madhya Pradesh' : ['Ujjain','Indore','Dewas','Jabalpur','Bhopal'],
     'Delhi' : ['New Delhi','Chandni Chowk', 'Narela','DELHI CANTONMENT'],
     'Gujarat' : ['Vadodara']
   };
   res.send(200,stateCityMap[state]);
});

/* Code for shopify stuff */

//var shopifyAPI = require('shopify-node-api');


router.get('/authorize', function(req, res){
    var config = {
        shop: 'ample-dev-shop.myshopify.com', // MYSHOP.myshopify.com
        shopify_api_key: '908dc45109bf028f4e559923bda2ce11', // Your API key
        shopify_shared_secret: '23f17268ea20bf1cc659455dee99a8b5-1439072139', // Your Shared Secret
        shopify_scope: 'read_orders,read_customers',
        redirect_uri: 'https://ample-dev-shop.myshopify.com/',
        state : 'thisismyapp'
    };

    var auth_url = 'https://'+config.shop+'' +
        '/admin/oauth/authorize?' +
        'client_id='+config.shopify_api_key +
        '&scope='+config.shopify_scope+
        '&redirect_uri='+config.redirect_uri+
        '&state='+config.state;

    var encoded_url = encodeURI(auth_url);
//    console.log(encoded_url);

    // you can redirect the user automatically like so
    res.redirect(encoded_url);

});

router.get('/finish_auth', function(req, res){

});