<script lang="ts">
	function scrollIntoView({ target }: { target: MouseEventHandler<HTMLAnchorElement> }) {
		const el = document.querySelector(target.getAttribute('href'));
		if (!el) return;
		el.scrollIntoView({
			behavior: 'smooth'
		});
	}
</script>

<div style="background-color: #d32d78;" class="h-screen w-full justify-center items-center">
	<div class="container flex flex-col mx-auto">
		<div class="space-y-10 text-center flex flex-col items-center w-full">
			<img src="/cover.png" class="glow" alt="Nativo Cover" />
			<h2 class="h2">Welcome to Nativo.</h2>
			<div class="flex justify-center space-x-2">
				<a
					class="btn variant-filled"
					href="#features"
					on:click|preventDefault={scrollIntoView}
					rel="noreferrer"
				>
					Features
				</a>
				<a class="btn variant-filled" href="/documentation"> Launch Documentation </a>
				<a class="btn variant-filled" href="/wrap"> Wrap/Unwrap </a>
			</div>
			<div class="space-y-2" />
		</div>
	</div>
</div>

<div
	class="container h-screen w-full flex flex-col justify-center items-center mx-auto"
	id="features"
>
	<div class="space-y-10 text-center flex flex-col items-center w-full">
		<div class="max-w-2xl">
			<h1 class="h1">Nativo the wrapper chief.</h1>
			<p class="text-lg font-bold mt-4">
				Nativo is an enhanced version of the WETH contract, which provides a way to wrap the native
				cryptocurrency of any supported EVM network into an ERC20 token, thus enabling more
				sophisticated interaction with smart contracts and DApps on various blockchains.
			</p>
		</div>
		<!-- Responsive Container (recommended) -->
		<div class="table-container max-w-2xl">
			<!-- Native Table Element -->
			<table class="table table-hover text-xl">
				<thead>
					<tr>
						<th>Feature</th>
						<th>WETH</th>
						<th>Nativo</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td class="text-left">
							Infinity Approve (gas savings) 
							<a href="/documentation" class="link-primary">REF</a>
						</td>
						<td>&#x2715;</td>
						<td>&#x2713;</td>
					</tr>
					<tr>
						<td class="text-left">
							Improved interface for wrapping and unwrapping <a
								href="/documentation/improvements#better-ux"
								class="link-primary">REF</a
							></td
						>
						<td>&#x2715;</td>
						<td>&#x2713;</td>
					</tr>
					<tr>
						<td class="text-left">
							Remove deprecated <pre class="inline-block">.transfer</pre>
							<a
								target="_blank"
								rel="external"
								href="https://medium.com/coinmonks/gemstoneido-contract-stuck-with-921-eth-an-analysis-of-why-transfer-does-not-work-on-zksync-era-d5a01807227d"
								>Read this</a
							>
							<a href="/documentation" class="link-primary">REF</a>
						</td>
						<td>&#x2715;</td>
						<td>&#x2713;</td>
					</tr>

					<tr>
						<td class="text-left">
							<a
								href="https://eips.ethereum.org/EIPS/eip-2612"
								class="underline"
								target="_blank"
								rel="noreferrer"
							>
								ERC-2612 / ERC20Permit
							</a> <a href="/documentation/improvements#erc20-permit" class="link-primary">REF</a>
						</td>
						<td>&#x2715;</td>
						<td>&#x2713;</td>
					</tr>
					<tr>
						<td class="text-left">
							<a
								href="https://eips.ethereum.org/EIPS/eip-1363"
								class="underline"
								target="_blank"
								rel="noreferrer"
							>
								ERC1363: Payable Token, Call Chaining
							</a> <a href="/documentation/improvements#payable-token" class="link-primary">REF</a>
						</td>
						<td>&#x2715</td>
						<td>&#x2713;</td>
					</tr>

					<tr>
						<td class="text-left">
							<a
								href="https://eips.ethereum.org/EIPS/eip-3156"
								class="underline"
								target="_blank"
								rel="noreferrer"
							>
								ERC3156: Flash Loans
							</a> <a href="/documentation/improvements#flash-loan" class="link-primary">REF</a>
						</td>
						<td>&#x2715</td>
						<td>&#x2713;</td>
					</tr>
				</tbody>
				<tfoot>
					<tr>
						<th colspan="3" class="mx-2 text-center">
							For a detailed overview , please refer to the <a
								href="/documentation"
								class="link-primary">documentation</a
							>
						</th>
					</tr>
				</tfoot>
			</table>
		</div>
		<div class="space-y-2" />
	</div>
</div>

<style lang="postcss">
	@keyframes glow {
		0% {
			@apply bg-primary-400/50;
		}
		33% {
			@apply bg-secondary-400/50;
		}
		66% {
			@apply bg-tertiary-400/50;
		}
		100% {
			@apply bg-primary-400/50;
		}
	}
	@keyframes pulse {
		50% {
			transform: scale(1.5);
		}
	}
</style>
