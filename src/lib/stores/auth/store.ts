import { derived, writable, type Readable } from 'svelte/store';
import { type Address, type WalletClient, custom, http, createPublicClient } from 'viem';
import { Chains } from './types';
import { chainsMetadata } from './constants';

import { nativoAbi } from '../../nativo.abi';

export const activeChain = writable<Chains>(Chains.ETH);
export const walletClient = writable<WalletClient | undefined>();

export const wrongNetwork = derived([activeChain], ([$activeChain], set) => {
	console.log($activeChain)
	set($activeChain != '0x1f' && $activeChain != '0x7303c' && $activeChain != '0x82751' && $activeChain != '0x33');
});

export const contractAddress = derived([activeChain], ([$activeChain], set) => {
	// scroll 534353 (0x82751)
	if ($activeChain == '0x82751') {
		set("0x2Ca416EA2F4bb26ff448823EB38e533b60875C81")
	} else if($activeChain == '0x33') {
		// set("xdc76bd832F14a4eB4fcFd1487E0e8f10b7407eabF4")
		set("0x76bd832F14a4eB4fcFd1487E0e8f10b7407eabF4")
	} else{
		set("0x2A955Cd173b851bac5Be79BdC8Cbc5D5a30e1d8d")
	}
});

export const tokenSymbol = derived([activeChain], ([$activeChain], set) => {
	if ($activeChain == '0x1f') {
		set('RBTC');
	} else if ($activeChain == '0x33') {
		set('XDC');
	} else if ($activeChain == '0x7303c') {
		set('ETH');
	} else {
		set('ETH');
	}
});

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

export const walletBalanceNativo = derived(
	[wrongNetwork, walletAccount, contractAddress],
	async ([$wrongNetwork, $walletAccount, $contractAddress], set) => {
		if ($wrongNetwork || !$walletAccount) {
			set(undefined);
			return undefined;
		}

		const publicClient = createPublicClient({
			transport: custom(window.ethereum)
			//transport: http("https://public-node.testnet.rsk.co")
		});

		const _balanceNativo = await publicClient.readContract({
			address: $contractAddress,
			abi: nativoAbi,
			functionName: 'balanceOf',
			args: [$walletAccount]
		});
		set(_balanceNativo);
	}
);

export const walletBalance = derived(
	[wrongNetwork, walletAccount],
	async ([$wrongNetwork, $walletAccount], set) => {
		if ($wrongNetwork || !$walletAccount) {
			set(undefined);
			return undefined;
		}

		const publicClient = createPublicClient({
			transport: custom(window.ethereum)
			//transport: http("https://public-node.testnet.rsk.co")
		});
		const _balance = await publicClient.getBalance({
			address: $walletAccount,
			blockTag: 'latest'
		});
		set(_balance);
	}
);

export const connect = writable();
export const disconnect = writable();
export const switchChain = writable();
