import { derived, writable, type Readable } from 'svelte/store';
import { type Address, type WalletClient, custom, http, createPublicClient } from 'viem';
import { Chains } from './types';
import { chainsMetadata } from './constants';

import { parseAbi } from 'viem'

const nativoAbi = parseAbi([
  'function transferFrom(address from, address to, uint amount)',
  'function transfer(uint amount)',
	'function withdraw(uint amount)',
  'function deposit() payable',
  'function balanceOf(address owner) view returns (uint)',
  'event Transfer(address indexed from, address indexed to, uint256 amount)'
])


export const activeChain = writable<Chains>(Chains.ETH);
export const walletClient = writable<WalletClient | undefined>();

export const wrongNetwork = derived([activeChain], ([$activeChain], set) => {
	set($activeChain != '0x1f' && $activeChain != '0xa869');
})

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

			const publicClient = createPublicClient({
  			 transport: custom(window.ethereum)
				//transport: http("https://public-node.testnet.rsk.co")
			});
			
			publicClient.readContract({
	  		address: '0x2A955Cd173b851bac5Be79BdC8Cbc5D5a30e1d8d',
  		abi: nativoAbi,
	  	functionName: 'balanceOf',
  		args: [account]
		}).then((balance: bigint) => { console.log("nativo", balance) });
		
		});
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
			})
			set(_balance);
	});


export const connect = writable();
export const disconnect = writable();
export const switchChain = writable();
