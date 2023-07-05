<script lang="ts">
	import {
		walletAccount,
		activeChain,
		connect,
		disconnect,
		switchChain
	} from '$lib/stores/auth/store';

	import { AppBar } from '@skeletonlabs/skeleton';

	$: _connect = $connect || (() => {});
	$: _disconnect = $disconnect || (() => {});
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
				<button class="btn btn-sm variant-ghost-surface" on:click={() => _disconnect()}
					>Disconnect</button
				>
			</div>
		{:else if $connect}
			<div>
				<button class="btn btn-sm variant-ghost-surface" on:click={() => _connect()}>Connect</button
				>
			</div>
		{/if}
	</svelte:fragment>
</AppBar>
