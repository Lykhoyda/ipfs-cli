import StoreFile from '../commands/storeFile';
const mock = require('mock-fs');

jest.mock('../utils/ipfsClient', () => {
  return {
    add: jest.fn().mockResolvedValue({ cid: 'cid-value' })
  };
});

mock({
  './test-file-1.png': Buffer.from([8, 6, 7, 5, 3, 0, 9])
});

afterAll(() => {
  mock.restore();
});

describe('storeFile command', () => {
  const cid = 'cid-value';
  const fileSrc = './test-file-1.png';

  it('should store the File and return CID - storeFile', async () => {
    const data = await StoreFile.storeFile(fileSrc);
    expect(data).toEqual(cid);
  });
});
