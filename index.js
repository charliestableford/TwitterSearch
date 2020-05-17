var Twit = require('twit')
// console.log('it works');
var T = new Twit({
    consumer_key:         '...',
    consumer_secret:      '...',
    access_token:         '...',
    access_token_secret:  '...',
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
  
  
  
  