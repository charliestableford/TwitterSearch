var Twit = require('twit')
// console.log('it works');
var T = new Twit({
    consumer_key:         '5S0lecTfPnggG16zIUEWkEMh7',
    consumer_secret:      '0k7VeJgOvFfS0Y8RZnCRYWJt0uHKX0EoOM5KD523pQN4ZM6l1x',
    access_token:         '1176892477107662848-SLIk3y2OW2OV1uGLKoM1WFeQBjWZ8Y',
    access_token_secret:  '4yCvVff5dCHsiOxFMiN28SPRpvNM0wi50gofqHyS1bugu',
    timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
    strictSSL:            true,     // optional - requires SSL certificates to be valid.
  })

  T.get('search/tweets', { q: 'banana since:2011-07-11', count: 100 }, function(err, data, response) {
    console.log(data)
  })

  // make an empty array for the searches to go in.
//   const searchArray = [];
//   const endpoint = 'https://api.twitter.com/1.1/search/tweets.json';
  
//   fetch(endpoint)
//   .then(dataPacket => dataPacket.json())
//   .then(data => searchArray.push(...data));
  
  
  
  