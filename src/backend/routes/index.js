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