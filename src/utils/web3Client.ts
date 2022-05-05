import Web3 from 'web3';
import { AbiItem } from 'web3-utils';
import ABI from '../build/contracts/StoreCID.json';
import { ContractEvents, ContractMethod } from '../types/contract';
import { CustomWeb3Contract } from 'web3-eth-contract';

const Web3EthContract = require('web3-eth-contract');
const HDWalletProvider = require('@truffle/hdwallet-provider');
const web3 = new Web3();

const provider = new HDWalletProvider({
  mnemonic: {
    phrase: process.env.MNEMONIC
  },
  providerOrUrl: process.env.GOERLI_URL
});

Web3EthContract.setProvider(provider);
const contract = new Web3EthContract(
  ABI as AbiItem[],
  process.env.CONTRACT_ADDRESS
) as CustomWeb3Contract<ContractMethod, ContractEvents>;

export { contract, web3 };
