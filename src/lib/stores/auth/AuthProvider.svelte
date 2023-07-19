<script lang="ts">
	import Onboard, {
		type ConnectOptions,
		type DisconnectOptions,
		type WalletState
	} from '@web3-onboard/core';
	import { chainsMetadata } from './constants';
	import injectedWallet from '@web3-onboard/injected-wallets';
	import { Chains } from './types';
	import { onMount, setContext } from 'svelte';
	import { CONTEXT_KEY } from './methods';
	import {
		activeChain,
		walletAccount,
		walletClient,
		connect,
		disconnect,
		switchChain
	} from './store';	

	import { createWalletClient, custom } from 'viem';
	
	const chains = Object.keys(chainsMetadata).map((key) => {
		const chain = chainsMetadata[key as Chains];

		return {
			id: key,
			label: chain.name,
			rpcUrl: chain.rpcUrls.public.http[0]
		};
	});

	const onboard = Onboard({
		chains: chains,
		wallets: [injectedWallet()]
	});

	async function OnWalletsStateChange(walletState: WalletState[]) {
		/**Check if the wallet is connected*/
		if (!walletState || walletState.length === 0) {
			return;
		}

		console.log(walletAccount, walletState);
		$activeChain = walletState[0].chains[0].id as Chains;
		
		let chain = chainsMetadata[Chains.PatexTestnet];
		if ($activeChain == 0x1f) {
			chain = chainsMetadata[Chains.RSKtestnet];
		} else if ($activeChain == 0x7303c) {
			chain = chainsMetadata[Chains.PatexTestnet];
		} else if ($activeChain == 0x82751) {
			chain = chainsMetadata[Chains.ScrollAlphaTestnet];
		} else if ($activeChain == 0x33) {
			chain = chainsMetadata[Chains.XDCApothemTestnet];
		} else if ($activeChain == 0x1389) {
			chain = chainsMetadata[Chains.MantleTestnet];
		}

		$walletClient = createWalletClient({
			transport: custom(window.ethereum),
			chain,
		});

	}

	onMount(() => {
		const { unsubscribe } = onboard.state.select('wallets').subscribe(OnWalletsStateChange);

		$connect = _connect;
		$disconnect = _disconnect;
		$switchChain = _switchChain;

		return () => {
			unsubscribe();
		};
	});

	async function _connect(options?: ConnectOptions) {
		await onboard.connectWallet(options);
	}

	async function _disconnect(options: DisconnectOptions) {
		const [primaryWallet] = onboard.state.get().wallets;

		if (primaryWallet) {
			await onboard.disconnectWallet({
				...options,
				label: primaryWallet.label
			});
			if ($walletClient) $walletClient = undefined;
		}
	}

	async function _switchChain(chain: string | Chains) {
		if (chain) {
			await onboard.setChain({ chainId: chain });
		}
	}
</script>
