require('dotenv').config();
import { contract } from '../utils/web3Client';
import { CID } from 'ipfs-http-client';
import { Command } from '@oclif/core';
import { readFileSync } from 'node:fs';
import ipfsClient from '../utils/ipfsClient';

export default class StoreFile extends Command {
  static description = 'Store file on IPFS and Ethereum Contract';
  static args = [{ name: 'fileSrc', description: '', required: true }];

  static async storeFile(fileSrc: string): Promise<CID> {
    const file = readFileSync(fileSrc).buffer;
    try {
      const { cid } = await ipfsClient.add(file);
      console.log('Your file stored on IPFS:', `https://ipfs.infura.io/ipfs/${cid}`);
      return cid;
    } catch (err) {
      throw Error('Failed to store the file on IPFS network')
    }
  }

  static async storeCidOnEth(cid: CID) {
    await contract.methods
      .store(cid)
      .send({
        from: process.env.PUBLIC_KEY
      })
      .on('receipt', (data: any) => {
          console.log('The file stored using Smart Contract')
          console.log('BlockHash', data.blockHash);
          console.log('transactionHash', data.transactionHash);
        }
      );
  }

  public async run(): Promise<void> {
    const { args } = await this.parse(StoreFile);
    const cid = await StoreFile.storeFile(args.fileSrc);
    await StoreFile.storeCidOnEth(cid);
    process.exit()
  }
}
