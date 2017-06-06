#!/usr/bin/env python3

from ethereum.tester import languages
from ethereum import tester as t

import json
import os
import fs

contract_dir = fs.abspath('../contracts/')
contracts = list(fs.list(contract_dir))

def main():
	print(contracts)
	for contract in contracts:
		with open(contract, 'r') as file:
			code = file.read().decode('windows-1252')
			print(code)
			# combined = languages['solidity'].combined(code)
			# compiled_code = combined[-1][1]["bin_hex"]
			# abi = combined[-1][1]["abi"]
			# print(compiled_code, abi)


if __name__ == '__main__':
	main()