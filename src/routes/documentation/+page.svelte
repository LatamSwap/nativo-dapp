<div>
	<header class="doc-shell-header space-y-10" id="introduction">
		<section class="space-y-4">
			<span class="badge variant-soft translate-y-1">Documentation</span>
			<h1 class="h1">Introduction</h1>
			<p>
				<code>Nativo</code> is an enhanced version of the WETH contract, which provides a way to wrap
				the native cryptocurrency of any supported EVM network into an ERC20 token, thus enabling more
				sophisticated interaction with smart contracts and DApps on various blockchains.
			</p>
		</section>
		<hr class="" />
	</header>
	<p class="leading-relaxed text-lg mt-4">
		Wrapped Ether (WETH) has been an indispensable resource in the Ethereum ecosystem, allowing
		Ether (ETH) to interface with Ethereum-based protocols through the ERC20 standard. Despite its
		importance, however, WETH has begun to show its age. It lacks several features that could make
		Ethereum-based protocols run more smoothly, and was deployed bypassing Solidity's optimizer,
		resulting in suboptimal gas usage and slower operation. Nativo arises to address these
		limitations, offering an updated and improved version of WETH with advanced features and a more
		efficient operation in terms of gas.
	</p>

	<hr class="!border-t-4 my-4" />

	<div class="flex">
		<div class="mx-auto min-w-[220px] p-2">
			<img src="/animation.gif" class="rounded-xl w-full" alt="corrent issue" />
		</div>

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
	<p class="leading-relaxed text-lg mt-4" />
</div>

<a class="btn variant-ghost-surface" href="/documentation/improvements">Improvements →</a>
