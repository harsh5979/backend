const { createClient } = require('redis');

const client = createClient({
  url: process.env.redis_url,
   password: process.env.redis_key
});

client.on('error', (err) => {
  console.error('Redis Client Error:', err);
});

async function connect() {
  try {
    await client.connect();
    console.log('Connected to Redis');
  } catch (err) {
    console.error('Failed to connect:', err);
  }
}

connect();

module.exports = client;
