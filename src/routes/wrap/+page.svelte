<script lang="ts">
	import { chainsMetadata } from '$lib/stores/auth/constants';
	import {
		walletBalance,
		walletClient,
		walletBalanceNativo,
		walletAccount,
		connect,
		disconnect,
		tokenSymbol,
		wrongNetwork,
	} from '$lib/stores/auth/store';
	import { formatEther, parseEther } from 'viem';
	import { nativoAbi } from '$lib/nativo.abi';

	$: _connect = $connect;
	$: _disconnect = $disconnect;

	// 0x2A955Cd173b851bac5Be79BdC8Cbc5D5a30e1d8d

	let action = 'wrap';

	let amountVal = 0;

	async function doUnwrap() {
		if(!$walletAccount) {
			return;
		}
		await $walletClient?.writeContract({
			address: '0x2A955Cd173b851bac5Be79BdC8Cbc5D5a30e1d8d',
			account: $walletAccount,
			abi: nativoAbi,
			functionName: 'withdraw',
			args: [parseEther(String(amountVal))]
		});

		amountVal = 0;
	}

	async function doWrap() {
		if(!$walletAccount) {
			return;
		}
		await $walletClient?.writeContract({
			address: '0x2A955Cd173b851bac5Be79BdC8Cbc5D5a30e1d8d',
			account: $walletAccount,
			abi: nativoAbi,
			functionName: 'deposit',
			value: parseEther(String(amountVal))
		});

		amountVal = 0;
	}

	$: wrapping = action == 'wrap'
	$: if (wrapping || !wrapping) {
			amountVal = 0;
	}


</script>

{#if _connect}
	<div class="w-full h-full bg-slate-200">
		<div class="flex justify-center flex-col mx-auto w-full text-center max-w-lg">
			<div class="btn-group variant-filled flex flex-row mx-auto mt-14">
				<button on:click={() => (action = 'wrap')} class:bg-slate-300={wrapping}
					>Wrap</button
				>
				<button on:click={() => (action = 'unwrap')} class:bg-slate-300={!wrapping}
					>Unwrap</button
				>
			</div>
			<div class="rounded-3xl bg-white shadow-sm w-full mt-10 mx-auto flex flex-col px-5 py-4 z-10">
				{#if $walletAccount && !$wrongNetwork}
					<h1 class=" text-black text-3xl">
						{wrapping ? ('Wrap : ' + $tokenSymbol + ' to n' + $tokenSymbol) : ('Unwrap : n' + $tokenSymbol + ' to ' + $tokenSymbol)}
					</h1>
					<div class="border rounded-lg p-2 flex flex-col">
						<div class="flex flex-row text-xs text-gray-700 justify-between items-center">
							<div>
								{#if wrapping}
									{$tokenSymbol} to wrap
								{:else}
									n{$tokenSymbol} to unwrap
								{/if}
							</div>
							<div>Balance: {formatEther((wrapping ? $walletBalance : $walletBalanceNativo) || 0n).slice(0, 8)}</div>
						</div>
						<div class="flex flex-row text-gray-700 justify-between pt-1 items-center">
							<!-- {#if loaded} -->
							<!-- disabled={!loaded}
          bind:value={ethmountVal} 
          on:input="{updateethmountVal}" -->
							<input
								type="number"
								bind:value={amountVal}
								placeholder="0"
								min="0"
								max={parseFloat(formatEther((wrapping ? $walletBalance : $walletBalanceNativo ) || 0n))}
								step="0.01"
								class="text-4xl outline-none w-72 font-mono"
							/>
							<button
								class="text-xs hover:border-gray-600 border-transparent border rounded px-1 mx-4 py-0 h-6 bg-slate-200"
								>MAX</button
							>
							<!-- <div class="flex flex-row items-center"> -->
							<div class="text-xl font-semibold w-14">
								{wrapping ? '' : 'n'}{$tokenSymbol}
							</div>
							<!-- </div> -->
						</div>
					</div>
					<div class="text-left" />

					<span class="text-black text-3xl text-center fill-black mx-auto py-2">
						<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 384 512"
							><path
								d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"
							/></svg
						>
					</span>
					<div class="border rounded-lg p-2 flex flex-col">
						<div class="flex flex-row text-xs text-gray-700 justify-between">
							<div>Output</div>
							<div>Balance: {parseFloat(formatEther((wrapping ? $walletBalanceNativo : $walletBalance ) || 0n).slice(0,8))}</div>
						</div>
						<div class="flex flex-row text-gray-700 justify-between pt-1">
							<input
								type="number"
								placeholder="0"
								min="0"
								value={amountVal}
								readonly
								class="text-4xl w-72 outline-none font-mono text-green-700"
							/>
							<div class="flex flex-row">
								<div class="text-xl font-semibold w-14">
									{action == 'wrap' ? 'n' : ''}{$tokenSymbol}
								</div>
							</div>
						</div>
					</div>
				{/if}
				<div>
					{#if !$walletAccount}
						<button
							type="button"
							class="btn variant-filled-warning btn-xl my-4"
							on:click={() => _connect()}>Connect wallet</button
						>
					{:else if $wrongNetwork}
						<aside class="alert variant-filled mt-3">
							<!-- Icon -->
							<!-- Message -->
							<div class="alert-message text-justify w-full">
								<h3 class="h3">Wrong network</h3>
								<p>
									Nativo is working on 
									<a href="https://chainlist.org/chain/31" class="underline font-bold" target="_blank">RSKTestnet</a>
									 and <a href="https://chainlist.org/chain/471100" class="underline font-bold" target="_blank">Patex Testnet</a>. Please switch your wallet
									to one of those networks.
								</p>
							</div>
							<!-- Actions -->
						</aside>
					{:else}
						{#if wrapping}
							<button type="button" class="btn variant-filled-warning btn-xl my-4" on:click={() => doWrap()}>
								Wrap
							</button>
						{:else}
							<button type="button" class="btn variant-filled-warning btn-xl my-4" on:click={() => doUnwrap()}>
								Unwrap
							</button>
						{/if}
					{/if}

					<!--
        {#if !$wallet}
          <button class="bg-blue-500 hover:bg-blue-600 text-2xl text-white w-full rounded-xl py-4 font-semibold mt-4"
          on:click|preventDefault={login}
          >Connect wallet</button>
        {:else if $chainId != 31337}
          <button class="bg-red-500 hover:bg-red-600 text-2xl text-white w-full rounded-xl py-4 font-semibold mt-4"
          on:click|preventDefault={changeNetwork}
          >Connect to Local</button>
        {:else}
          
          <button class="bg-blue-500 hover:bg-blue-600 text-2xl text-white w-full rounded-xl py-4 font-semibold mt-4"
          on:click|preventDefault={redeem}
          disabled={invalid}
          class:cursor-wait={minting}>Redeem</button>
        {/if}
        -->
				</div>
			</div>
		</div>
	</div>
{/if}
