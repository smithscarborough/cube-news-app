let Parser = require('rss-parser');
let parser = new Parser();

const handler = async (event) => {
  
  try {
    const url = event.queryStringParameters.url;
    let data = await parser.parseURL(url);

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
