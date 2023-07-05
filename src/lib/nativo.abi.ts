import { parseAbi } from 'viem';

export const nativoAbi = parseAbi([
	'function transferFrom(address from, address to, uint amount)',
	'function transfer(uint amount)',
	'function withdraw(uint amount)',
	'function deposit() payable',
	'function balanceOf(address owner) view returns (uint)',
	'event Transfer(address indexed from, address indexed to, uint256 amount)'
]);
