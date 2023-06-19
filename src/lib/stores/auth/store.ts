import { derived, writable, type Readable } from 'svelte/store';
import { type Address, type WalletClient, http } from 'viem';
import { Chains } from './types';
import { chainsMetadata } from './constants';

export const activeChain = writable<Chains>(Chains.ETH);
export const walletClient = writable<WalletClient | undefined>();

export const walletAccount = derived<[Readable<WalletClient | undefined>], Address | undefined>(
	[walletClient],
	([$walletClient], set) => {
		if (!$walletClient) {
			set(undefined);
			return undefined;
		}

		$walletClient?.requestAddresses().then((accounts) => {
			const [account] = accounts;

			set(account);
		});
	}
);
