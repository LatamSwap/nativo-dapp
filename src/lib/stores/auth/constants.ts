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

const ScrollAlphaTestnet = {
	id: 534353,
	// chainId: 31,
	name: 'Scroll Alpha Testnet',
	network: 'Scroll Alpha Testnet',
	token: 'ETH',
	nativeCurrency: {
		name: 'Testnet Ether',
		symbol: 'ETH',
		decimals: 18
	},
	rpcUrls: {
		default: { http: ['https://scroll-alpha-public.unifra.io	'] },
		public: { http: ['https://scroll-alpha-public.unifra.io	'] }
	},
	testnet: true
};

const XDCApothemTestnet = {
	id: 33,
	// chainId: 31,
	name: 'XDCApothem Testnet',
	network: 'XDCApothem Testnet',
	token: 'XDC',
	nativeCurrency: {
		name: 'Testnet XDC',
		symbol: 'XDC',
		decimals: 18
	},
	rpcUrls: {
		default: { http: ['https://rpc.apothem.network'] },
		public: { http: ['https://rpc.apothem.network'] }
	},
	testnet: true
};
/**
 *
 */
// export const chainsMetadata: ChainsMetadata = {
export const chainsMetadata = {
	[Chains.FUJI]: avalancheFuji,
	[Chains.RSKtestnet]: RSKtestnet,
	[Chains.PatexTestnet]: PatexTestnet,
	[Chains.ScrollAlphaTestnet]: ScrollAlphaTestnet,
	[Chains.XDCApothemTestnet]: XDCApothemTestnet
};
