<div>
	<header class="doc-shell-header space-y-10" id="introduction">
		<section class="space-y-4">
			<span class="badge variant-soft translate-y-1">security</span>
			<h1 class="h1">Less Footguns</h1>
		</section>
		<hr class="" />
	</header>
	<p class="leading-relaxed mt-4 text-xl">
		
<code>WETH9</code> does not have a permit method but implements a silent fallback method meaning it'll silently accept a call to all methods,
 even ones it hasn't implemented. This often leads to unforseen vulnerabilities when developers expect their contracts to interact with ERC20
  tokens that implement certain methods or at the very least to revert if they do not implement the methods. Plase read this article for more information: <a href="https://dedaub.com/blog/phantom-functions-and-the-billion-dollar-no-op" target="_blank">PHANTOM FUNCTIONS AND THE BILLION-DOLLAR NO-OP
</a>.<br />

Nativo does not have a silent fallback method and will revert if it's called for a method it hasn't implemented. 
Nativo does however implement a payable receive fallback method. Allowing you to wrap ETH if you explicitly send ETH to the contract along with no calldata.
	</p>
	<hr class="!border-t-4 my-4" />


	<header class="doc-shell-header space-y-10" id="introduction">
		<section class="space-y-4">
			<span class="badge variant-soft translate-y-1">security</span>
			<h1 class="h1">Remove deprecated <pre>transfer</pre></h1>
		</section>
		<hr class="" />
	</header>
	<p class="leading-relaxed mt-4 text-xl">
		
<code>WETH9</code> implements the <code>transfer</code> method which is deprecated and should not be used. <br/>
The use of the deprecated <code>transfer()</code> function for an address will inevitably make the transaction fail when:<br /><br />

- The claimer smart contract does not implement a payable function.<br />
- The claimer smart contract does implement a payable fallback which uses more than 2300 gas unit.<br />
- The claimer smart contract implements a payable fallback function that needs less than 2300 gas units but is called through proxy, raising the call's gas usage above 2300.<br />
- Additionally, using higher than 2300 gas might be mandatory for some multisig wallets.<br />




	</p>
	<hr class="!border-t-4 my-4" />
</div>
