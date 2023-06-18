<div>
	<header class="doc-shell-header space-y-10" id="introduction">
		<section class="space-y-4">
			<span class="badge variant-soft translate-y-1">improvements</span>
			<h1 class="h1">Fully ERC20 compliance</h1>
		</section>
		<hr class="" />
	</header>
	<p class="leading-relaxed mt-4 text-xl">
		<code>Nativo</code> is fully ERC20 compliance, while the WETH contract is not, WETH doesnt emit
		a <code>Transfer</code> event from <code>address(0)</code> to the user after minting tokens.<br
		/>
		This also happen when the user unwrap the tokens, WETH doesnt emit a <code>Transfer</code>code>
		event from the user to <code>address(0)</code> after burning tokens.
	</p>
	<hr class="!border-t-4 my-4" />

	<p class=" text-lg mt-4" />
	<div class="flex">
		<header class="doc-shell-header space-y-10 pl-2">
			<section class="space-y-4">
				<h2 class="h2">But Why Can't We Just Use ETH?</h2>
				<p>
					One challenge I like to posit to our students is “If you wanted to go directly to the ”ETH
					Contract" to manipulate ETH in Etherscan, where would you go?" This contract of course
					does not exist, and everything ETH can do is built into the core code of Ethereum itself.
					ETH is limited in what it can do. You can Transfer it, use it to pay for gas, and add it
					as a cost for a method (think Mint, for example). Beyond that, you can't do anything too
					complicated with it.
				</p>
			</section>
		</header>
	</div>

	<hr class="!border-t-4 my-4" />

	<header class="mt-8 space-y-10" id="get-started">
		<section class="space-y-4">
			<h1 class="h1">Get started</h1>
			<p>
				To get some <code>Nativo</code> tokens, you can wrap your ETH using the <code>deposit</code>
				function via this
				<a href="/wrap" class="link-primary">web interface</a>
			</p>
		</section>
		<hr class="" />
	</header>
</div>
<hr class="!border-t-4 my-4" />

<a class="btn variant-ghost-surface" href="/documentation/gas-savings">&#8592; Gas savings</a>
