var shopifyAPI = require('shopify-node-api');


var Shopify = new shopifyAPI({
    shop: 'ample-dev-shop.myshopify.com', // MYSHOP.myshopify.com
    shopify_api_key: '908dc45109bf028f4e559923bda2ce11', // Your API key
    shopify_shared_secret: 'db02cc7fedea11329efac1eee9fbe474-1439057742', // Your Shared Secret
    shopify_scope: 'write_products',
    redirect_uri: 'http://localhost:3000/finish_auth'
});


