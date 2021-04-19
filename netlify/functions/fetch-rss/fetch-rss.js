// this is a serverless function that we setup through netlify  
// it works with a single url (instead of having to set up an entire BE)
let Parser = require('rss-parser');
let parser = new Parser();

const handler = async (event) => {
  
  try {
    const url = event.queryStringParameters.url;
    let data = await parser.parseURL(url);

    return {
      statusCode: 200,
      body: JSON.stringify(data),
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
