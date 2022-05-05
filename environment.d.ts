// declare global env variable to define types
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      INFURA_HOST_URL: string;
      INFURA_PROJECT_ID: string;
      INFURA_PRIVATE_KEY: string;
      GOERLI_URL: string;
      PRIVATE_KEY: string;
      PUBLIC_KEY: string;
      CONTRACT_ADDRESS: string;
      MNEMONIC: string;
    }
  }
}

export {};
