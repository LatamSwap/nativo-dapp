<div>
	<header class="doc-shell-header space-y-10" id="infinity-approval">
		<section class="space-y-4">
			<span class="badge variant-soft translate-y-1">gas savings</span>
			<h1 class="h1">Infity approval</h1>
		</section>
		<hr class="" />
	</header>
	<p class="leading-relaxed mt-4 text-xl">
		When an approval is set to <code>type(uint256).max</code> it will not decrease through <code>transferFrom</code> or <code>withdrawFrom<code> calls.
	</p>
	<hr class="!border-t-4 my-4" />


	<header class="doc-shell-header space-y-10" id="balances-slot">
		<section class="space-y-4">
			<span class="badge variant-soft translate-y-1">gas savings</span>
			<h1 class="h1">Balance slots</h1>
		</section>
		<hr class="" />
	</header>
	<p class="leading-relaxed mt-4 text-xl">
		To avoid extra calculations the balances of the users are stored in the same slot as the <code>address</code> instead of using a mapping.
		To avoid slot collisions we use the <a href="https://eips.ethereum.org/EIPS/eip-1967" target="_blank">ERC-1967: Proxy Storage Slots</a>.
	</p>
	<hr class="!border-t-4 my-4" />


	
	
</div>
<hr class="!border-t-4 my-4" />

<a class="btn variant-ghost-surface" href="/documentation/improvements">&#8592; Improvements</a>
<a class="mt-10 btn variant-ghost-surface" href="/documentation/security">Security &#8594;</a>
