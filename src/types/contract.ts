import { ContractSendMethod } from 'web3-eth-contract';
import { CID } from 'ipfs-http-client';

export interface ContractMethod {
  store: (cid: CID) => ContractSendMethod
}

export interface ContractEvents {
  CIDStored: Function
}
