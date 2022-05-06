# ipfs-cli

This project was created using oclif-cli framework
https://oclif.io/

<!-- toc -->

- [Usage](#usage)
- [Commands](#commands)
<!-- tocstop -->

# Usage

Project Setup

```sh-session
$ yarn install
$ yarn run build
$ yarn run test (.env should be present)
```

Before running the commands we need to provide the credential data to connect to IPFS network using Infura and User credentials (public key + mnemonic) to be able to sign the Smart Cotract transaction.

1. Create .env file
2. Fill in the missing credential data

```sh-session
# IPFS
INFURA_HOST_URL="ipfs.infura.io"
INFURA_PROJECT_ID="fill-in-project-id"
INFURA_PRIVATE_KEY="fill-in-private-key"

# Ethereum Contract
GOERLI_URL="https://goerli.infura.io/v3/40861e6a38424fdeaf9888d011aa284c"
CONTRACT_ADDRESS="0x7Eb45FC38fc4E920fa124783eccc5765E1711Df3"

# User Data
PUBLIC_KEY="user-public-address"
MNEMONIC="12 words mnemonic key"
```

# Commands

<!-- commands -->

For local run instead of cli name we have to add `./bin/run`

- [`ipfs-cli storeFile`](#ipfs-cli-hello-person)
- [`ipfs-cli listAllCid`](#ipfs-cli-hello-world)

## `ipfs-cli storeFile fileSrc`

Store the file to IPFS and provide the CID to the smart contract(https://goerli.etherscan.io/address/0x7Eb45FC38fc4E920fa124783eccc5765E1711Df3#code)

```
USAGE
  $ ipfs-cli storeFile [fileSrc]

ARGUMENTS
  fileSrc  File that will be stored to IPFS

EXAMPLES
  $ ./bin/run storeFile test-file-1.png
```

_See code: [dist/commands/storeFile.ts](https://github.com/Lykhoyda/ipfs-cli/blob/master/src/commands/storeFile.ts)_

## `ipfs-cli listAllCid address`

List all CID events stored on Smart Contract associated with the address

```
USAGE
  $ ipfs-cli listAllCid [address]

EXAMPLES
  $ ./bin/run listAllCid 0x764942ae20AF79D6Ea1f59B7433941aC36Df2C64
```
