import { avalancheFuji } from 'viem/chains';
// import type { ChainsMetadata } from './types';
import { Chains } from './types';

const RSKtestnet = {
	id: 31,
	// chainId: 31,
	name: 'RSK Testnet',
	network: 'RSK Testnet',
	token: 'tRBTC',
	nativeCurrency: {
		name: 'RSK Testnet Ether',
		symbol: 'tRBTC',
		decimals: 18
	},
	rpcUrls: {
		default: { http: ['https://test-rpc.patex.io	'] },
		public: { http: ['https://test-rpc.patex.io	'] }
	},
	/*
	 "blockExplorers": {
    "etherscan": {
      "name": "Etherscan",
      "url": "https://etherscan.io"
    },
    "default": {
      "name": "Etherscan",
      "url": "https://etherscan.io"
    }
  },
 */
	testnet: true
};

const PatexTestnet = {
	id: 471100,
	// chainId: 31,
	name: 'Patex Testnet',
	network: 'Patex Testnet',
	token: 'ETH',
	nativeCurrency: {
		name: 'Testnet Ether',
		symbol: 'ETH',
		decimals: 18
	},
	rpcUrls: {
		default: { http: ['https://test-rpc.patex.io'] },
		public: { http: ['https://test-rpc.patex.io'] }
	},
	/*
	 "blockExplorers": {
    "etherscan": {
      "name": "Etherscan",
      "url": "https://etherscan.io"
    },
    "default": {
      "name": "Etherscan",
      "url": "https://etherscan.io"
    }
  },
 */
	testnet: true
};

/**
 *
 */
// export const chainsMetadata: ChainsMetadata = {
export const chainsMetadata = {
	[Chains.FUJI]: avalancheFuji,
	[Chains.RSKtestnet]: RSKtestnet,
	[Chains.PatexTestnet]: PatexTestnet
};
