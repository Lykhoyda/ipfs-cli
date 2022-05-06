import ListAllCid from '../commands/listAllCid';
import { EventData, PastEventOptions } from 'web3-eth-contract';

const mockedEvent = [
  {
    address: '0x7Eb45FC38fc4E920fa124783eccc5765E1711Df3',
    blockHash: '0x9c5c25742865427dcac0f1584b379be8a60fe4e0a99f0a165fd6c361151921d5',
    blockNumber: 1233,
    event: 'CIDStored',
    id: 'log_fe32896a',
    logIndex: 11,
    raw: {
      data: '0x',
      topics: [
        '0xd8a0edc6ade10e42d7ab691902b8c1a635fabe45ace3609fc4fbfad7e424e427',
        '0x000000000000000000000000764942ae20af79d6ea1f59b7433941ac36df2c64',
        '0xc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470'
      ]
    },
    removed: false,
    returnValues: {
      '0': '0x764942ae20AF79D6Ea1f59B7433941aC36Df2C64',
      '1': '0xc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470',
      cid: '0xc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470',
      owner: '0x764942ae20AF79D6Ea1f59B7433941aC36Df2C64'
    },
    signature: '0xd8a0edc6ade10e42d7ab691902b8c1a635fabe45ace3609fc4fbfad7e424e427',
    transactionHash: '0x9a9d72ce732e64be6fe7031eb7194474d2ad3c63493b8434501c3bc30a2524eb',
    transactionIndex: 4
  }
];

jest.mock('../utils/web3Client', () => {
  const originalModule = jest.requireActual('../utils/web3Client');
  return {
    ...originalModule,
    contract: {
      getPastEvents: (
        event: string,
        options: PastEventOptions,
        callback: (error: Error | null, event: EventData[]) => void
      ) => callback(null, mockedEvent)
    }
  };
});

describe('listAllCid', () => {
  it('should return events by Address', async () => {
    const consoleSpy = jest.spyOn(console, 'log');
    const address = '0x764942ae20AF79D6Ea1f59B7433941aC36Df2C64';
    await ListAllCid.getCidEventsByAddress(address);

    expect(consoleSpy).toHaveBeenCalledWith(mockedEvent);
  });
});
