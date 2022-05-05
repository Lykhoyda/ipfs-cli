import { create } from 'ipfs-http-client';

const auth = `Basic ${Buffer.from(
  `${process.env.INFURA_PROJECT_ID}:${process.env.INFURA_PRIVATE_KEY}`
).toString('base64')}`;

const ipfsClient = create({
  host: process.env.INFURA_HOST_URL,
  port: 5001,
  protocol: 'https',
  apiPath: '/api/v0',
  headers: {
    authorization: auth
  }
});

export default ipfsClient;
