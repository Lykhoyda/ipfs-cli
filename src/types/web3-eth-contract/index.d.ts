import { Contract } from 'web3-eth-contract';

declare module 'web3-eth-contract' {
  export interface CustomWeb3Contract<T, U> extends Contract {
    methods: T;
    events: U;
  }
}
