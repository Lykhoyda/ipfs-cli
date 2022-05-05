require('dotenv').config();
import { Command } from '@oclif/core';
import { contract, web3 } from '../utils/web3Client';

export default class ListAllCid extends Command {
  static description = 'List all CID events associated with address';
  static args = [
    {
      name: 'address',
      description: 'Public user address to check associated CID stored on smart contract',
      required: true
    }
  ];

  static async getCidEventsByAddress(address: string) {
    try {
      web3.utils.toChecksumAddress(address);
    } catch {
      throw new Error('Invalid Ethereum address');
    }

    await contract.getPastEvents(
      'CIDStored',
      {
        filter: { owner: address },
        fromBlock: 'earliest'
      },
      (err, events) => {
        if (err) {
          throw new Error(`Failed to fetch data for provided account. ${err.message}`);
        }

        console.log(events);
      }
    );
  }

  public async run(): Promise<void> {
    const { args } = await this.parse(ListAllCid);
    await ListAllCid.getCidEventsByAddress(args.address);
    process.exit();
  }
}
