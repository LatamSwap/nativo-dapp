<script lang="ts">
	import { CodeBlock } from '@skeletonlabs/skeleton';
	import hljs from 'highlight.js';
	import 'highlight.js/styles/github-dark.css';
	import hljsDefineSolidity from 'highlightjs-solidity';

	import { storeHighlightJs } from '@skeletonlabs/skeleton';
	storeHighlightJs.set(hljs);
	hljsDefineSolidity(hljs);
</script>

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
	<hr />
	<p class="leading-relaxed text-lg mt-4">
		If you are using a <b>smart contract</b> you can use this interface:
		<a
			href="https://github.com/LatamSwap/nativo/blob/main/src/INativo.sol"
			rel="noreferrer"
			class="link-primary">INativo.sol</a
		>.
	</p>

	<CodeBlock
		language="solidity"
		code={`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

interface Nativo {
	error AddressZero();
	error AllowanceOverflow();
	error AllowanceUnderflow();
	error ERC3156ExceededMaxLoan(uint256 maxLoan);
	error ERC3156InvalidReceiver(address receiver);
	error ERC3156UnsupportedToken(address token);
	error InsufficientAllowance();
	error InsufficientBalance();
	error InvalidPermit();
	error PermitExpired();
	error WithdrawFailed();
	event Approval(
		address indexed owner,
		address indexed spender,
		uint256 amount
	);
	event RecoverNativo(address indexed account, uint256 amount);
	event Transfer(address indexed fxrom, address indexed to, uint256 amount);

	fallback() external payable;

	function DOMAIN_SEPARATOR() external view returns (bytes32);

	function allowance(address user, address spender)
		external
		view
		returns (uint256 amount);

	function approve(address spender, uint256 amount) external returns (bool);

	function approveAndCall(address spender, uint256 amount)
		external
		returns (bool);

	function approveAndCall(
		address spender,
		uint256 amount,
		bytes memory data
	) external returns (bool);

	function balanceOf(address account)
		external
		view
		returns (uint256 _balance);

	function decimals() external view returns (uint8);

	function deposit() external payable;

	function depositTo(address to) external payable;

	function flashFee(address token, uint256 amount)
		external
		view
		returns (uint256);

	function flashLoan(
		address receiver,
		address token,
		uint256 amount,
		bytes memory data
	) external returns (bool);

	function maxFlashLoan(address token)
		external
		view
		returns (uint256 maxLoan);

	function name() external view returns (string memory);

	function nonces(address user) external view returns (uint256 nonce);

	function permit(
		address owner,
		address spender,
		uint256 value,
		uint256 deadline,
		uint8 v,
		bytes32 r,
		bytes32 s
	) external;

	function recoverERC20(address token, uint256 amount) external;

	function recoverNativo(address account) external;

	function supportsInterface(bytes4 interfaceId)
		external
		view
		returns (bool result);

	function symbol() external view returns (string memory);

	function totalSupply() external view returns (uint256 totalSupply_);

	function transfer(address to, uint256 amount) external returns (bool);

	function transferAndCall(address to, uint256 amount)
		external
		returns (bool);

	function transferAndCall(
		address to,
		uint256 amount,
		bytes memory data
	) external returns (bool);

	function transferFrom(
		address from,
		address to,
		uint256 amount
	) external returns (bool);

	function transferFromAndCall(
		address from,
		address to,
		uint256 amount,
		bytes memory data
	) external returns (bool);

	function transferFromAndCall(
		address from,
		address to,
		uint256 amount
	) external returns (bool);

	function treasury() external view returns (address);

	function withdraw(uint256 amount) external;

	function withdrawFromTo(
		address from,
		address to,
		uint256 amount
	) external;

	function withdrawTo(address to, uint256 amount) external;

	receive() external payable;
}
`}
	/>
</div>

<a class="btn variant-ghost-surface" href="/documentation/improvements">Improvements &#8594;</a>
