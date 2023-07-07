import type { Chain } from 'viem/chains';

/**
 * Add here your chain id as hex, be sure to add your chain in the chainsMetadata object too
 */
export enum Chains {
	FUJI = '0xa869',
	RSKtestnet = '0x1f',
	PatexTestnet = '0x7303c'
}

export type ChainsMetadata = Record<Chains, Chain>;
