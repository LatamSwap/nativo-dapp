<script lang="ts">
	import Onboard, {
		type ConnectOptions,
		type DisconnectOptions,
		type WalletState
	} from '@web3-onboard/core';
	import { chainsMetadata } from './constants';
	import injectedWallet from '@web3-onboard/injected-wallets';
	import type { Chains } from './types';
	import { onMount, setContext } from 'svelte';
	import { CONTEXT_KEY } from './methods';
	import { activeChain, walletAccount, walletClient,connect, disconnect, switchChain } from './store';
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

		$walletClient = createWalletClient({
			transport: custom(window.ethereum)
		});
		window.$walletClient = $walletClient;

		// token: 0x2A955Cd173b851bac5Be79BdC8Cbc5D5a30e1d8d

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
