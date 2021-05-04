let ContractConfig = {
  usdList:['busd','usdc','usdt','sameUsd'],
  
  ContractMsg: {
    Nexus: {
      address: "0x72F28237a9cABD233D6372342327aa06Ef241CdF", abi: [
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "_governorAddr",
              "type": "address"
            }
          ],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "constructor"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "governor",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "proposed",
              "type": "address"
            }
          ],
          "name": "GovernorChangeCancelled",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "proposedGovernor",
              "type": "address"
            }
          ],
          "name": "GovernorChangeClaimed",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "governor",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "proposed",
              "type": "address"
            }
          ],
          "name": "GovernorChangeRequested",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "previousGovernor",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "newGovernor",
              "type": "address"
            }
          ],
          "name": "GovernorChanged",
          "type": "event"
        },
        {
          "constant": false,
          "inputs": [],
          "name": "cancelGovernorChange",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "name": "changeGovernor",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [],
          "name": "claimGovernorChange",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "governor",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "isGovernor",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "proposedGovernor",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "address",
              "name": "_proposedGovernor",
              "type": "address"
            }
          ],
          "name": "requestGovernorChange",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        }
      ]
    },
    Masset: {
      address: "0xa67Cd3ceE48617fA5aDBF8254e94c92cd7Ea9c9a", abi: [
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "owner",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "spender",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            }
          ],
          "name": "Approval",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "address",
              "name": "forgeValidator",
              "type": "address"
            }
          ],
          "name": "ForgeValidatorChanged",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "minter",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "address",
              "name": "recipient",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "mAssetQuantity",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "address",
              "name": "bAsset",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "bAssetQuantity",
              "type": "uint256"
            }
          ],
          "name": "Minted",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "minter",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "address",
              "name": "recipient",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "mAssetQuantity",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "address[]",
              "name": "bAssets",
              "type": "address[]"
            },
            {
              "indexed": false,
              "internalType": "uint256[]",
              "name": "bAssetQuantities",
              "type": "uint256[]"
            }
          ],
          "name": "MintedMulti",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "payer",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "address",
              "name": "asset",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "feeQuantity",
              "type": "uint256"
            }
          ],
          "name": "PaidFee",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "redeemer",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "address",
              "name": "recipient",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "mAssetQuantity",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "address[]",
              "name": "bAssets",
              "type": "address[]"
            },
            {
              "indexed": false,
              "internalType": "uint256[]",
              "name": "bAssetQuantities",
              "type": "uint256[]"
            }
          ],
          "name": "Redeemed",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "redeemer",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "address",
              "name": "recipient",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "mAssetQuantity",
              "type": "uint256"
            }
          ],
          "name": "RedeemedMasset",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "fee",
              "type": "uint256"
            }
          ],
          "name": "RedemptionFeeChanged",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "fee",
              "type": "uint256"
            }
          ],
          "name": "SwapFeeChanged",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "swapper",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "address",
              "name": "input",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "address",
              "name": "output",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "outputAmount",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "address",
              "name": "recipient",
              "type": "address"
            }
          ],
          "name": "Swapped",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "from",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            }
          ],
          "name": "Transfer",
          "type": "event"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "OwnerAddress",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [
            {
              "internalType": "address",
              "name": "owner",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "spender",
              "type": "address"
            }
          ],
          "name": "allowance",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "address",
              "name": "spender",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            }
          ],
          "name": "approve",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [
            {
              "internalType": "address",
              "name": "account",
              "type": "address"
            }
          ],
          "name": "balanceOf",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [],
          "name": "collectInterest",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "totalInterestGained",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "newSupply",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "decimals",
          "outputs": [
            {
              "internalType": "uint8",
              "name": "",
              "type": "uint8"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "address",
              "name": "spender",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "subtractedValue",
              "type": "uint256"
            }
          ],
          "name": "decreaseAllowance",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "forgeValidator",
          "outputs": [
            {
              "internalType": "contract IForgeValidator",
              "name": "",
              "type": "address"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "getBasketManager",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [
            {
              "internalType": "address",
              "name": "_input",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "_output",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "_quantity",
              "type": "uint256"
            }
          ],
          "name": "getSwapOutput",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            },
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "output",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "implementation",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "address",
              "name": "spender",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "addedValue",
              "type": "uint256"
            }
          ],
          "name": "increaseAllowance",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "string",
              "name": "_nameArg",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "_symbolArg",
              "type": "string"
            },
            {
              "internalType": "address",
              "name": "_forgeValidator",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "_basketManager",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "_MintRewardLogic",
              "type": "address"
            }
          ],
          "name": "initialize",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "interface_MintRewardLogic",
          "outputs": [
            {
              "internalType": "contract IMintRewardLogic",
              "name": "",
              "type": "address"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "isCEO",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [],
          "name": "lockForgeValidator",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "address",
              "name": "_bAsset",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "_bAssetQuantity",
              "type": "uint256"
            }
          ],
          "name": "mint",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "massetMinted",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "address[]",
              "name": "_bAssets",
              "type": "address[]"
            },
            {
              "internalType": "uint256[]",
              "name": "_bAssetQuantity",
              "type": "uint256[]"
            },
            {
              "internalType": "address",
              "name": "_recipient",
              "type": "address"
            }
          ],
          "name": "mintMulti",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "massetMinted",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "address",
              "name": "_bAsset",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "_bAssetQuantity",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "_recipient",
              "type": "address"
            }
          ],
          "name": "mintTo",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "massetMinted",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "name",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "address",
              "name": "_bAsset",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "_bAssetQuantity",
              "type": "uint256"
            }
          ],
          "name": "redeem",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "massetRedeemed",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_mAssetQuantity",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "_recipient",
              "type": "address"
            }
          ],
          "name": "redeemMasset",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "address[]",
              "name": "_bAssets",
              "type": "address[]"
            },
            {
              "internalType": "uint256[]",
              "name": "_bAssetQuantities",
              "type": "uint256[]"
            },
            {
              "internalType": "address",
              "name": "_recipient",
              "type": "address"
            }
          ],
          "name": "redeemMulti",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "massetRedeemed",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "address",
              "name": "_bAsset",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "_bAssetQuantity",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "_recipient",
              "type": "address"
            }
          ],
          "name": "redeemTo",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "massetRedeemed",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "redemptionFee",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_redemptionFee",
              "type": "uint256"
            }
          ],
          "name": "setRedemptionFee",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_swapFee",
              "type": "uint256"
            }
          ],
          "name": "setSwapFee",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "address",
              "name": "_input",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "_output",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "_quantity",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "_recipient",
              "type": "address"
            }
          ],
          "name": "swap",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "output",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "swapFee",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "symbol",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "totalSupply",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "address",
              "name": "recipient",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            }
          ],
          "name": "transfer",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "address",
              "name": "sender",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "recipient",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            }
          ],
          "name": "transferFrom",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "address",
              "name": "CEOAddress",
              "type": "address"
            }
          ],
          "name": "updataCEO",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "address",
              "name": "_newForgeValidator",
              "type": "address"
            }
          ],
          "name": "upgradeForgeValidator",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        }
      ]
    },
    MassetProxy: {
      address: "0x2FCB59cA087b4508dEfd1d5aE68B4651f91C4f81", abi: [
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "owner",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "spender",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            }
          ],
          "name": "Approval",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "address",
              "name": "forgeValidator",
              "type": "address"
            }
          ],
          "name": "ForgeValidatorChanged",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "minter",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "address",
              "name": "recipient",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "mAssetQuantity",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "address",
              "name": "bAsset",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "bAssetQuantity",
              "type": "uint256"
            }
          ],
          "name": "Minted",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "minter",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "address",
              "name": "recipient",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "mAssetQuantity",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "address[]",
              "name": "bAssets",
              "type": "address[]"
            },
            {
              "indexed": false,
              "internalType": "uint256[]",
              "name": "bAssetQuantities",
              "type": "uint256[]"
            }
          ],
          "name": "MintedMulti",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "payer",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "address",
              "name": "asset",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "feeQuantity",
              "type": "uint256"
            }
          ],
          "name": "PaidFee",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "redeemer",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "address",
              "name": "recipient",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "mAssetQuantity",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "address[]",
              "name": "bAssets",
              "type": "address[]"
            },
            {
              "indexed": false,
              "internalType": "uint256[]",
              "name": "bAssetQuantities",
              "type": "uint256[]"
            }
          ],
          "name": "Redeemed",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "redeemer",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "address",
              "name": "recipient",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "mAssetQuantity",
              "type": "uint256"
            }
          ],
          "name": "RedeemedMasset",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "fee",
              "type": "uint256"
            }
          ],
          "name": "RedemptionFeeChanged",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "fee",
              "type": "uint256"
            }
          ],
          "name": "SwapFeeChanged",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "swapper",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "address",
              "name": "input",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "address",
              "name": "output",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "outputAmount",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "address",
              "name": "recipient",
              "type": "address"
            }
          ],
          "name": "Swapped",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "from",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            }
          ],
          "name": "Transfer",
          "type": "event"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "OwnerAddress",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [
            {
              "internalType": "address",
              "name": "owner",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "spender",
              "type": "address"
            }
          ],
          "name": "allowance",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "address",
              "name": "spender",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            }
          ],
          "name": "approve",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [
            {
              "internalType": "address",
              "name": "account",
              "type": "address"
            }
          ],
          "name": "balanceOf",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [],
          "name": "collectInterest",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "totalInterestGained",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "newSupply",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "decimals",
          "outputs": [
            {
              "internalType": "uint8",
              "name": "",
              "type": "uint8"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "address",
              "name": "spender",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "subtractedValue",
              "type": "uint256"
            }
          ],
          "name": "decreaseAllowance",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "forgeValidator",
          "outputs": [
            {
              "internalType": "contract IForgeValidator",
              "name": "",
              "type": "address"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "getBasketManager",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [
            {
              "internalType": "address",
              "name": "_input",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "_output",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "_quantity",
              "type": "uint256"
            }
          ],
          "name": "getSwapOutput",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            },
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "output",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "implementation",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "address",
              "name": "spender",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "addedValue",
              "type": "uint256"
            }
          ],
          "name": "increaseAllowance",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "string",
              "name": "_nameArg",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "_symbolArg",
              "type": "string"
            },
            {
              "internalType": "address",
              "name": "_forgeValidator",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "_basketManager",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "_MintRewardLogic",
              "type": "address"
            }
          ],
          "name": "initialize",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "interface_MintRewardLogic",
          "outputs": [
            {
              "internalType": "contract IMintRewardLogic",
              "name": "",
              "type": "address"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "isCEO",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [],
          "name": "lockForgeValidator",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "address",
              "name": "_bAsset",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "_bAssetQuantity",
              "type": "uint256"
            }
          ],
          "name": "mint",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "massetMinted",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "address[]",
              "name": "_bAssets",
              "type": "address[]"
            },
            {
              "internalType": "uint256[]",
              "name": "_bAssetQuantity",
              "type": "uint256[]"
            },
            {
              "internalType": "address",
              "name": "_recipient",
              "type": "address"
            }
          ],
          "name": "mintMulti",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "massetMinted",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "address",
              "name": "_bAsset",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "_bAssetQuantity",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "_recipient",
              "type": "address"
            }
          ],
          "name": "mintTo",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "massetMinted",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "name",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "address",
              "name": "_bAsset",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "_bAssetQuantity",
              "type": "uint256"
            }
          ],
          "name": "redeem",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "massetRedeemed",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_mAssetQuantity",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "_recipient",
              "type": "address"
            }
          ],
          "name": "redeemMasset",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "address[]",
              "name": "_bAssets",
              "type": "address[]"
            },
            {
              "internalType": "uint256[]",
              "name": "_bAssetQuantities",
              "type": "uint256[]"
            },
            {
              "internalType": "address",
              "name": "_recipient",
              "type": "address"
            }
          ],
          "name": "redeemMulti",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "massetRedeemed",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "address",
              "name": "_bAsset",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "_bAssetQuantity",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "_recipient",
              "type": "address"
            }
          ],
          "name": "redeemTo",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "massetRedeemed",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "redemptionFee",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_redemptionFee",
              "type": "uint256"
            }
          ],
          "name": "setRedemptionFee",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_swapFee",
              "type": "uint256"
            }
          ],
          "name": "setSwapFee",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "address",
              "name": "_input",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "_output",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "_quantity",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "_recipient",
              "type": "address"
            }
          ],
          "name": "swap",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "output",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "swapFee",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "symbol",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "totalSupply",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "address",
              "name": "recipient",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            }
          ],
          "name": "transfer",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "address",
              "name": "sender",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "recipient",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            }
          ],
          "name": "transferFrom",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "address",
              "name": "CEOAddress",
              "type": "address"
            }
          ],
          "name": "updataCEO",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "address",
              "name": "_newForgeValidator",
              "type": "address"
            }
          ],
          "name": "upgradeForgeValidator",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        }
      ]
    },
    ForgeValidator: {
      address: "0xba4AfEA84F7bc5621e46b6bFf1Aa5C016646D3B4", abi: [
        {
          "constant": true,
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_mAssetQuantity",
              "type": "uint256"
            },
            {
              "components": [
                {
                  "internalType": "address",
                  "name": "addr",
                  "type": "address"
                },
                {
                  "internalType": "enum MassetStructs.BassetStatus",
                  "name": "status",
                  "type": "uint8"
                },
                {
                  "internalType": "bool",
                  "name": "isTransferFeeCharged",
                  "type": "bool"
                },
                {
                  "internalType": "uint256",
                  "name": "ratio",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "maxWeight",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "vaultBalance",
                  "type": "uint256"
                }
              ],
              "internalType": "struct MassetStructs.Basset[]",
              "name": "_allBassets",
              "type": "tuple[]"
            }
          ],
          "name": "calculateRedemptionMulti",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            },
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            },
            {
              "internalType": "uint256[]",
              "name": "",
              "type": "uint256[]"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_totalVault",
              "type": "uint256"
            },
            {
              "components": [
                {
                  "internalType": "address",
                  "name": "addr",
                  "type": "address"
                },
                {
                  "internalType": "enum MassetStructs.BassetStatus",
                  "name": "status",
                  "type": "uint8"
                },
                {
                  "internalType": "bool",
                  "name": "isTransferFeeCharged",
                  "type": "bool"
                },
                {
                  "internalType": "uint256",
                  "name": "ratio",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "maxWeight",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "vaultBalance",
                  "type": "uint256"
                }
              ],
              "internalType": "struct MassetStructs.Basset",
              "name": "_bAsset",
              "type": "tuple"
            },
            {
              "internalType": "uint256",
              "name": "_bAssetQuantity",
              "type": "uint256"
            }
          ],
          "name": "validateMint",
          "outputs": [
            {
              "internalType": "bool",
              "name": "isValid",
              "type": "bool"
            },
            {
              "internalType": "string",
              "name": "reason",
              "type": "string"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_totalVault",
              "type": "uint256"
            },
            {
              "components": [
                {
                  "internalType": "address",
                  "name": "addr",
                  "type": "address"
                },
                {
                  "internalType": "enum MassetStructs.BassetStatus",
                  "name": "status",
                  "type": "uint8"
                },
                {
                  "internalType": "bool",
                  "name": "isTransferFeeCharged",
                  "type": "bool"
                },
                {
                  "internalType": "uint256",
                  "name": "ratio",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "maxWeight",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "vaultBalance",
                  "type": "uint256"
                }
              ],
              "internalType": "struct MassetStructs.Basset[]",
              "name": "_bAssets",
              "type": "tuple[]"
            },
            {
              "internalType": "uint256[]",
              "name": "_bAssetQuantities",
              "type": "uint256[]"
            }
          ],
          "name": "validateMintMulti",
          "outputs": [
            {
              "internalType": "bool",
              "name": "isValid",
              "type": "bool"
            },
            {
              "internalType": "string",
              "name": "reason",
              "type": "string"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [
            {
              "internalType": "bool",
              "name": "_basketIsFailed",
              "type": "bool"
            },
            {
              "internalType": "uint256",
              "name": "_totalVault",
              "type": "uint256"
            },
            {
              "components": [
                {
                  "internalType": "address",
                  "name": "addr",
                  "type": "address"
                },
                {
                  "internalType": "enum MassetStructs.BassetStatus",
                  "name": "status",
                  "type": "uint8"
                },
                {
                  "internalType": "bool",
                  "name": "isTransferFeeCharged",
                  "type": "bool"
                },
                {
                  "internalType": "uint256",
                  "name": "ratio",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "maxWeight",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "vaultBalance",
                  "type": "uint256"
                }
              ],
              "internalType": "struct MassetStructs.Basset[]",
              "name": "_allBassets",
              "type": "tuple[]"
            },
            {
              "internalType": "uint8[]",
              "name": "_indices",
              "type": "uint8[]"
            },
            {
              "internalType": "uint256[]",
              "name": "_bAssetQuantities",
              "type": "uint256[]"
            }
          ],
          "name": "validateRedemption",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            },
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            },
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_totalVault",
              "type": "uint256"
            },
            {
              "components": [
                {
                  "internalType": "address",
                  "name": "addr",
                  "type": "address"
                },
                {
                  "internalType": "enum MassetStructs.BassetStatus",
                  "name": "status",
                  "type": "uint8"
                },
                {
                  "internalType": "bool",
                  "name": "isTransferFeeCharged",
                  "type": "bool"
                },
                {
                  "internalType": "uint256",
                  "name": "ratio",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "maxWeight",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "vaultBalance",
                  "type": "uint256"
                }
              ],
              "internalType": "struct MassetStructs.Basset",
              "name": "_inputBasset",
              "type": "tuple"
            },
            {
              "components": [
                {
                  "internalType": "address",
                  "name": "addr",
                  "type": "address"
                },
                {
                  "internalType": "enum MassetStructs.BassetStatus",
                  "name": "status",
                  "type": "uint8"
                },
                {
                  "internalType": "bool",
                  "name": "isTransferFeeCharged",
                  "type": "bool"
                },
                {
                  "internalType": "uint256",
                  "name": "ratio",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "maxWeight",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "vaultBalance",
                  "type": "uint256"
                }
              ],
              "internalType": "struct MassetStructs.Basset",
              "name": "_outputBasset",
              "type": "tuple"
            },
            {
              "internalType": "uint256",
              "name": "_quantity",
              "type": "uint256"
            }
          ],
          "name": "validateSwap",
          "outputs": [
            {
              "internalType": "bool",
              "name": "isValid",
              "type": "bool"
            },
            {
              "internalType": "string",
              "name": "reason",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "output",
              "type": "uint256"
            },
            {
              "internalType": "bool",
              "name": "applySwapFee",
              "type": "bool"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        }
      ]
    },
    BasketManager: {
      address: "0x4c05149b0765a40ef599A0be3A68893ddFaC2fD2", abi: [
        {
          "anonymous": false,
          "inputs": [],
          "name": "BasketStatusChanged",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "address[]",
              "name": "bAssets",
              "type": "address[]"
            },
            {
              "indexed": false,
              "internalType": "uint256[]",
              "name": "maxWeights",
              "type": "uint256[]"
            }
          ],
          "name": "BasketWeightsUpdated",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "bAsset",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "address",
              "name": "integrator",
              "type": "address"
            }
          ],
          "name": "BassetAdded",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "bAsset",
              "type": "address"
            }
          ],
          "name": "BassetRemoved",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "bAsset",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "enum MassetStructs.BassetStatus",
              "name": "status",
              "type": "uint8"
            }
          ],
          "name": "BassetStatusChanged",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "address",
              "name": "account",
              "type": "address"
            }
          ],
          "name": "Paused",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "bAsset",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "bool",
              "name": "enabled",
              "type": "bool"
            }
          ],
          "name": "TransferFeeEnabled",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "address",
              "name": "account",
              "type": "address"
            }
          ],
          "name": "Unpaused",
          "type": "event"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "address",
              "name": "_bAsset",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "_integration",
              "type": "address"
            },
            {
              "internalType": "bool",
              "name": "_isTransferFeeCharged",
              "type": "bool"
            }
          ],
          "name": "addBasset",
          "outputs": [
            {
              "internalType": "uint8",
              "name": "index",
              "type": "uint8"
            }
          ],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "basket",
          "outputs": [
            {
              "internalType": "uint8",
              "name": "maxBassets",
              "type": "uint8"
            },
            {
              "internalType": "bool",
              "name": "undergoingRecol",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "failed",
              "type": "bool"
            },
            {
              "internalType": "uint256",
              "name": "collateralisationRatio",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [],
          "name": "collectInterest",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "interestCollected",
              "type": "uint256"
            },
            {
              "internalType": "uint256[]",
              "name": "gains",
              "type": "uint256[]"
            }
          ],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "uint8",
              "name": "_bAssetIndex",
              "type": "uint8"
            },
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "_decreaseAmount",
              "type": "uint256"
            }
          ],
          "name": "decreaseVaultBalance",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "uint8[]",
              "name": "_bAssetIndices",
              "type": "uint8[]"
            },
            {
              "internalType": "address[]",
              "name": "",
              "type": "address[]"
            },
            {
              "internalType": "uint256[]",
              "name": "_decreaseAmount",
              "type": "uint256[]"
            }
          ],
          "name": "decreaseVaultBalances",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "address",
              "name": "_bAsset",
              "type": "address"
            }
          ],
          "name": "failBasset",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "getBasket",
          "outputs": [
            {
              "components": [
                {
                  "components": [
                    {
                      "internalType": "address",
                      "name": "addr",
                      "type": "address"
                    },
                    {
                      "internalType": "enum MassetStructs.BassetStatus",
                      "name": "status",
                      "type": "uint8"
                    },
                    {
                      "internalType": "bool",
                      "name": "isTransferFeeCharged",
                      "type": "bool"
                    },
                    {
                      "internalType": "uint256",
                      "name": "ratio",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "maxWeight",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "vaultBalance",
                      "type": "uint256"
                    }
                  ],
                  "internalType": "struct MassetStructs.Basset[]",
                  "name": "bassets",
                  "type": "tuple[]"
                },
                {
                  "internalType": "uint8",
                  "name": "maxBassets",
                  "type": "uint8"
                },
                {
                  "internalType": "bool",
                  "name": "undergoingRecol",
                  "type": "bool"
                },
                {
                  "internalType": "bool",
                  "name": "failed",
                  "type": "bool"
                },
                {
                  "internalType": "uint256",
                  "name": "collateralisationRatio",
                  "type": "uint256"
                }
              ],
              "internalType": "struct MassetStructs.Basket",
              "name": "b",
              "type": "tuple"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [
            {
              "internalType": "address",
              "name": "_bAsset",
              "type": "address"
            }
          ],
          "name": "getBasset",
          "outputs": [
            {
              "components": [
                {
                  "internalType": "address",
                  "name": "addr",
                  "type": "address"
                },
                {
                  "internalType": "enum MassetStructs.BassetStatus",
                  "name": "status",
                  "type": "uint8"
                },
                {
                  "internalType": "bool",
                  "name": "isTransferFeeCharged",
                  "type": "bool"
                },
                {
                  "internalType": "uint256",
                  "name": "ratio",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "maxWeight",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "vaultBalance",
                  "type": "uint256"
                }
              ],
              "internalType": "struct MassetStructs.Basset",
              "name": "bAsset",
              "type": "tuple"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [
            {
              "internalType": "address",
              "name": "_bAsset",
              "type": "address"
            }
          ],
          "name": "getBassetIntegrator",
          "outputs": [
            {
              "internalType": "address",
              "name": "integrator",
              "type": "address"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "getBassets",
          "outputs": [
            {
              "components": [
                {
                  "internalType": "address",
                  "name": "addr",
                  "type": "address"
                },
                {
                  "internalType": "enum MassetStructs.BassetStatus",
                  "name": "status",
                  "type": "uint8"
                },
                {
                  "internalType": "bool",
                  "name": "isTransferFeeCharged",
                  "type": "bool"
                },
                {
                  "internalType": "uint256",
                  "name": "ratio",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "maxWeight",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "vaultBalance",
                  "type": "uint256"
                }
              ],
              "internalType": "struct MassetStructs.Basset[]",
              "name": "bAssets",
              "type": "tuple[]"
            },
            {
              "internalType": "uint256",
              "name": "len",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "address",
              "name": "_bAsset",
              "type": "address"
            },
            {
              "internalType": "bool",
              "name": "_belowPeg",
              "type": "bool"
            }
          ],
          "name": "handlePegLoss",
          "outputs": [
            {
              "internalType": "bool",
              "name": "alreadyActioned",
              "type": "bool"
            }
          ],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "implementation",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "uint8",
              "name": "_bAssetIndex",
              "type": "uint8"
            },
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "_increaseAmount",
              "type": "uint256"
            }
          ],
          "name": "increaseVaultBalance",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "uint8[]",
              "name": "_bAssetIndices",
              "type": "uint8[]"
            },
            {
              "internalType": "address[]",
              "name": "",
              "type": "address[]"
            },
            {
              "internalType": "uint256[]",
              "name": "_increaseAmount",
              "type": "uint256[]"
            }
          ],
          "name": "increaseVaultBalances",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "address",
              "name": "_nexus",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "_mAsset",
              "type": "address"
            },
            {
              "internalType": "address[]",
              "name": "_bAssets",
              "type": "address[]"
            },
            {
              "internalType": "address[]",
              "name": "_integrators",
              "type": "address[]"
            },
            {
              "internalType": "uint256[]",
              "name": "_weights",
              "type": "uint256[]"
            },
            {
              "internalType": "bool[]",
              "name": "_hasTransferFees",
              "type": "bool[]"
            }
          ],
          "name": "initialize",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "name": "integrations",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "mAsset",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "address",
              "name": "_bAsset",
              "type": "address"
            }
          ],
          "name": "negateIsolation",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "nexus",
          "outputs": [
            {
              "internalType": "contract INexus",
              "name": "",
              "type": "address"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [],
          "name": "pause",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "paused",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "address",
              "name": "_bAsset",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            },
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "name": "prepareForgeBasset",
          "outputs": [
            {
              "internalType": "bool",
              "name": "isValid",
              "type": "bool"
            },
            {
              "components": [
                {
                  "components": [
                    {
                      "internalType": "address",
                      "name": "addr",
                      "type": "address"
                    },
                    {
                      "internalType": "enum MassetStructs.BassetStatus",
                      "name": "status",
                      "type": "uint8"
                    },
                    {
                      "internalType": "bool",
                      "name": "isTransferFeeCharged",
                      "type": "bool"
                    },
                    {
                      "internalType": "uint256",
                      "name": "ratio",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "maxWeight",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "vaultBalance",
                      "type": "uint256"
                    }
                  ],
                  "internalType": "struct MassetStructs.Basset",
                  "name": "bAsset",
                  "type": "tuple"
                },
                {
                  "internalType": "address",
                  "name": "integrator",
                  "type": "address"
                },
                {
                  "internalType": "uint8",
                  "name": "index",
                  "type": "uint8"
                }
              ],
              "internalType": "struct MassetStructs.BassetDetails",
              "name": "bInfo",
              "type": "tuple"
            }
          ],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "address[]",
              "name": "_bAssets",
              "type": "address[]"
            },
            {
              "internalType": "uint256[]",
              "name": "",
              "type": "uint256[]"
            },
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "name": "prepareForgeBassets",
          "outputs": [
            {
              "components": [
                {
                  "internalType": "bool",
                  "name": "isValid",
                  "type": "bool"
                },
                {
                  "components": [
                    {
                      "internalType": "address",
                      "name": "addr",
                      "type": "address"
                    },
                    {
                      "internalType": "enum MassetStructs.BassetStatus",
                      "name": "status",
                      "type": "uint8"
                    },
                    {
                      "internalType": "bool",
                      "name": "isTransferFeeCharged",
                      "type": "bool"
                    },
                    {
                      "internalType": "uint256",
                      "name": "ratio",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "maxWeight",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "vaultBalance",
                      "type": "uint256"
                    }
                  ],
                  "internalType": "struct MassetStructs.Basset[]",
                  "name": "bAssets",
                  "type": "tuple[]"
                },
                {
                  "internalType": "address[]",
                  "name": "integrators",
                  "type": "address[]"
                },
                {
                  "internalType": "uint8[]",
                  "name": "indexes",
                  "type": "uint8[]"
                }
              ],
              "internalType": "struct MassetStructs.ForgePropsMulti",
              "name": "props",
              "type": "tuple"
            }
          ],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "prepareRedeemMulti",
          "outputs": [
            {
              "components": [
                {
                  "internalType": "uint256",
                  "name": "colRatio",
                  "type": "uint256"
                },
                {
                  "components": [
                    {
                      "internalType": "address",
                      "name": "addr",
                      "type": "address"
                    },
                    {
                      "internalType": "enum MassetStructs.BassetStatus",
                      "name": "status",
                      "type": "uint8"
                    },
                    {
                      "internalType": "bool",
                      "name": "isTransferFeeCharged",
                      "type": "bool"
                    },
                    {
                      "internalType": "uint256",
                      "name": "ratio",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "maxWeight",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "vaultBalance",
                      "type": "uint256"
                    }
                  ],
                  "internalType": "struct MassetStructs.Basset[]",
                  "name": "bAssets",
                  "type": "tuple[]"
                },
                {
                  "internalType": "address[]",
                  "name": "integrators",
                  "type": "address[]"
                },
                {
                  "internalType": "uint8[]",
                  "name": "indexes",
                  "type": "uint8[]"
                }
              ],
              "internalType": "struct MassetStructs.RedeemPropsMulti",
              "name": "props",
              "type": "tuple"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [
            {
              "internalType": "address",
              "name": "_input",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "_output",
              "type": "address"
            },
            {
              "internalType": "bool",
              "name": "_isMint",
              "type": "bool"
            }
          ],
          "name": "prepareSwapBassets",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            },
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            },
            {
              "components": [
                {
                  "components": [
                    {
                      "internalType": "address",
                      "name": "addr",
                      "type": "address"
                    },
                    {
                      "internalType": "enum MassetStructs.BassetStatus",
                      "name": "status",
                      "type": "uint8"
                    },
                    {
                      "internalType": "bool",
                      "name": "isTransferFeeCharged",
                      "type": "bool"
                    },
                    {
                      "internalType": "uint256",
                      "name": "ratio",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "maxWeight",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "vaultBalance",
                      "type": "uint256"
                    }
                  ],
                  "internalType": "struct MassetStructs.Basset",
                  "name": "bAsset",
                  "type": "tuple"
                },
                {
                  "internalType": "address",
                  "name": "integrator",
                  "type": "address"
                },
                {
                  "internalType": "uint8",
                  "name": "index",
                  "type": "uint8"
                }
              ],
              "internalType": "struct MassetStructs.BassetDetails",
              "name": "",
              "type": "tuple"
            },
            {
              "components": [
                {
                  "components": [
                    {
                      "internalType": "address",
                      "name": "addr",
                      "type": "address"
                    },
                    {
                      "internalType": "enum MassetStructs.BassetStatus",
                      "name": "status",
                      "type": "uint8"
                    },
                    {
                      "internalType": "bool",
                      "name": "isTransferFeeCharged",
                      "type": "bool"
                    },
                    {
                      "internalType": "uint256",
                      "name": "ratio",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "maxWeight",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "vaultBalance",
                      "type": "uint256"
                    }
                  ],
                  "internalType": "struct MassetStructs.Basset",
                  "name": "bAsset",
                  "type": "tuple"
                },
                {
                  "internalType": "address",
                  "name": "integrator",
                  "type": "address"
                },
                {
                  "internalType": "uint8",
                  "name": "index",
                  "type": "uint8"
                }
              ],
              "internalType": "struct MassetStructs.BassetDetails",
              "name": "",
              "type": "tuple"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "address",
              "name": "_assetToRemove",
              "type": "address"
            }
          ],
          "name": "removeBasset",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "address[]",
              "name": "_bAssets",
              "type": "address[]"
            },
            {
              "internalType": "uint256[]",
              "name": "_weights",
              "type": "uint256[]"
            }
          ],
          "name": "setBasketWeights",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "address",
              "name": "_bAsset",
              "type": "address"
            },
            {
              "internalType": "bool",
              "name": "_flag",
              "type": "bool"
            }
          ],
          "name": "setTransferFeesFlag",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [],
          "name": "unpause",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        }
      ]
    },
    BasketManagerProxy: {
      address: `0xf46BF5c7f42F0E080298f9013C5Ebd3cCcB99897`, abi: [
        {
          "anonymous": false,
          "inputs": [],
          "name": "BasketStatusChanged",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "address[]",
              "name": "bAssets",
              "type": "address[]"
            },
            {
              "indexed": false,
              "internalType": "uint256[]",
              "name": "maxWeights",
              "type": "uint256[]"
            }
          ],
          "name": "BasketWeightsUpdated",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "bAsset",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "address",
              "name": "integrator",
              "type": "address"
            }
          ],
          "name": "BassetAdded",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "bAsset",
              "type": "address"
            }
          ],
          "name": "BassetRemoved",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "bAsset",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "enum MassetStructs.BassetStatus",
              "name": "status",
              "type": "uint8"
            }
          ],
          "name": "BassetStatusChanged",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "address",
              "name": "account",
              "type": "address"
            }
          ],
          "name": "Paused",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "bAsset",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "bool",
              "name": "enabled",
              "type": "bool"
            }
          ],
          "name": "TransferFeeEnabled",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "address",
              "name": "account",
              "type": "address"
            }
          ],
          "name": "Unpaused",
          "type": "event"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "address",
              "name": "_bAsset",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "_integration",
              "type": "address"
            },
            {
              "internalType": "bool",
              "name": "_isTransferFeeCharged",
              "type": "bool"
            }
          ],
          "name": "addBasset",
          "outputs": [
            {
              "internalType": "uint8",
              "name": "index",
              "type": "uint8"
            }
          ],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "basket",
          "outputs": [
            {
              "internalType": "uint8",
              "name": "maxBassets",
              "type": "uint8"
            },
            {
              "internalType": "bool",
              "name": "undergoingRecol",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "failed",
              "type": "bool"
            },
            {
              "internalType": "uint256",
              "name": "collateralisationRatio",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [],
          "name": "collectInterest",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "interestCollected",
              "type": "uint256"
            },
            {
              "internalType": "uint256[]",
              "name": "gains",
              "type": "uint256[]"
            }
          ],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "uint8",
              "name": "_bAssetIndex",
              "type": "uint8"
            },
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "_decreaseAmount",
              "type": "uint256"
            }
          ],
          "name": "decreaseVaultBalance",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "uint8[]",
              "name": "_bAssetIndices",
              "type": "uint8[]"
            },
            {
              "internalType": "address[]",
              "name": "",
              "type": "address[]"
            },
            {
              "internalType": "uint256[]",
              "name": "_decreaseAmount",
              "type": "uint256[]"
            }
          ],
          "name": "decreaseVaultBalances",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "address",
              "name": "_bAsset",
              "type": "address"
            }
          ],
          "name": "failBasset",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "getBasket",
          "outputs": [
            {
              "components": [
                {
                  "components": [
                    {
                      "internalType": "address",
                      "name": "addr",
                      "type": "address"
                    },
                    {
                      "internalType": "enum MassetStructs.BassetStatus",
                      "name": "status",
                      "type": "uint8"
                    },
                    {
                      "internalType": "bool",
                      "name": "isTransferFeeCharged",
                      "type": "bool"
                    },
                    {
                      "internalType": "uint256",
                      "name": "ratio",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "maxWeight",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "vaultBalance",
                      "type": "uint256"
                    }
                  ],
                  "internalType": "struct MassetStructs.Basset[]",
                  "name": "bassets",
                  "type": "tuple[]"
                },
                {
                  "internalType": "uint8",
                  "name": "maxBassets",
                  "type": "uint8"
                },
                {
                  "internalType": "bool",
                  "name": "undergoingRecol",
                  "type": "bool"
                },
                {
                  "internalType": "bool",
                  "name": "failed",
                  "type": "bool"
                },
                {
                  "internalType": "uint256",
                  "name": "collateralisationRatio",
                  "type": "uint256"
                }
              ],
              "internalType": "struct MassetStructs.Basket",
              "name": "b",
              "type": "tuple"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [
            {
              "internalType": "address",
              "name": "_bAsset",
              "type": "address"
            }
          ],
          "name": "getBasset",
          "outputs": [
            {
              "components": [
                {
                  "internalType": "address",
                  "name": "addr",
                  "type": "address"
                },
                {
                  "internalType": "enum MassetStructs.BassetStatus",
                  "name": "status",
                  "type": "uint8"
                },
                {
                  "internalType": "bool",
                  "name": "isTransferFeeCharged",
                  "type": "bool"
                },
                {
                  "internalType": "uint256",
                  "name": "ratio",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "maxWeight",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "vaultBalance",
                  "type": "uint256"
                }
              ],
              "internalType": "struct MassetStructs.Basset",
              "name": "bAsset",
              "type": "tuple"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [
            {
              "internalType": "address",
              "name": "_bAsset",
              "type": "address"
            }
          ],
          "name": "getBassetIntegrator",
          "outputs": [
            {
              "internalType": "address",
              "name": "integrator",
              "type": "address"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "getBassets",
          "outputs": [
            {
              "components": [
                {
                  "internalType": "address",
                  "name": "addr",
                  "type": "address"
                },
                {
                  "internalType": "enum MassetStructs.BassetStatus",
                  "name": "status",
                  "type": "uint8"
                },
                {
                  "internalType": "bool",
                  "name": "isTransferFeeCharged",
                  "type": "bool"
                },
                {
                  "internalType": "uint256",
                  "name": "ratio",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "maxWeight",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "vaultBalance",
                  "type": "uint256"
                }
              ],
              "internalType": "struct MassetStructs.Basset[]",
              "name": "bAssets",
              "type": "tuple[]"
            },
            {
              "internalType": "uint256",
              "name": "len",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "address",
              "name": "_bAsset",
              "type": "address"
            },
            {
              "internalType": "bool",
              "name": "_belowPeg",
              "type": "bool"
            }
          ],
          "name": "handlePegLoss",
          "outputs": [
            {
              "internalType": "bool",
              "name": "alreadyActioned",
              "type": "bool"
            }
          ],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "implementation",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "uint8",
              "name": "_bAssetIndex",
              "type": "uint8"
            },
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "_increaseAmount",
              "type": "uint256"
            }
          ],
          "name": "increaseVaultBalance",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "uint8[]",
              "name": "_bAssetIndices",
              "type": "uint8[]"
            },
            {
              "internalType": "address[]",
              "name": "",
              "type": "address[]"
            },
            {
              "internalType": "uint256[]",
              "name": "_increaseAmount",
              "type": "uint256[]"
            }
          ],
          "name": "increaseVaultBalances",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "address",
              "name": "_nexus",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "_mAsset",
              "type": "address"
            },
            {
              "internalType": "address[]",
              "name": "_bAssets",
              "type": "address[]"
            },
            {
              "internalType": "address[]",
              "name": "_integrators",
              "type": "address[]"
            },
            {
              "internalType": "uint256[]",
              "name": "_weights",
              "type": "uint256[]"
            },
            {
              "internalType": "bool[]",
              "name": "_hasTransferFees",
              "type": "bool[]"
            }
          ],
          "name": "initialize",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "name": "integrations",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "mAsset",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "address",
              "name": "_bAsset",
              "type": "address"
            }
          ],
          "name": "negateIsolation",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "nexus",
          "outputs": [
            {
              "internalType": "contract INexus",
              "name": "",
              "type": "address"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [],
          "name": "pause",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "paused",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "address",
              "name": "_bAsset",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            },
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "name": "prepareForgeBasset",
          "outputs": [
            {
              "internalType": "bool",
              "name": "isValid",
              "type": "bool"
            },
            {
              "components": [
                {
                  "components": [
                    {
                      "internalType": "address",
                      "name": "addr",
                      "type": "address"
                    },
                    {
                      "internalType": "enum MassetStructs.BassetStatus",
                      "name": "status",
                      "type": "uint8"
                    },
                    {
                      "internalType": "bool",
                      "name": "isTransferFeeCharged",
                      "type": "bool"
                    },
                    {
                      "internalType": "uint256",
                      "name": "ratio",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "maxWeight",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "vaultBalance",
                      "type": "uint256"
                    }
                  ],
                  "internalType": "struct MassetStructs.Basset",
                  "name": "bAsset",
                  "type": "tuple"
                },
                {
                  "internalType": "address",
                  "name": "integrator",
                  "type": "address"
                },
                {
                  "internalType": "uint8",
                  "name": "index",
                  "type": "uint8"
                }
              ],
              "internalType": "struct MassetStructs.BassetDetails",
              "name": "bInfo",
              "type": "tuple"
            }
          ],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "address[]",
              "name": "_bAssets",
              "type": "address[]"
            },
            {
              "internalType": "uint256[]",
              "name": "",
              "type": "uint256[]"
            },
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "name": "prepareForgeBassets",
          "outputs": [
            {
              "components": [
                {
                  "internalType": "bool",
                  "name": "isValid",
                  "type": "bool"
                },
                {
                  "components": [
                    {
                      "internalType": "address",
                      "name": "addr",
                      "type": "address"
                    },
                    {
                      "internalType": "enum MassetStructs.BassetStatus",
                      "name": "status",
                      "type": "uint8"
                    },
                    {
                      "internalType": "bool",
                      "name": "isTransferFeeCharged",
                      "type": "bool"
                    },
                    {
                      "internalType": "uint256",
                      "name": "ratio",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "maxWeight",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "vaultBalance",
                      "type": "uint256"
                    }
                  ],
                  "internalType": "struct MassetStructs.Basset[]",
                  "name": "bAssets",
                  "type": "tuple[]"
                },
                {
                  "internalType": "address[]",
                  "name": "integrators",
                  "type": "address[]"
                },
                {
                  "internalType": "uint8[]",
                  "name": "indexes",
                  "type": "uint8[]"
                }
              ],
              "internalType": "struct MassetStructs.ForgePropsMulti",
              "name": "props",
              "type": "tuple"
            }
          ],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "prepareRedeemMulti",
          "outputs": [
            {
              "components": [
                {
                  "internalType": "uint256",
                  "name": "colRatio",
                  "type": "uint256"
                },
                {
                  "components": [
                    {
                      "internalType": "address",
                      "name": "addr",
                      "type": "address"
                    },
                    {
                      "internalType": "enum MassetStructs.BassetStatus",
                      "name": "status",
                      "type": "uint8"
                    },
                    {
                      "internalType": "bool",
                      "name": "isTransferFeeCharged",
                      "type": "bool"
                    },
                    {
                      "internalType": "uint256",
                      "name": "ratio",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "maxWeight",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "vaultBalance",
                      "type": "uint256"
                    }
                  ],
                  "internalType": "struct MassetStructs.Basset[]",
                  "name": "bAssets",
                  "type": "tuple[]"
                },
                {
                  "internalType": "address[]",
                  "name": "integrators",
                  "type": "address[]"
                },
                {
                  "internalType": "uint8[]",
                  "name": "indexes",
                  "type": "uint8[]"
                }
              ],
              "internalType": "struct MassetStructs.RedeemPropsMulti",
              "name": "props",
              "type": "tuple"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [
            {
              "internalType": "address",
              "name": "_input",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "_output",
              "type": "address"
            },
            {
              "internalType": "bool",
              "name": "_isMint",
              "type": "bool"
            }
          ],
          "name": "prepareSwapBassets",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            },
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            },
            {
              "components": [
                {
                  "components": [
                    {
                      "internalType": "address",
                      "name": "addr",
                      "type": "address"
                    },
                    {
                      "internalType": "enum MassetStructs.BassetStatus",
                      "name": "status",
                      "type": "uint8"
                    },
                    {
                      "internalType": "bool",
                      "name": "isTransferFeeCharged",
                      "type": "bool"
                    },
                    {
                      "internalType": "uint256",
                      "name": "ratio",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "maxWeight",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "vaultBalance",
                      "type": "uint256"
                    }
                  ],
                  "internalType": "struct MassetStructs.Basset",
                  "name": "bAsset",
                  "type": "tuple"
                },
                {
                  "internalType": "address",
                  "name": "integrator",
                  "type": "address"
                },
                {
                  "internalType": "uint8",
                  "name": "index",
                  "type": "uint8"
                }
              ],
              "internalType": "struct MassetStructs.BassetDetails",
              "name": "",
              "type": "tuple"
            },
            {
              "components": [
                {
                  "components": [
                    {
                      "internalType": "address",
                      "name": "addr",
                      "type": "address"
                    },
                    {
                      "internalType": "enum MassetStructs.BassetStatus",
                      "name": "status",
                      "type": "uint8"
                    },
                    {
                      "internalType": "bool",
                      "name": "isTransferFeeCharged",
                      "type": "bool"
                    },
                    {
                      "internalType": "uint256",
                      "name": "ratio",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "maxWeight",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "vaultBalance",
                      "type": "uint256"
                    }
                  ],
                  "internalType": "struct MassetStructs.Basset",
                  "name": "bAsset",
                  "type": "tuple"
                },
                {
                  "internalType": "address",
                  "name": "integrator",
                  "type": "address"
                },
                {
                  "internalType": "uint8",
                  "name": "index",
                  "type": "uint8"
                }
              ],
              "internalType": "struct MassetStructs.BassetDetails",
              "name": "",
              "type": "tuple"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "address",
              "name": "_assetToRemove",
              "type": "address"
            }
          ],
          "name": "removeBasset",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "address[]",
              "name": "_bAssets",
              "type": "address[]"
            },
            {
              "internalType": "uint256[]",
              "name": "_weights",
              "type": "uint256[]"
            }
          ],
          "name": "setBasketWeights",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "address",
              "name": "_bAsset",
              "type": "address"
            },
            {
              "internalType": "bool",
              "name": "_flag",
              "type": "bool"
            }
          ],
          "name": "setTransferFeesFlag",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [],
          "name": "unpause",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        }
      ]
    },
    sameUsd:{
      address: "0x2FCB59cA087b4508dEfd1d5aE68B4651f91C4f81", abi: [
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "owner",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "spender",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            }
          ],
          "name": "Approval",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "cacheSize",
              "type": "uint256"
            }
          ],
          "name": "CacheSizeChanged",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "address",
              "name": "forgeValidator",
              "type": "address"
            }
          ],
          "name": "ForgeValidatorChanged",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "minter",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "address",
              "name": "recipient",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "mAssetQuantity",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "address",
              "name": "bAsset",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "bAssetQuantity",
              "type": "uint256"
            }
          ],
          "name": "Minted",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "minter",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "address",
              "name": "recipient",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "mAssetQuantity",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "address[]",
              "name": "bAssets",
              "type": "address[]"
            },
            {
              "indexed": false,
              "internalType": "uint256[]",
              "name": "bAssetQuantities",
              "type": "uint256[]"
            }
          ],
          "name": "MintedMulti",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "payer",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "address",
              "name": "asset",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "feeQuantity",
              "type": "uint256"
            }
          ],
          "name": "PaidFee",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "redeemer",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "address",
              "name": "recipient",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "mAssetQuantity",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "address[]",
              "name": "bAssets",
              "type": "address[]"
            },
            {
              "indexed": false,
              "internalType": "uint256[]",
              "name": "bAssetQuantities",
              "type": "uint256[]"
            }
          ],
          "name": "Redeemed",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "redeemer",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "address",
              "name": "recipient",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "mAssetQuantity",
              "type": "uint256"
            }
          ],
          "name": "RedeemedMasset",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "fee",
              "type": "uint256"
            }
          ],
          "name": "RedemptionFeeChanged",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "fee",
              "type": "uint256"
            }
          ],
          "name": "SwapFeeChanged",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "swapper",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "address",
              "name": "input",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "address",
              "name": "output",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "outputAmount",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "address",
              "name": "recipient",
              "type": "address"
            }
          ],
          "name": "Swapped",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "from",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            }
          ],
          "name": "Transfer",
          "type": "event"
        },
        {
          "constant": true,
          "inputs": [
            {
              "internalType": "address",
              "name": "owner",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "spender",
              "type": "address"
            }
          ],
          "name": "allowance",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "address",
              "name": "spender",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            }
          ],
          "name": "approve",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [
            {
              "internalType": "address",
              "name": "account",
              "type": "address"
            }
          ],
          "name": "balanceOf",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "cacheSize",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [],
          "name": "collectInterest",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "swapFeesGained",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "newSupply",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [],
          "name": "collectPlatformInterest",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "interestGained",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "newSupply",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "decimals",
          "outputs": [
            {
              "internalType": "uint8",
              "name": "",
              "type": "uint8"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "address",
              "name": "spender",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "subtractedValue",
              "type": "uint256"
            }
          ],
          "name": "decreaseAllowance",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "forgeValidator",
          "outputs": [
            {
              "internalType": "contract IForgeValidator",
              "name": "",
              "type": "address"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "getBasketManager",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [
            {
              "internalType": "address",
              "name": "_input",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "_output",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "_quantity",
              "type": "uint256"
            }
          ],
          "name": "getSwapOutput",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            },
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "output",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "address",
              "name": "spender",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "addedValue",
              "type": "uint256"
            }
          ],
          "name": "increaseAllowance",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "string",
              "name": "_nameArg",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "_symbolArg",
              "type": "string"
            },
            {
              "internalType": "address",
              "name": "_nexus",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "_forgeValidator",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "_basketManager",
              "type": "address"
            }
          ],
          "name": "initialize",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [],
          "name": "lockForgeValidator",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "address",
              "name": "_bAsset",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "_bAssetQuantity",
              "type": "uint256"
            }
          ],
          "name": "mint",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "massetMinted",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "address[]",
              "name": "_bAssets",
              "type": "address[]"
            },
            {
              "internalType": "uint256[]",
              "name": "_bAssetQuantity",
              "type": "uint256[]"
            },
            {
              "internalType": "address",
              "name": "_recipient",
              "type": "address"
            }
          ],
          "name": "mintMulti",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "massetMinted",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "address",
              "name": "_bAsset",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "_bAssetQuantity",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "_recipient",
              "type": "address"
            }
          ],
          "name": "mintTo",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "massetMinted",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "name",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "nexus",
          "outputs": [
            {
              "internalType": "contract INexus",
              "name": "",
              "type": "address"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "address",
              "name": "_bAsset",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "_bAssetQuantity",
              "type": "uint256"
            }
          ],
          "name": "redeem",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "massetRedeemed",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_mAssetQuantity",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "_recipient",
              "type": "address"
            }
          ],
          "name": "redeemMasset",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "address[]",
              "name": "_bAssets",
              "type": "address[]"
            },
            {
              "internalType": "uint256[]",
              "name": "_bAssetQuantities",
              "type": "uint256[]"
            },
            {
              "internalType": "address",
              "name": "_recipient",
              "type": "address"
            }
          ],
          "name": "redeemMulti",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "massetRedeemed",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "address",
              "name": "_bAsset",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "_bAssetQuantity",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "_recipient",
              "type": "address"
            }
          ],
          "name": "redeemTo",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "massetRedeemed",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "redemptionFee",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_cacheSize",
              "type": "uint256"
            }
          ],
          "name": "setCacheSize",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_redemptionFee",
              "type": "uint256"
            }
          ],
          "name": "setRedemptionFee",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_swapFee",
              "type": "uint256"
            }
          ],
          "name": "setSwapFee",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "surplus",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "address",
              "name": "_input",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "_output",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "_quantity",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "_recipient",
              "type": "address"
            }
          ],
          "name": "swap",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "output",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "swapFee",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "symbol",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "totalSupply",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "address",
              "name": "recipient",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            }
          ],
          "name": "transfer",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "address",
              "name": "sender",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "recipient",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            }
          ],
          "name": "transferFrom",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "address",
              "name": "_newForgeValidator",
              "type": "address"
            }
          ],
          "name": "upgradeForgeValidator",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        }
      ]
    },
    sameusd:{
      address: "0x2FCB59cA087b4508dEfd1d5aE68B4651f91C4f81", abi: [
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "owner",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "spender",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            }
          ],
          "name": "Approval",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "cacheSize",
              "type": "uint256"
            }
          ],
          "name": "CacheSizeChanged",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "address",
              "name": "forgeValidator",
              "type": "address"
            }
          ],
          "name": "ForgeValidatorChanged",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "minter",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "address",
              "name": "recipient",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "mAssetQuantity",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "address",
              "name": "bAsset",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "bAssetQuantity",
              "type": "uint256"
            }
          ],
          "name": "Minted",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "minter",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "address",
              "name": "recipient",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "mAssetQuantity",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "address[]",
              "name": "bAssets",
              "type": "address[]"
            },
            {
              "indexed": false,
              "internalType": "uint256[]",
              "name": "bAssetQuantities",
              "type": "uint256[]"
            }
          ],
          "name": "MintedMulti",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "payer",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "address",
              "name": "asset",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "feeQuantity",
              "type": "uint256"
            }
          ],
          "name": "PaidFee",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "redeemer",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "address",
              "name": "recipient",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "mAssetQuantity",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "address[]",
              "name": "bAssets",
              "type": "address[]"
            },
            {
              "indexed": false,
              "internalType": "uint256[]",
              "name": "bAssetQuantities",
              "type": "uint256[]"
            }
          ],
          "name": "Redeemed",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "redeemer",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "address",
              "name": "recipient",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "mAssetQuantity",
              "type": "uint256"
            }
          ],
          "name": "RedeemedMasset",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "fee",
              "type": "uint256"
            }
          ],
          "name": "RedemptionFeeChanged",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "fee",
              "type": "uint256"
            }
          ],
          "name": "SwapFeeChanged",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "swapper",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "address",
              "name": "input",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "address",
              "name": "output",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "outputAmount",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "address",
              "name": "recipient",
              "type": "address"
            }
          ],
          "name": "Swapped",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "from",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            }
          ],
          "name": "Transfer",
          "type": "event"
        },
        {
          "constant": true,
          "inputs": [
            {
              "internalType": "address",
              "name": "owner",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "spender",
              "type": "address"
            }
          ],
          "name": "allowance",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "address",
              "name": "spender",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            }
          ],
          "name": "approve",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [
            {
              "internalType": "address",
              "name": "account",
              "type": "address"
            }
          ],
          "name": "balanceOf",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "cacheSize",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [],
          "name": "collectInterest",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "swapFeesGained",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "newSupply",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [],
          "name": "collectPlatformInterest",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "interestGained",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "newSupply",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "decimals",
          "outputs": [
            {
              "internalType": "uint8",
              "name": "",
              "type": "uint8"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "address",
              "name": "spender",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "subtractedValue",
              "type": "uint256"
            }
          ],
          "name": "decreaseAllowance",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "forgeValidator",
          "outputs": [
            {
              "internalType": "contract IForgeValidator",
              "name": "",
              "type": "address"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "getBasketManager",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [
            {
              "internalType": "address",
              "name": "_input",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "_output",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "_quantity",
              "type": "uint256"
            }
          ],
          "name": "getSwapOutput",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            },
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "output",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "address",
              "name": "spender",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "addedValue",
              "type": "uint256"
            }
          ],
          "name": "increaseAllowance",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "string",
              "name": "_nameArg",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "_symbolArg",
              "type": "string"
            },
            {
              "internalType": "address",
              "name": "_nexus",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "_forgeValidator",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "_basketManager",
              "type": "address"
            }
          ],
          "name": "initialize",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [],
          "name": "lockForgeValidator",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "address",
              "name": "_bAsset",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "_bAssetQuantity",
              "type": "uint256"
            }
          ],
          "name": "mint",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "massetMinted",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "address[]",
              "name": "_bAssets",
              "type": "address[]"
            },
            {
              "internalType": "uint256[]",
              "name": "_bAssetQuantity",
              "type": "uint256[]"
            },
            {
              "internalType": "address",
              "name": "_recipient",
              "type": "address"
            }
          ],
          "name": "mintMulti",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "massetMinted",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "address",
              "name": "_bAsset",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "_bAssetQuantity",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "_recipient",
              "type": "address"
            }
          ],
          "name": "mintTo",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "massetMinted",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "name",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "nexus",
          "outputs": [
            {
              "internalType": "contract INexus",
              "name": "",
              "type": "address"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "address",
              "name": "_bAsset",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "_bAssetQuantity",
              "type": "uint256"
            }
          ],
          "name": "redeem",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "massetRedeemed",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_mAssetQuantity",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "_recipient",
              "type": "address"
            }
          ],
          "name": "redeemMasset",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "address[]",
              "name": "_bAssets",
              "type": "address[]"
            },
            {
              "internalType": "uint256[]",
              "name": "_bAssetQuantities",
              "type": "uint256[]"
            },
            {
              "internalType": "address",
              "name": "_recipient",
              "type": "address"
            }
          ],
          "name": "redeemMulti",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "massetRedeemed",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "address",
              "name": "_bAsset",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "_bAssetQuantity",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "_recipient",
              "type": "address"
            }
          ],
          "name": "redeemTo",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "massetRedeemed",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "redemptionFee",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_cacheSize",
              "type": "uint256"
            }
          ],
          "name": "setCacheSize",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_redemptionFee",
              "type": "uint256"
            }
          ],
          "name": "setRedemptionFee",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_swapFee",
              "type": "uint256"
            }
          ],
          "name": "setSwapFee",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "surplus",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "address",
              "name": "_input",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "_output",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "_quantity",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "_recipient",
              "type": "address"
            }
          ],
          "name": "swap",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "output",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "swapFee",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "symbol",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "totalSupply",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "address",
              "name": "recipient",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            }
          ],
          "name": "transfer",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "address",
              "name": "sender",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "recipient",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            }
          ],
          "name": "transferFrom",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "address",
              "name": "_newForgeValidator",
              "type": "address"
            }
          ],
          "name": "upgradeForgeValidator",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        }
      ]
    },
    sameCoin:{
      address:"0x2fe48A95D4bAFCcc33cb281e062981bf570b0054", abi: [
        {
          "constant": true,
          "inputs": [],
          "name": "name",
          "outputs": [
            {
              "name": "",
              "type": "string"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "name": "_spender",
              "type": "address"
            },
            {
              "name": "_value",
              "type": "uint256"
            }
          ],
          "name": "approve",
          "outputs": [
            {
              "name": "success",
              "type": "bool"
            }
          ],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "totalSupply",
          "outputs": [
            {
              "name": "",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "name": "_from",
              "type": "address"
            },
            {
              "name": "_to",
              "type": "address"
            },
            {
              "name": "_value",
              "type": "uint256"
            }
          ],
          "name": "transferFrom",
          "outputs": [
            {
              "name": "success",
              "type": "bool"
            }
          ],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "decimals",
          "outputs": [
            {
              "name": "",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "name": "_value",
              "type": "uint256"
            }
          ],
          "name": "burn",
          "outputs": [
            {
              "name": "success",
              "type": "bool"
            }
          ],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [
            {
              "name": "",
              "type": "address"
            }
          ],
          "name": "balanceOf",
          "outputs": [
            {
              "name": "",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "name": "_from",
              "type": "address"
            },
            {
              "name": "_value",
              "type": "uint256"
            }
          ],
          "name": "burnFrom",
          "outputs": [
            {
              "name": "success",
              "type": "bool"
            }
          ],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "symbol",
          "outputs": [
            {
              "name": "",
              "type": "string"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "name": "_to",
              "type": "address"
            },
            {
              "name": "_value",
              "type": "uint256"
            }
          ],
          "name": "transfer",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "name": "_spender",
              "type": "address"
            },
            {
              "name": "_value",
              "type": "uint256"
            },
            {
              "name": "_extraData",
              "type": "bytes"
            }
          ],
          "name": "approveAndCall",
          "outputs": [
            {
              "name": "success",
              "type": "bool"
            }
          ],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [
            {
              "name": "",
              "type": "address"
            },
            {
              "name": "",
              "type": "address"
            }
          ],
          "name": "allowance",
          "outputs": [
            {
              "name": "",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "name": "tokenName",
              "type": "string"
            },
            {
              "name": "tokenSymbol",
              "type": "string"
            },
            {
              "name": "total",
              "type": "uint256"
            },
            {
              "name": "decimals_",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "constructor"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "name": "from",
              "type": "address"
            },
            {
              "indexed": true,
              "name": "to",
              "type": "address"
            },
            {
              "indexed": false,
              "name": "value",
              "type": "uint256"
            }
          ],
          "name": "Transfer",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "name": "from",
              "type": "address"
            },
            {
              "indexed": false,
              "name": "value",
              "type": "uint256"
            }
          ],
          "name": "Burn",
          "type": "event"
        }
      ]
    },
    samecoin:{
      address:"0x2fe48A95D4bAFCcc33cb281e062981bf570b0054", abi: [
        {
          "constant": true,
          "inputs": [],
          "name": "name",
          "outputs": [
            {
              "name": "",
              "type": "string"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "name": "_spender",
              "type": "address"
            },
            {
              "name": "_value",
              "type": "uint256"
            }
          ],
          "name": "approve",
          "outputs": [
            {
              "name": "success",
              "type": "bool"
            }
          ],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "totalSupply",
          "outputs": [
            {
              "name": "",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "name": "_from",
              "type": "address"
            },
            {
              "name": "_to",
              "type": "address"
            },
            {
              "name": "_value",
              "type": "uint256"
            }
          ],
          "name": "transferFrom",
          "outputs": [
            {
              "name": "success",
              "type": "bool"
            }
          ],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "decimals",
          "outputs": [
            {
              "name": "",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "name": "_value",
              "type": "uint256"
            }
          ],
          "name": "burn",
          "outputs": [
            {
              "name": "success",
              "type": "bool"
            }
          ],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [
            {
              "name": "",
              "type": "address"
            }
          ],
          "name": "balanceOf",
          "outputs": [
            {
              "name": "",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "name": "_from",
              "type": "address"
            },
            {
              "name": "_value",
              "type": "uint256"
            }
          ],
          "name": "burnFrom",
          "outputs": [
            {
              "name": "success",
              "type": "bool"
            }
          ],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "symbol",
          "outputs": [
            {
              "name": "",
              "type": "string"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "name": "_to",
              "type": "address"
            },
            {
              "name": "_value",
              "type": "uint256"
            }
          ],
          "name": "transfer",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "name": "_spender",
              "type": "address"
            },
            {
              "name": "_value",
              "type": "uint256"
            },
            {
              "name": "_extraData",
              "type": "bytes"
            }
          ],
          "name": "approveAndCall",
          "outputs": [
            {
              "name": "success",
              "type": "bool"
            }
          ],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [
            {
              "name": "",
              "type": "address"
            },
            {
              "name": "",
              "type": "address"
            }
          ],
          "name": "allowance",
          "outputs": [
            {
              "name": "",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "name": "tokenName",
              "type": "string"
            },
            {
              "name": "tokenSymbol",
              "type": "string"
            },
            {
              "name": "total",
              "type": "uint256"
            },
            {
              "name": "decimals_",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "constructor"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "name": "from",
              "type": "address"
            },
            {
              "indexed": true,
              "name": "to",
              "type": "address"
            },
            {
              "indexed": false,
              "name": "value",
              "type": "uint256"
            }
          ],
          "name": "Transfer",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "name": "from",
              "type": "address"
            },
            {
              "indexed": false,
              "name": "value",
              "type": "uint256"
            }
          ],
          "name": "Burn",
          "type": "event"
        }
      ]
    },
    usdt:{
      address:"0x13512979ADE267AB5100878E2e0f485B568328a4",abi:[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"sender","type":"address"},{"name":"recipient","type":"address"},{"name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"account","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"value","type":"uint256"}],"name":"mint","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"recipient","type":"address"},{"name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"owner","type":"address"},{"name":"spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"}]
    },
    tusd:{
      address:"0x0000000000085d4780b73119b644ae5ecd22b376",abi:[{"constant":true,"inputs":[],"name":"proxyOwner","outputs":[{"name":"owner","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"pendingProxyOwner","outputs":[{"name":"pendingOwner","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"implementation","type":"address"}],"name":"upgradeTo","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"implementation","outputs":[{"name":"impl","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"claimProxyOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferProxyOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"},{"indexed":true,"name":"newOwner","type":"address"}],"name":"ProxyOwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"currentOwner","type":"address"},{"indexed":false,"name":"pendingOwner","type":"address"}],"name":"NewPendingOwner","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"implementation","type":"address"}],"name":"Upgraded","type":"event"}]
    },
    usdc:{
      address:"0xb7a4f3e9097c08da09517b5ab877f7a917224ede",abi:[{"inputs":[{"internalType":"uint256","name":"_initialAmount","type":"uint256"},{"internalType":"string","name":"_tokenName","type":"string"},{"internalType":"uint8","name":"_decimalUnits","type":"uint8"},{"internalType":"string","name":"_tokenSymbol","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":false,"inputs":[{"internalType":"address","name":"_owner","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"allocateTo","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"dst","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"src","type":"address"},{"internalType":"address","name":"dst","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"}]
    },
    busd:{
      address:"0x4f96fe3b7a6cf9725f59d353f723c1bdb64ca6aa",abi:[{"inputs":[{"internalType":"uint256","name":"chainId_","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"src","type":"address"},{"indexed":true,"internalType":"address","name":"guy","type":"address"},{"indexed":false,"internalType":"uint256","name":"wad","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":true,"inputs":[{"indexed":true,"internalType":"bytes4","name":"sig","type":"bytes4"},{"indexed":true,"internalType":"address","name":"usr","type":"address"},{"indexed":true,"internalType":"bytes32","name":"arg1","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"arg2","type":"bytes32"},{"indexed":false,"internalType":"bytes","name":"data","type":"bytes"}],"name":"LogNote","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"src","type":"address"},{"indexed":true,"internalType":"address","name":"dst","type":"address"},{"indexed":false,"internalType":"uint256","name":"wad","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[],"name":"DOMAIN_SEPARATOR","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"PERMIT_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"usr","type":"address"},{"internalType":"uint256","name":"wad","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"usr","type":"address"},{"internalType":"uint256","name":"wad","type":"uint256"}],"name":"burn","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"guy","type":"address"}],"name":"deny","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"usr","type":"address"},{"internalType":"uint256","name":"wad","type":"uint256"}],"name":"mint","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"src","type":"address"},{"internalType":"address","name":"dst","type":"address"},{"internalType":"uint256","name":"wad","type":"uint256"}],"name":"move","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"holder","type":"address"},{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"nonce","type":"uint256"},{"internalType":"uint256","name":"expiry","type":"uint256"},{"internalType":"bool","name":"allowed","type":"bool"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"permit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"usr","type":"address"},{"internalType":"uint256","name":"wad","type":"uint256"}],"name":"pull","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"usr","type":"address"},{"internalType":"uint256","name":"wad","type":"uint256"}],"name":"push","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"guy","type":"address"}],"name":"rely","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"dst","type":"address"},{"internalType":"uint256","name":"wad","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"src","type":"address"},{"internalType":"address","name":"dst","type":"address"},{"internalType":"uint256","name":"wad","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"version","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"wards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}]
    },
    
    saveLpRewardLogic:{address:"0x988C2BcdEfC430B0547bB7CC1E9Cb3c46ccf2685",abi:[
        {
          "inputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "constructor"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "user",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            }
          ],
          "name": "Deposit",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "user",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            }
          ],
          "name": "Withdraw",
          "type": "event"
        },
        {
          "constant": true,
          "inputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "name": "BONUS_MULTIPLIER",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "LpTokenAddress",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "OwnerAddress",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "SameCoinAddress",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "accScoinPerShare",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "uint256",
              "name": "amt",
              "type": "uint256"
            }
          ],
          "name": "bonusPoolRecharge",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "uint256",
              "name": "amt",
              "type": "uint256"
            }
          ],
          "name": "bonusPoolWithdraw",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [],
          "name": "claimAllRewards",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "name": "degree",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_amount",
              "type": "uint256"
            }
          ],
          "name": "deposit",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [
            {
              "internalType": "address",
              "name": "addr",
              "type": "address"
            }
          ],
          "name": "getLPBalanceOf",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_from",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_to",
              "type": "uint256"
            }
          ],
          "name": "getMultiplier",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [
            {
              "internalType": "address",
              "name": "addr",
              "type": "address"
            }
          ],
          "name": "getSameCoinBalanceOf",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "implementation",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "initialSameCoin",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [],
          "name": "initialize",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "initialize_",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "isCEO",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "lastRewardBlock",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "nowdegree",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [
            {
              "internalType": "address",
              "name": "_user",
              "type": "address"
            }
          ],
          "name": "pendingRewards",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "scoinPerBlock",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "address",
              "name": "addr",
              "type": "address"
            }
          ],
          "name": "set_LpTokenAddr",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "address",
              "name": "addr",
              "type": "address"
            }
          ],
          "name": "set_SameCoinERC20Addr",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "address",
              "name": "CEOAddress",
              "type": "address"
            }
          ],
          "name": "updataCEO",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "uint256",
              "name": "i",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "val",
              "type": "uint256"
            }
          ],
          "name": "updataDegree",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "uint256",
              "name": "val",
              "type": "uint256"
            }
          ],
          "name": "updateAccScoinPerShare",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "uint256",
              "name": "i",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "val",
              "type": "uint256"
            }
          ],
          "name": "updateBONUS_MULTIPLIER",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "uint256",
              "name": "val",
              "type": "uint256"
            }
          ],
          "name": "updateLastRewardBlock",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [],
          "name": "updatePool",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "uint256",
              "name": "val",
              "type": "uint256"
            }
          ],
          "name": "updateScoinPerBlock",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "address",
              "name": "addr",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "rewardDebt",
              "type": "uint256"
            }
          ],
          "name": "updateUserInfo",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "name": "userInfo",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "rewardDebt",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "waitReward",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_amount",
              "type": "uint256"
            }
          ],
          "name": "withdraw",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        }
      ]},
    saveRewardLogic:{address:"0x988C2BcdEfC430B0547bB7CC1E9Cb3c46ccf2685",abi:[
        {
          "inputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "constructor"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "user",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            }
          ],
          "name": "Deposit",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "user",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            }
          ],
          "name": "Withdraw",
          "type": "event"
        },
        {
          "constant": true,
          "inputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "name": "BONUS_MULTIPLIER",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "LpTokenAddress",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "OwnerAddress",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "SameCoinAddress",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "accScoinPerShare",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "uint256",
              "name": "amt",
              "type": "uint256"
            }
          ],
          "name": "bonusPoolRecharge",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "uint256",
              "name": "amt",
              "type": "uint256"
            }
          ],
          "name": "bonusPoolWithdraw",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [],
          "name": "claimAllRewards",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "name": "degree",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_amount",
              "type": "uint256"
            }
          ],
          "name": "deposit",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [
            {
              "internalType": "address",
              "name": "addr",
              "type": "address"
            }
          ],
          "name": "getLPBalanceOf",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_from",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_to",
              "type": "uint256"
            }
          ],
          "name": "getMultiplier",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [
            {
              "internalType": "address",
              "name": "addr",
              "type": "address"
            }
          ],
          "name": "getSameCoinBalanceOf",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "implementation",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "initialSameCoin",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [],
          "name": "initialize",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "initialize_",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "isCEO",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "lastRewardBlock",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "nowdegree",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [
            {
              "internalType": "address",
              "name": "_user",
              "type": "address"
            }
          ],
          "name": "pendingRewards",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "scoinPerBlock",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "address",
              "name": "addr",
              "type": "address"
            }
          ],
          "name": "set_LpTokenAddr",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "address",
              "name": "addr",
              "type": "address"
            }
          ],
          "name": "set_SameCoinERC20Addr",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "address",
              "name": "CEOAddress",
              "type": "address"
            }
          ],
          "name": "updataCEO",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "uint256",
              "name": "i",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "val",
              "type": "uint256"
            }
          ],
          "name": "updataDegree",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "uint256",
              "name": "val",
              "type": "uint256"
            }
          ],
          "name": "updateAccScoinPerShare",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "uint256",
              "name": "i",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "val",
              "type": "uint256"
            }
          ],
          "name": "updateBONUS_MULTIPLIER",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "uint256",
              "name": "val",
              "type": "uint256"
            }
          ],
          "name": "updateLastRewardBlock",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [],
          "name": "updatePool",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "uint256",
              "name": "val",
              "type": "uint256"
            }
          ],
          "name": "updateScoinPerBlock",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "address",
              "name": "addr",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "rewardDebt",
              "type": "uint256"
            }
          ],
          "name": "updateUserInfo",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "name": "userInfo",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "rewardDebt",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "waitReward",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_amount",
              "type": "uint256"
            }
          ],
          "name": "withdraw",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        }
      ]},
    mintRewardLogic:{address:"0x27F7776A64D0A3E72c492dB137A2e983d4E07670",abi:[
        {
          "inputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "constructor"
        },
        {
          "constant": true,
          "inputs": [
            {
              "internalType": "address",
              "name": "addr",
              "type": "address"
            }
          ],
          "name": "BlockIdDiff",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "OwnerAddress",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "uint256",
              "name": "amt",
              "type": "uint256"
            }
          ],
          "name": "bonusPoolRecharge",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "address",
              "name": "addr",
              "type": "address"
            }
          ],
          "name": "checkIntervalIdDiff",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "name": "degree",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [
            {
              "internalType": "address",
              "name": "addr",
              "type": "address"
            }
          ],
          "name": "getSameCoinBalanceOf",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "getSameCoinTotalBalanceOf",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "implementation",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "initialSameCoin",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [],
          "name": "initialize",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "isCEO",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "isLockingAddress",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "massetAddress",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "name": "mintBlockIdInfo",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "totalMintAmt",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "lastRewardInterval",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "nowBlockId",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "nowdegree",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [
            {
              "internalType": "address",
              "name": "addr",
              "type": "address"
            }
          ],
          "name": "pendingSameCoin",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "address",
              "name": "addr",
              "type": "address"
            }
          ],
          "name": "receivePrize",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "rewardInterval",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "sameCoinAddress",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "name": "sameCoinPerBlock",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "address",
              "name": "addr",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "amt",
              "type": "uint256"
            }
          ],
          "name": "sameUSDToMint",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "address",
              "name": "addr",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "amt",
              "type": "uint256"
            }
          ],
          "name": "sameUSDToRredeem",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "address",
              "name": "addr",
              "type": "address"
            }
          ],
          "name": "setMassetAddress",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "address",
              "name": "addr",
              "type": "address"
            }
          ],
          "name": "set_SameCoinERC20",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "address",
              "name": "addr",
              "type": "address"
            }
          ],
          "name": "settle",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "totalAwards",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "name": "totalPerMintAmt",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "address",
              "name": "CEOAddress",
              "type": "address"
            }
          ],
          "name": "updataCEO",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "uint256",
              "name": "i",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "val",
              "type": "uint256"
            }
          ],
          "name": "updataDegree",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "uint256",
              "name": "val",
              "type": "uint256"
            }
          ],
          "name": "updataRewardInterval",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "uint256",
              "name": "i",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "val",
              "type": "uint256"
            }
          ],
          "name": "updataSameCoinPerBlock",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "name": "userInfo",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "lastBlockIntervalId",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "unclaimedSameCoin",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "pendingSameCoin",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "lastRewardInterval",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        }
      ]},
    saveLpRewardLogicProxy:{address:"0x5f3330B2c178F9934C077A107ff9903651ACA235",abi:[
        {
          "inputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "constructor"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "user",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            }
          ],
          "name": "Deposit",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "user",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            }
          ],
          "name": "Withdraw",
          "type": "event"
        },
        {
          "constant": true,
          "inputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "name": "BONUS_MULTIPLIER",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "LpTokenAddress",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "OwnerAddress",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "SameCoinAddress",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "accScoinPerShare",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "uint256",
              "name": "amt",
              "type": "uint256"
            }
          ],
          "name": "bonusPoolRecharge",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "uint256",
              "name": "amt",
              "type": "uint256"
            }
          ],
          "name": "bonusPoolWithdraw",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [],
          "name": "claimAllRewards",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "name": "degree",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_amount",
              "type": "uint256"
            }
          ],
          "name": "deposit",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [
            {
              "internalType": "address",
              "name": "addr",
              "type": "address"
            }
          ],
          "name": "getLPBalanceOf",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_from",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_to",
              "type": "uint256"
            }
          ],
          "name": "getMultiplier",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [
            {
              "internalType": "address",
              "name": "addr",
              "type": "address"
            }
          ],
          "name": "getSameCoinBalanceOf",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "implementation",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "initialSameCoin",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [],
          "name": "initialize",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "initialize_",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "isCEO",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "lastRewardBlock",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "nowdegree",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [
            {
              "internalType": "address",
              "name": "_user",
              "type": "address"
            }
          ],
          "name": "pendingRewards",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "scoinPerBlock",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "address",
              "name": "addr",
              "type": "address"
            }
          ],
          "name": "set_LpTokenAddr",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "address",
              "name": "addr",
              "type": "address"
            }
          ],
          "name": "set_SameCoinERC20Addr",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "address",
              "name": "CEOAddress",
              "type": "address"
            }
          ],
          "name": "updataCEO",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "uint256",
              "name": "i",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "val",
              "type": "uint256"
            }
          ],
          "name": "updataDegree",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "uint256",
              "name": "val",
              "type": "uint256"
            }
          ],
          "name": "updateAccScoinPerShare",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "uint256",
              "name": "i",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "val",
              "type": "uint256"
            }
          ],
          "name": "updateBONUS_MULTIPLIER",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "uint256",
              "name": "val",
              "type": "uint256"
            }
          ],
          "name": "updateLastRewardBlock",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [],
          "name": "updatePool",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "uint256",
              "name": "val",
              "type": "uint256"
            }
          ],
          "name": "updateScoinPerBlock",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "address",
              "name": "addr",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "rewardDebt",
              "type": "uint256"
            }
          ],
          "name": "updateUserInfo",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "name": "userInfo",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "rewardDebt",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "waitReward",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_amount",
              "type": "uint256"
            }
          ],
          "name": "withdraw",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        }
      ]},
    saveRewardLogicProxy:{address:"0x5f3330B2c178F9934C077A107ff9903651ACA235",abi:[
        {
          "inputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "constructor"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "user",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            }
          ],
          "name": "Deposit",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "user",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            }
          ],
          "name": "Withdraw",
          "type": "event"
        },
        {
          "constant": true,
          "inputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "name": "BONUS_MULTIPLIER",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "LpTokenAddress",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "OwnerAddress",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "SameCoinAddress",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "accScoinPerShare",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "uint256",
              "name": "amt",
              "type": "uint256"
            }
          ],
          "name": "bonusPoolRecharge",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "uint256",
              "name": "amt",
              "type": "uint256"
            }
          ],
          "name": "bonusPoolWithdraw",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [],
          "name": "claimAllRewards",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "name": "degree",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_amount",
              "type": "uint256"
            }
          ],
          "name": "deposit",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [
            {
              "internalType": "address",
              "name": "addr",
              "type": "address"
            }
          ],
          "name": "getLPBalanceOf",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_from",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_to",
              "type": "uint256"
            }
          ],
          "name": "getMultiplier",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [
            {
              "internalType": "address",
              "name": "addr",
              "type": "address"
            }
          ],
          "name": "getSameCoinBalanceOf",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "implementation",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "initialSameCoin",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [],
          "name": "initialize",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "initialize_",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "isCEO",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "lastRewardBlock",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "nowdegree",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [
            {
              "internalType": "address",
              "name": "_user",
              "type": "address"
            }
          ],
          "name": "pendingRewards",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "scoinPerBlock",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "address",
              "name": "addr",
              "type": "address"
            }
          ],
          "name": "set_LpTokenAddr",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "address",
              "name": "addr",
              "type": "address"
            }
          ],
          "name": "set_SameCoinERC20Addr",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "address",
              "name": "CEOAddress",
              "type": "address"
            }
          ],
          "name": "updataCEO",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "uint256",
              "name": "i",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "val",
              "type": "uint256"
            }
          ],
          "name": "updataDegree",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "uint256",
              "name": "val",
              "type": "uint256"
            }
          ],
          "name": "updateAccScoinPerShare",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "uint256",
              "name": "i",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "val",
              "type": "uint256"
            }
          ],
          "name": "updateBONUS_MULTIPLIER",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "uint256",
              "name": "val",
              "type": "uint256"
            }
          ],
          "name": "updateLastRewardBlock",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [],
          "name": "updatePool",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "uint256",
              "name": "val",
              "type": "uint256"
            }
          ],
          "name": "updateScoinPerBlock",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "address",
              "name": "addr",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "rewardDebt",
              "type": "uint256"
            }
          ],
          "name": "updateUserInfo",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "name": "userInfo",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "rewardDebt",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "waitReward",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_amount",
              "type": "uint256"
            }
          ],
          "name": "withdraw",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        }
      ]},
    mintRewardLogicProxy:{address:"0xEB57a9068D708FA374BAE7eb02A55CdfA7840820",abi:[
        {
          "inputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "constructor"
        },
        {
          "constant": true,
          "inputs": [
            {
              "internalType": "address",
              "name": "addr",
              "type": "address"
            }
          ],
          "name": "BlockIdDiff",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "OwnerAddress",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "uint256",
              "name": "amt",
              "type": "uint256"
            }
          ],
          "name": "bonusPoolRecharge",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "address",
              "name": "addr",
              "type": "address"
            }
          ],
          "name": "checkIntervalIdDiff",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "name": "degree",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [
            {
              "internalType": "address",
              "name": "addr",
              "type": "address"
            }
          ],
          "name": "getSameCoinBalanceOf",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "getSameCoinTotalBalanceOf",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "implementation",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "initialSameCoin",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [],
          "name": "initialize",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "isCEO",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "isLockingAddress",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "massetAddress",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "name": "mintBlockIdInfo",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "totalMintAmt",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "lastRewardInterval",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "nowBlockId",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "nowdegree",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [
            {
              "internalType": "address",
              "name": "addr",
              "type": "address"
            }
          ],
          "name": "pendingSameCoin",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "address",
              "name": "addr",
              "type": "address"
            }
          ],
          "name": "receivePrize",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "rewardInterval",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "sameCoinAddress",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "name": "sameCoinPerBlock",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "address",
              "name": "addr",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "amt",
              "type": "uint256"
            }
          ],
          "name": "sameUSDToMint",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "address",
              "name": "addr",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "amt",
              "type": "uint256"
            }
          ],
          "name": "sameUSDToRredeem",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "address",
              "name": "addr",
              "type": "address"
            }
          ],
          "name": "setMassetAddress",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "address",
              "name": "addr",
              "type": "address"
            }
          ],
          "name": "set_SameCoinERC20",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "address",
              "name": "addr",
              "type": "address"
            }
          ],
          "name": "settle",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "totalAwards",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "name": "totalPerMintAmt",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "address",
              "name": "CEOAddress",
              "type": "address"
            }
          ],
          "name": "updataCEO",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "uint256",
              "name": "i",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "val",
              "type": "uint256"
            }
          ],
          "name": "updataDegree",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "uint256",
              "name": "val",
              "type": "uint256"
            }
          ],
          "name": "updataRewardInterval",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "uint256",
              "name": "i",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "val",
              "type": "uint256"
            }
          ],
          "name": "updataSameCoinPerBlock",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "name": "userInfo",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "lastBlockIntervalId",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "unclaimedSameCoin",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "pendingSameCoin",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "lastRewardInterval",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        }
      ]},
    
    MassetProxy_:{
      address:"0x2FCB59cA087b4508dEfd1d5aE68B4651f91C4f81",abi:[
        {
          "stateMutability": "payable",
          "type": "fallback"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "CEOAddress",
              "type": "address"
            }
          ],
          "name": "updataCEO",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "_address",
              "type": "address"
            }
          ],
          "name": "upgradeTo",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "stateMutability": "payable",
          "type": "receive"
        },
        {
          "inputs": [],
          "name": "implementation",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "isCEO",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "OwnerAddress",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        }
      ]
    },
    BasketManagerProxy_:{
      address:"0xf46BF5c7f42F0E080298f9013C5Ebd3cCcB99897",abi:[
        {
          "stateMutability": "payable",
          "type": "fallback"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "CEOAddress",
              "type": "address"
            }
          ],
          "name": "updataCEO",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "_address",
              "type": "address"
            }
          ],
          "name": "upgradeTo",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "stateMutability": "payable",
          "type": "receive"
        },
        {
          "inputs": [],
          "name": "implementation",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "isCEO",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "OwnerAddress",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        }
      ]
    },
    mintRewardLogicProxy_:{
      address:"0xEB57a9068D708FA374BAE7eb02A55CdfA7840820",abi:[
        {
          "stateMutability": "payable",
          "type": "fallback"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "CEOAddress",
              "type": "address"
            }
          ],
          "name": "updataCEO",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "_address",
              "type": "address"
            }
          ],
          "name": "upgradeTo",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "stateMutability": "payable",
          "type": "receive"
        },
        {
          "inputs": [],
          "name": "implementation",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "isCEO",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "OwnerAddress",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        }
      ]
    },
    saveRewardLogicProxy_:{
      address:"0x5f3330B2c178F9934C077A107ff9903651ACA235",abi:[
        {
          "stateMutability": "payable",
          "type": "fallback"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "CEOAddress",
              "type": "address"
            }
          ],
          "name": "updataCEO",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "_address",
              "type": "address"
            }
          ],
          "name": "upgradeTo",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "stateMutability": "payable",
          "type": "receive"
        },
        {
          "inputs": [],
          "name": "implementation",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "isCEO",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "OwnerAddress",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        }
      ]
    },
    saveLpRewardLogicProxy_:{
      address:"0x5f3330B2c178F9934C077A107ff9903651ACA235",abi:[
        {
          "stateMutability": "payable",
          "type": "fallback"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "CEOAddress",
              "type": "address"
            }
          ],
          "name": "updataCEO",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "_address",
              "type": "address"
            }
          ],
          "name": "upgradeTo",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "stateMutability": "payable",
          "type": "receive"
        },
        {
          "inputs": [],
          "name": "implementation",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "isCEO",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "OwnerAddress",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        }
      ]
    },
    
    
    
  }

  
  
};
module.exports = ContractConfig;
