<script lang="ts">
    import { CodeBlock } from '@skeletonlabs/skeleton';
    import hljs from 'highlight.js';
    import 'highlight.js/styles/github-dark.css';
    import hljsDefineSolidity from "highlightjs-solidity";

    import { storeHighlightJs } from '@skeletonlabs/skeleton'; 
    storeHighlightJs.set(hljs);
hljsDefineSolidity(hljs);
</script>

<div>
	<header class="doc-shell-header space-y-10" id="compliance">
		<section class="space-y-4">
			<span class="badge variant-soft translate-y-1">improvements</span>
			<h1 class="h1">Fully ERC20 compliance</h1>
		</section>
		<hr class="" />
	</header>
    <p class="leading-relaxed mt-4 text-xl">
        <code>Nativo</code> is fully ERC20 compliance, while the WETH contract is not, WETH 
        doesnt emit a <code>Transfer</code> event from <code>address(0)</code> to the user after 
        minting tokens.<br />
        This also happen when the user unwrap the tokens, WETH doesnt emit a <code>Transfer</code>code> event 
        from the user to <code>address(0)</code> after burning tokens.
    </p>
    <hr class="!border-t-4 my-4" />
    

    <header class="doc-shell-header space-y-10" id="better-ux">
		<section class="space-y-4">
			<span class="badge variant-soft translate-y-1">improvements</span>
			<h1 class="h1">Better UX</h1>
		</section>
		<hr class="" />
	</header>
    <p class="leading-relaxed mt-4 text-xl">
        <code>Nativo</code> propose an extension of <code>WETH</code>, besides the clasical
        <code>deposit&#123;value: AMOUNT&#125;()</code> and <code>withdraw(uint256 amount)</code> we 
        have add some useful methods.<br />
    </p>
    <hr />
    <h3 class="h3 mt-5 mb-2">&bull; <code>depositTo(address recipient)</code></h3>
    <p class="leading-relaxed  mb-2 text-lg">
        This method is a combination of <code>deposit</code> and <code>transfer</code>, it will 
        wrap the deposit amount and transfer the same amount to the 
        <code>recipient</code> address.
    </p>
<CodeBlock language="solidity" code={`NATIVO.depositTo{ value: amount }(recipient);
// is a replacement for:
WETH9.deposit{ value: amount}();
WETH9.transfer(recipient, amount);`} />


<hr />

<h3 class="h3 mt-5 mb-2">&bull; <code>withdrawTo(address recipient, uint256 amount)</code></h3>
    <p class="leading-relaxed  mb-2 text-lg">
        This method is a combination of <code>withdraw</code> and <code>eth transfer</code>, it will 
        unwrap the withdraw amount and transfer the same amount to the 
        <code>recipient</code> address.
    </p>
<CodeBlock language="solidity" code={`NATIVO.withdrawTo(recipient);
// is a replacement for:
receive() external payable {
    require(msg.sender == address(WETH));
}
// ...
WETH9.withdraw(amount);
SafeTransferLib.safeTransferETH(recipient, amount);`} />



<hr />

<h3 class="h3 mt-5 mb-2">&bull; <code>withdrawFromTo(address from, address recipient, uint256 amount)</code></h3>
<p class="leading-relaxed  mb-2 text-lg">
    This method is a combination of  <code>transferFrom</code> and <code>withdraw</code>, it will
    unwrap the amount from the <code>from</code> address, thay give approval to the contract and transfer
     the same amount of native currency to the <code>recipient</code> address.
<CodeBlock language="solidity" code={`NATIVO.withdrawFromTo(from, recipient, amount);
// is a replacement for:
receive() external payable {
    require(msg.sender == address(WETH));
}
// ...
WETH9.transferFrom(from, address(this), amount);
WETH9.withdraw(amount);
SafeTransferLib.safeTransferETH(recipient, amount);`} />


    <hr class="!border-t-4 my-4" />





<hr />


    <header class="doc-shell-header space-y-10" id="compliance">
		<section class="space-y-4">
			<span class="badge variant-soft translate-y-1">improvements</span>
			<h1 class="h1">Fully ERC20 compliance</h1>
		</section>
		<hr class="" />
	</header>
    <p class="leading-relaxed mt-4 text-xl">
        <code>Nativo</code> is fully ERC20 compliance, while the WETH contract is not, WETH 
        doesnt emit a <code>Transfer</code> event from <code>address(0)</code> to the user after 
        minting tokens.<br />
        This also happen when the user unwrap the tokens, WETH doesnt emit a <code>Transfer</code>code> event 
        from the user to <code>address(0)</code> after burning tokens.
    </p>


    <hr class="!border-t-4 my-4" />



    <header class="doc-shell-header space-y-10" id="compliance">
		<section class="space-y-4">
			<span class="badge variant-soft translate-y-1">improvements</span>
			<h1 class="h1">Fully ERC20 compliance</h1>
		</section>
		<hr class="" />
	</header>
    <p class="leading-relaxed mt-4 text-xl">
        <code>Nativo</code> is fully ERC20 compliance, while the WETH contract is not, WETH 
        doesnt emit a <code>Transfer</code> event from <code>address(0)</code> to the user after 
        minting tokens.<br />
        This also happen when the user unwrap the tokens, WETH doesnt emit a <code>Transfer</code>code> event 
        from the user to <code>address(0)</code> after burning tokens.
    </p>
    <hr class="!border-t-4 my-4" />
</div>
    <hr class="!border-t-4 my-4" />

    <a class="mt-10 btn variant-ghost-surface" href="/documentation/">&#8592; Introduction</a>
	<a class="mt-10 btn variant-ghost-surface" href="/documentation/gas-savings">Gas savings &#8594;</a>