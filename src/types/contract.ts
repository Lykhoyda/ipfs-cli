import { ContractSendMethod } from 'web3-eth-contract';
import { CID } from 'ipfs-http-client';

export interface ContractMethod {
  store: (cid: CID) => ContractSendMethod;
}

export interface ContractEvents {
  CIDStored: Function;
}
export interface TransactionReceipt {
  status: boolean;
  transactionHash: string;
  transactionIndex: number;
  blockHash: string;
  blockNumber: number;
  from: string;
  to: string;
  contractAddress?: string;
  cumulativeGasUsed: number;
  gasUsed: number;
  effectiveGasPrice: number;
  logsBloom: string;
}
