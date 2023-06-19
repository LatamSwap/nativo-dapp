<script lang="ts">
	import { chainsMetadata } from '$lib/stores/auth/constants';
	import { useAuth } from '$lib/stores/auth/methods';
	import { walletAccount, activeChain } from '$lib/stores/auth/store';
	import { Chains } from '$lib/stores/auth/types';

	const { connect, disconnect, switchChain } = useAuth();

	import { AppBar } from '@skeletonlabs/skeleton';

	async function switchToETH() {
		$activeChain = Chains.ETH;
		if ($walletAccount) switchChain($activeChain);
	}

	async function switchToOptimism() {
		$activeChain = Chains.OP;
		if ($walletAccount) switchChain($activeChain);
	}
</script>

<AppBar>
	<svelte:fragment slot="lead">
		<a href="/" class="text-2xl uppercase font-bold">Nativo</a>
	</svelte:fragment>
	<svelte:fragment slot="trail">
		<a
			class="btn btn-sm variant-ghost-surface"
			href="https://github.com/latamswap/nativo"
			target="_blank"
			rel="noreferrer"
		>
			GitHub
		</a>

		{#if $walletAccount}
			<div class="gap-2 flex flex-col">
				<p>Address: {$walletAccount}</p>
				<button class="btn btn-sm variant-ghost-surface" on:click={() => disconnect()}
					>Disconnect</button
				>
			</div>
		{:else}
			<div>
				<button class="btn btn-sm variant-ghost-surface" on:click={() => connect()}>Connect</button>
			</div>
		{/if}
	</svelte:fragment>
</AppBar>
