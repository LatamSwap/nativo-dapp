import type { Chain } from 'viem/chains';

/**
 * Add here your chain id as hex, be sure to add your chain in the chainsMetadata object too
 */
export enum Chains {
	FUJI = '0xa869',
	RSKtestnet = '0x1f',
	PatexTestnet = '0x7303c',
	ScrollAlphaTestnet = '0x82751',
	XDCApothemTestnet = '0x33',
	MantleTestnet = '0x1389'
}

export type ChainsMetadata = Record<Chains, Chain>;
