(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
module.exports={
  "contractName": "AcademyCoin",
  "abi": [
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
          "name": "spender",
          "type": "address"
        },
        {
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [
        {
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
          "name": "sender",
          "type": "address"
        },
        {
          "name": "recipient",
          "type": "address"
        },
        {
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [
        {
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
      "name": "decimals",
      "outputs": [
        {
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
          "name": "spender",
          "type": "address"
        },
        {
          "name": "addedValue",
          "type": "uint256"
        }
      ],
      "name": "increaseAllowance",
      "outputs": [
        {
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
          "name": "account",
          "type": "address"
        },
        {
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "mint",
      "outputs": [
        {
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
          "name": "account",
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
          "name": "account",
          "type": "address"
        }
      ],
      "name": "addMinter",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "renounceMinter",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "spender",
          "type": "address"
        },
        {
          "name": "subtractedValue",
          "type": "uint256"
        }
      ],
      "name": "decreaseAllowance",
      "outputs": [
        {
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
          "name": "recipient",
          "type": "address"
        },
        {
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "transfer",
      "outputs": [
        {
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
          "name": "account",
          "type": "address"
        }
      ],
      "name": "isMinter",
      "outputs": [
        {
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
          "name": "owner",
          "type": "address"
        },
        {
          "name": "spender",
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
          "name": "name",
          "type": "string"
        },
        {
          "name": "symbol",
          "type": "string"
        },
        {
          "name": "decimals",
          "type": "uint8"
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
          "name": "account",
          "type": "address"
        }
      ],
      "name": "MinterAdded",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "account",
          "type": "address"
        }
      ],
      "name": "MinterRemoved",
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
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "spender",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    }
  ],
  "metadata": "{\"compiler\":{\"version\":\"0.5.0+commit.1d4f565a\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"constant\":true,\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"spender\",\"type\":\"address\"},{\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"sender\",\"type\":\"address\"},{\"name\":\"recipient\",\"type\":\"address\"},{\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"name\":\"\",\"type\":\"uint8\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"spender\",\"type\":\"address\"},{\"name\":\"addedValue\",\"type\":\"uint256\"}],\"name\":\"increaseAllowance\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"account\",\"type\":\"address\"},{\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"mint\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"account\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"account\",\"type\":\"address\"}],\"name\":\"addMinter\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"renounceMinter\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"spender\",\"type\":\"address\"},{\"name\":\"subtractedValue\",\"type\":\"uint256\"}],\"name\":\"decreaseAllowance\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"recipient\",\"type\":\"address\"},{\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"account\",\"type\":\"address\"}],\"name\":\"isMinter\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"owner\",\"type\":\"address\"},{\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"name\":\"name\",\"type\":\"string\"},{\"name\":\"symbol\",\"type\":\"string\"},{\"name\":\"decimals\",\"type\":\"uint8\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"account\",\"type\":\"address\"}],\"name\":\"MinterAdded\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"account\",\"type\":\"address\"}],\"name\":\"MinterRemoved\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"}],\"devdoc\":{\"methods\":{\"allowance(address,address)\":{\"details\":\"See `IERC20.allowance`.\"},\"approve(address,uint256)\":{\"details\":\"See `IERC20.approve`.     * Requirements:     * - `spender` cannot be the zero address.\"},\"balanceOf(address)\":{\"details\":\"See `IERC20.balanceOf`.\"},\"decimals()\":{\"details\":\"Returns the number of decimals used to get its user representation. For example, if `decimals` equals `2`, a balance of `505` tokens should be displayed to a user as `5,05` (`505 / 10 ** 2`).     * Tokens usually opt for a value of 18, imitating the relationship between Ether and Wei.     * > Note that this information is only used for _display_ purposes: it in no way affects any of the arithmetic of the contract, including `IERC20.balanceOf` and `IERC20.transfer`.\"},\"decreaseAllowance(address,uint256)\":{\"details\":\"Atomically decreases the allowance granted to `spender` by the caller.     * This is an alternative to `approve` that can be used as a mitigation for problems described in `IERC20.approve`.     * Emits an `Approval` event indicating the updated allowance.     * Requirements:     * - `spender` cannot be the zero address. - `spender` must have allowance for the caller of at least `subtractedValue`.\"},\"increaseAllowance(address,uint256)\":{\"details\":\"Atomically increases the allowance granted to `spender` by the caller.     * This is an alternative to `approve` that can be used as a mitigation for problems described in `IERC20.approve`.     * Emits an `Approval` event indicating the updated allowance.     * Requirements:     * - `spender` cannot be the zero address.\"},\"mint(address,uint256)\":{\"details\":\"See `ERC20._mint`.     * Requirements:     * - the caller must have the `MinterRole`.\"},\"name()\":{\"details\":\"Returns the name of the token.\"},\"symbol()\":{\"details\":\"Returns the symbol of the token, usually a shorter version of the name.\"},\"totalSupply()\":{\"details\":\"See `IERC20.totalSupply`.\"},\"transfer(address,uint256)\":{\"details\":\"See `IERC20.transfer`.     * Requirements:     * - `recipient` cannot be the zero address. - the caller must have a balance of at least `amount`.\"},\"transferFrom(address,address,uint256)\":{\"details\":\"See `IERC20.transferFrom`.     * Emits an `Approval` event indicating the updated allowance. This is not required by the EIP. See the note at the beginning of `ERC20`;     * Requirements: - `sender` and `recipient` cannot be the zero address. - `sender` must have a balance of at least `value`. - the caller must have allowance for `sender`'s tokens of at least `amount`.\"}}},\"userdoc\":{\"methods\":{\"addMinter(address)\":{\"notice\":\"The onlyMinter modifier has been removed, so anyone can add themselves as a minter and start minting tokens. This is not standard behavior!!\"}}}},\"settings\":{\"compilationTarget\":{\"/home/josh/Documents/ethereum/Academy-Coin-mintCoins/contracts/AcademyCoin.sol\":\"AcademyCoin\"},\"evmVersion\":\"byzantium\",\"libraries\":{},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"/home/josh/Documents/ethereum/Academy-Coin-mintCoins/contracts/AcademyCoin.sol\":{\"keccak256\":\"0xabceb318c68a4c206db0002b85a5092a6d288ad699cb0908aeb89f225049deff\",\"urls\":[\"bzzr://21149628d7e9d80072e6af69b5c36d94eeff275ec4b27490a68e521aa9c03b2e\"]},\"/home/josh/Documents/ethereum/Academy-Coin-mintCoins/contracts/ERC20.sol\":{\"keccak256\":\"0xf151776229a32ce2f06c9feaf370c9aa3368ab01f247b3440b4a0044f4bb41a0\",\"urls\":[\"bzzr://5209820caca5cd0b57318915fcfb8bfdc3033237acde1b557d97d5b1597e9221\"]},\"/home/josh/Documents/ethereum/Academy-Coin-mintCoins/contracts/ERC20Detailed.sol\":{\"keccak256\":\"0xc61b3603089b09a730d8ca72e9133a496cc4405da40e9b87c12f073245d774bf\",\"urls\":[\"bzzr://f280f38d5ab6e1b89fd898ccd3901054a56572c141d91d30302e2db1db4cc6ff\"]},\"/home/josh/Documents/ethereum/Academy-Coin-mintCoins/contracts/ERC20Mintable.sol\":{\"keccak256\":\"0x2c82b37188d2b9996dd9b56f83bd90ac5291b87be18dafec919071bd71b3c5aa\",\"urls\":[\"bzzr://0f156a939d920ef807dd3a290b25c998900b26f9e66a4941a032a7266071dd9a\"]},\"/home/josh/Documents/ethereum/Academy-Coin-mintCoins/contracts/IERC20.sol\":{\"keccak256\":\"0x90e8c2521653bbb1768b05889c5760031e688d9cd361f167489b89215e201b95\",\"urls\":[\"bzzr://aa8b45b57edafc3d67bc5d916327ea16807fae33f753ca163ae0c4061b789766\"]},\"/home/josh/Documents/ethereum/Academy-Coin-mintCoins/contracts/MinterRole.sol\":{\"keccak256\":\"0xa8c32787768c93911fb4e567e7ad387f0c3e5b690ca31b1249ce75b0ee31c23b\",\"urls\":[\"bzzr://4dff47e456b433d79489dbff66322c864a148ce68d6142e88b98ca0a945c9572\"]},\"/home/josh/Documents/ethereum/Academy-Coin-mintCoins/contracts/Roles.sol\":{\"keccak256\":\"0xb002c378d7b82a101bd659c341518953ca0919d342c0a400196982c0e7e7bcdb\",\"urls\":[\"bzzr://bd34c1ce05b5b2b3a62fc02e160f6805b1cadd476854664f433c685b2fda8dad\"]},\"/home/josh/Documents/ethereum/Academy-Coin-mintCoins/contracts/SafeMath.sol\":{\"keccak256\":\"0x4ccf2d7b51873db1ccfd54ca2adae5eac3b184f9699911ed4490438419f1c690\",\"urls\":[\"bzzr://1604f5b6d6e916c154efd8c6720cda069e5ba32dfa0a9dedf2b42e5b02d07f89\"]}},\"version\":1}",
  "bytecode": "0x60806040523480156200001157600080fd5b5060405162001d2c38038062001d2c833981018060405260608110156200003757600080fd5b8101908080516401000000008111156200005057600080fd5b828101905060208101848111156200006757600080fd5b81518560018202830111640100000000821117156200008557600080fd5b50509291906020018051640100000000811115620000a257600080fd5b82810190506020810184811115620000b957600080fd5b8151856001820283011164010000000082111715620000d757600080fd5b505092919060200180519060200190929190505050828282826003908051906020019062000107929190620003df565b50816004908051906020019062000120929190620003df565b5080600560006101000a81548160ff021916908360ff160217905550505050620001593362000162640100000000026401000000009004565b5050506200048e565b62000186816006620001cc6401000000000262001683179091906401000000009004565b8073ffffffffffffffffffffffffffffffffffffffff167f6ae172837ea30b801fbfcdd4108aa1d5bf8ff775444fd70256b44e6bf3dfc3f660405160405180910390a250565b620001e78282620002bb640100000000026401000000009004565b1515156200025d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f526f6c65733a206163636f756e7420616c72656164792068617320726f6c650081525060200191505060405180910390fd5b60018260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415151562000388576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260228152602001807f526f6c65733a206163636f756e7420697320746865207a65726f20616464726581526020017f737300000000000000000000000000000000000000000000000000000000000081525060400191505060405180910390fd5b8260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200042257805160ff191683800117855562000453565b8280016001018555821562000453579182015b828111156200045257825182559160200191906001019062000435565b5b50905062000462919062000466565b5090565b6200048b91905b80821115620004875760008160009055506001016200046d565b5090565b90565b61188e806200049e6000396000f3fe6080604052600436106100db576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806306fdde03146100e0578063095ea7b31461017057806318160ddd146101e357806323b872dd1461020e578063313ce567146102a157806339509351146102d257806340c10f191461034557806370a08231146103b857806395d89b411461041d578063983b2d56146104ad57806398650275146104fe578063a457c2d714610515578063a9059cbb14610588578063aa271e1a146105fb578063dd62ed3e14610664575b600080fd5b3480156100ec57600080fd5b506100f56106e9565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561013557808201518184015260208101905061011a565b50505050905090810190601f1680156101625780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561017c57600080fd5b506101c96004803603604081101561019357600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505061078b565b604051808215151515815260200191505060405180910390f35b3480156101ef57600080fd5b506101f86107a2565b6040518082815260200191505060405180910390f35b34801561021a57600080fd5b506102876004803603606081101561023157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506107ac565b604051808215151515815260200191505060405180910390f35b3480156102ad57600080fd5b506102b661085d565b604051808260ff1660ff16815260200191505060405180910390f35b3480156102de57600080fd5b5061032b600480360360408110156102f557600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610874565b604051808215151515815260200191505060405180910390f35b34801561035157600080fd5b5061039e6004803603604081101561036857600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610919565b604051808215151515815260200191505060405180910390f35b3480156103c457600080fd5b50610407600480360360208110156103db57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506109d2565b6040518082815260200191505060405180910390f35b34801561042957600080fd5b50610432610a1a565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610472578082015181840152602081019050610457565b50505050905090810190601f16801561049f5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156104b957600080fd5b506104fc600480360360208110156104d057600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610abc565b005b34801561050a57600080fd5b50610513610ac8565b005b34801561052157600080fd5b5061056e6004803603604081101561053857600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610ad3565b604051808215151515815260200191505060405180910390f35b34801561059457600080fd5b506105e1600480360360408110156105ab57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610b78565b604051808215151515815260200191505060405180910390f35b34801561060757600080fd5b5061064a6004803603602081101561061e57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610b8f565b604051808215151515815260200191505060405180910390f35b34801561067057600080fd5b506106d36004803603604081101561068757600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610bac565b6040518082815260200191505060405180910390f35b606060038054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156107815780601f1061075657610100808354040283529160200191610781565b820191906000526020600020905b81548152906001019060200180831161076457829003601f168201915b5050505050905090565b6000610798338484610c33565b6001905092915050565b6000600254905090565b60006107b9848484610eb4565b610852843361084d85600160008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546111da90919063ffffffff16565b610c33565b600190509392505050565b6000600560009054906101000a900460ff16905090565b600061090f338461090a85600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461126590919063ffffffff16565b610c33565b6001905092915050565b600061092433610b8f565b15156109be576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260308152602001807f4d696e746572526f6c653a2063616c6c657220646f6573206e6f74206861766581526020017f20746865204d696e74657220726f6c650000000000000000000000000000000081525060400191505060405180910390fd5b6109c883836112ef565b6001905092915050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b606060048054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610ab25780601f10610a8757610100808354040283529160200191610ab2565b820191906000526020600020905b815481529060010190602001808311610a9557829003601f168201915b5050505050905090565b610ac5816114ac565b50565b610ad133611506565b565b6000610b6e3384610b6985600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546111da90919063ffffffff16565b610c33565b6001905092915050565b6000610b85338484610eb4565b6001905092915050565b6000610ba582600661156090919063ffffffff16565b9050919050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614151515610cfe576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260248152602001807f45524332303a20617070726f76652066726f6d20746865207a65726f2061646481526020017f726573730000000000000000000000000000000000000000000000000000000081525060400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614151515610dc9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260228152602001807f45524332303a20617070726f766520746f20746865207a65726f20616464726581526020017f737300000000000000000000000000000000000000000000000000000000000081525060400191505060405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925836040518082815260200191505060405180910390a3505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614151515610f7f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260258152602001807f45524332303a207472616e736665722066726f6d20746865207a65726f20616481526020017f647265737300000000000000000000000000000000000000000000000000000081525060400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415151561104a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260238152602001807f45524332303a207472616e7366657220746f20746865207a65726f206164647281526020017f657373000000000000000000000000000000000000000000000000000000000081525060400191505060405180910390fd5b61109b816000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546111da90919063ffffffff16565b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555061112e816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461126590919063ffffffff16565b6000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a3505050565b6000828211151515611254576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601e8152602001807f536166654d6174683a207375627472616374696f6e206f766572666c6f77000081525060200191505060405180910390fd5b600082840390508091505092915050565b60008082840190508381101515156112e5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f536166654d6174683a206164646974696f6e206f766572666c6f77000000000081525060200191505060405180910390fd5b8091505092915050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614151515611394576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f45524332303a206d696e7420746f20746865207a65726f20616464726573730081525060200191505060405180910390fd5b6113a98160025461126590919063ffffffff16565b600281905550611400816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461126590919063ffffffff16565b6000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a35050565b6114c081600661168390919063ffffffff16565b8073ffffffffffffffffffffffffffffffffffffffff167f6ae172837ea30b801fbfcdd4108aa1d5bf8ff775444fd70256b44e6bf3dfc3f660405160405180910390a250565b61151a81600661176090919063ffffffff16565b8073ffffffffffffffffffffffffffffffffffffffff167fe94479a9f7e1952cc78f2d6baab678adc1b772d936c6583def489e524cb6669260405160405180910390a250565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415151561162c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260228152602001807f526f6c65733a206163636f756e7420697320746865207a65726f20616464726581526020017f737300000000000000000000000000000000000000000000000000000000000081525060400191505060405180910390fd5b8260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b61168d8282611560565b151515611702576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f526f6c65733a206163636f756e7420616c72656164792068617320726f6c650081525060200191505060405180910390fd5b60018260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b61176a8282611560565b1515611804576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260218152602001807f526f6c65733a206163636f756e7420646f6573206e6f74206861766520726f6c81526020017f650000000000000000000000000000000000000000000000000000000000000081525060400191505060405180910390fd5b60008260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550505056fea165627a7a7230582007c24fa99ab3ae108a942653f15208597ccc967d9829a82634a7af4887bcdcc90029",
  "deployedBytecode": "0x6080604052600436106100db576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806306fdde03146100e0578063095ea7b31461017057806318160ddd146101e357806323b872dd1461020e578063313ce567146102a157806339509351146102d257806340c10f191461034557806370a08231146103b857806395d89b411461041d578063983b2d56146104ad57806398650275146104fe578063a457c2d714610515578063a9059cbb14610588578063aa271e1a146105fb578063dd62ed3e14610664575b600080fd5b3480156100ec57600080fd5b506100f56106e9565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561013557808201518184015260208101905061011a565b50505050905090810190601f1680156101625780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561017c57600080fd5b506101c96004803603604081101561019357600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505061078b565b604051808215151515815260200191505060405180910390f35b3480156101ef57600080fd5b506101f86107a2565b6040518082815260200191505060405180910390f35b34801561021a57600080fd5b506102876004803603606081101561023157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506107ac565b604051808215151515815260200191505060405180910390f35b3480156102ad57600080fd5b506102b661085d565b604051808260ff1660ff16815260200191505060405180910390f35b3480156102de57600080fd5b5061032b600480360360408110156102f557600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610874565b604051808215151515815260200191505060405180910390f35b34801561035157600080fd5b5061039e6004803603604081101561036857600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610919565b604051808215151515815260200191505060405180910390f35b3480156103c457600080fd5b50610407600480360360208110156103db57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506109d2565b6040518082815260200191505060405180910390f35b34801561042957600080fd5b50610432610a1a565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610472578082015181840152602081019050610457565b50505050905090810190601f16801561049f5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156104b957600080fd5b506104fc600480360360208110156104d057600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610abc565b005b34801561050a57600080fd5b50610513610ac8565b005b34801561052157600080fd5b5061056e6004803603604081101561053857600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610ad3565b604051808215151515815260200191505060405180910390f35b34801561059457600080fd5b506105e1600480360360408110156105ab57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610b78565b604051808215151515815260200191505060405180910390f35b34801561060757600080fd5b5061064a6004803603602081101561061e57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610b8f565b604051808215151515815260200191505060405180910390f35b34801561067057600080fd5b506106d36004803603604081101561068757600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610bac565b6040518082815260200191505060405180910390f35b606060038054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156107815780601f1061075657610100808354040283529160200191610781565b820191906000526020600020905b81548152906001019060200180831161076457829003601f168201915b5050505050905090565b6000610798338484610c33565b6001905092915050565b6000600254905090565b60006107b9848484610eb4565b610852843361084d85600160008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546111da90919063ffffffff16565b610c33565b600190509392505050565b6000600560009054906101000a900460ff16905090565b600061090f338461090a85600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461126590919063ffffffff16565b610c33565b6001905092915050565b600061092433610b8f565b15156109be576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260308152602001807f4d696e746572526f6c653a2063616c6c657220646f6573206e6f74206861766581526020017f20746865204d696e74657220726f6c650000000000000000000000000000000081525060400191505060405180910390fd5b6109c883836112ef565b6001905092915050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b606060048054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610ab25780601f10610a8757610100808354040283529160200191610ab2565b820191906000526020600020905b815481529060010190602001808311610a9557829003601f168201915b5050505050905090565b610ac5816114ac565b50565b610ad133611506565b565b6000610b6e3384610b6985600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546111da90919063ffffffff16565b610c33565b6001905092915050565b6000610b85338484610eb4565b6001905092915050565b6000610ba582600661156090919063ffffffff16565b9050919050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614151515610cfe576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260248152602001807f45524332303a20617070726f76652066726f6d20746865207a65726f2061646481526020017f726573730000000000000000000000000000000000000000000000000000000081525060400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614151515610dc9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260228152602001807f45524332303a20617070726f766520746f20746865207a65726f20616464726581526020017f737300000000000000000000000000000000000000000000000000000000000081525060400191505060405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925836040518082815260200191505060405180910390a3505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614151515610f7f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260258152602001807f45524332303a207472616e736665722066726f6d20746865207a65726f20616481526020017f647265737300000000000000000000000000000000000000000000000000000081525060400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415151561104a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260238152602001807f45524332303a207472616e7366657220746f20746865207a65726f206164647281526020017f657373000000000000000000000000000000000000000000000000000000000081525060400191505060405180910390fd5b61109b816000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546111da90919063ffffffff16565b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555061112e816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461126590919063ffffffff16565b6000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a3505050565b6000828211151515611254576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601e8152602001807f536166654d6174683a207375627472616374696f6e206f766572666c6f77000081525060200191505060405180910390fd5b600082840390508091505092915050565b60008082840190508381101515156112e5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f536166654d6174683a206164646974696f6e206f766572666c6f77000000000081525060200191505060405180910390fd5b8091505092915050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614151515611394576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f45524332303a206d696e7420746f20746865207a65726f20616464726573730081525060200191505060405180910390fd5b6113a98160025461126590919063ffffffff16565b600281905550611400816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461126590919063ffffffff16565b6000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a35050565b6114c081600661168390919063ffffffff16565b8073ffffffffffffffffffffffffffffffffffffffff167f6ae172837ea30b801fbfcdd4108aa1d5bf8ff775444fd70256b44e6bf3dfc3f660405160405180910390a250565b61151a81600661176090919063ffffffff16565b8073ffffffffffffffffffffffffffffffffffffffff167fe94479a9f7e1952cc78f2d6baab678adc1b772d936c6583def489e524cb6669260405160405180910390a250565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415151561162c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260228152602001807f526f6c65733a206163636f756e7420697320746865207a65726f20616464726581526020017f737300000000000000000000000000000000000000000000000000000000000081525060400191505060405180910390fd5b8260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b61168d8282611560565b151515611702576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f526f6c65733a206163636f756e7420616c72656164792068617320726f6c650081525060200191505060405180910390fd5b60018260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b61176a8282611560565b1515611804576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260218152602001807f526f6c65733a206163636f756e7420646f6573206e6f74206861766520726f6c81526020017f650000000000000000000000000000000000000000000000000000000000000081525060400191505060405180910390fd5b60008260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550505056fea165627a7a7230582007c24fa99ab3ae108a942653f15208597ccc967d9829a82634a7af4887bcdcc90029",
  "sourceMap": "108:247:0:-;;;175:177;8:9:-1;5:2;;;30:1;27;20:12;5:2;175:177:0;;;;;;;;;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;175:177:0;;;;;;19:11:-1;14:3;11:20;8:2;;;44:1;41;34:12;8:2;71:11;66:3;62:21;55:28;;123:4;118:3;114:14;159:9;141:16;138:31;135:2;;;182:1;179;172:12;135:2;219:3;213:10;330:9;325:1;311:12;307:20;289:16;285:43;282:58;261:11;247:12;244:29;233:115;230:2;;;361:1;358;351:12;230:2;0:372;;175:177:0;;;;;;;19:11:-1;14:3;11:20;8:2;;;44:1;41;34:12;8:2;71:11;66:3;62:21;55:28;;123:4;118:3;114:14;159:9;141:16;138:31;135:2;;;182:1;179;172:12;135:2;219:3;213:10;330:9;325:1;311:12;307:20;289:16;285:43;282:58;261:11;247:12;244:29;233:115;230:2;;;361:1;358;351:12;230:2;0:372;;175:177:0;;;;;;;;;;;;;;;;;291:4;297:6;305:8;512:4:2;504:5;:12;;;;;;;;;;;;:::i;:::-;;536:6;526:7;:16;;;;;;;;;;;;:::i;:::-;;564:8;552:9;;:20;;;;;;;;;;;;;;;;;;416:163;;;274:22:6;285:10;274;;;:22;;;:::i;:::-;175:177:0;;;108:247;;898:119:6;954:21;967:7;954:8;:12;;;;;;:21;;;;;:::i;:::-;1002:7;990:20;;;;;;;;;;;;898:119;:::o;260:175:7:-;337:18;341:4;347:7;337:3;;;:18;;;:::i;:::-;336:19;328:63;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;424:4;401;:11;;:20;413:7;401:20;;;;;;;;;;;;;;;;:27;;;;;;;;;;;;;;;;;;260:175;;:::o;779:200::-;851:4;894:1;875:21;;:7;:21;;;;867:68;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;952:4;:11;;:20;964:7;952:20;;;;;;;;;;;;;;;;;;;;;;;;;945:27;;779:200;;;;:::o;108:247:0:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;",
  "deployedSourceMap": "108:247:0:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;644:81:2;;8:9:-1;5:2;;;30:1;27;20:12;5:2;644:81:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;644:81:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2444:145:1;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2444:145:1;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;2444:145:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1505:89;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1505:89:1;;;;;;;;;;;;;;;;;;;;;;;3046:252;;8:9:-1;5:2;;;30:1;27;20:12;5:2;3046:252:1;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;3046:252:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1478:81:2;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1478:81:2;;;;;;;;;;;;;;;;;;;;;;;;;;;3693:203:1;;8:9:-1;5:2;;;30:1;27;20:12;5:2;3693:203:1;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;3693:203:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;485:140:3;;8:9:-1;5:2;;;30:1;27;20:12;5:2;485:140:3;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;485:140:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1652:108:1;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1652:108:1;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;1652:108:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;838:85:2;;8:9:-1;5:2;;;30:1;27;20:12;5:2;838:85:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;838:85:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;732:79:6;;8:9:-1;5:2;;;30:1;27;20:12;5:2;732:79:6;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;732:79:6;;;;;;;;;;;;;;;;;;;;;;817:75;;8:9:-1;5:2;;;30:1;27;20:12;5:2;817:75:6;;;;;;4383:213:1;;8:9:-1;5:2;;;30:1;27;20:12;5:2;4383:213:1;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;4383:213:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1963:153;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1963:153:1;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;1963:153:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;446:107:6;;8:9:-1;5:2;;;30:1;27;20:12;5:2;446:107:6;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;446:107:6;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2174:132:1;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2174:132:1;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;2174:132:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;644:81:2;681:13;713:5;706:12;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;644:81;:::o;2444:145:1:-;2509:4;2525:36;2534:10;2546:7;2555:5;2525:8;:36::i;:::-;2578:4;2571:11;;2444:145;;;;:::o;1505:89::-;1549:7;1575:12;;1568:19;;1505:89;:::o;3046:252::-;3135:4;3151:36;3161:6;3169:9;3180:6;3151:9;:36::i;:::-;3197:73;3206:6;3214:10;3226:43;3262:6;3226:11;:19;3238:6;3226:19;;;;;;;;;;;;;;;:31;3246:10;3226:31;;;;;;;;;;;;;;;;:35;;:43;;;;:::i;:::-;3197:8;:73::i;:::-;3287:4;3280:11;;3046:252;;;;;:::o;1478:81:2:-;1519:5;1543:9;;;;;;;;;;;1536:16;;1478:81;:::o;3693:203:1:-;3773:4;3789:79;3798:10;3810:7;3819:48;3856:10;3819:11;:23;3831:10;3819:23;;;;;;;;;;;;;;;:32;3843:7;3819:32;;;;;;;;;;;;;;;;:36;;:48;;;;:::i;:::-;3789:8;:79::i;:::-;3885:4;3878:11;;3693:203;;;;:::o;485:140:3:-;559:4;349:20:6;358:10;349:8;:20::i;:::-;341:81;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;575:22:3;581:7;590:6;575:5;:22::i;:::-;614:4;607:11;;485:140;;;;:::o;1652:108:1:-;1709:7;1735:9;:18;1745:7;1735:18;;;;;;;;;;;;;;;;1728:25;;1652:108;;;:::o;838:85:2:-;877:13;909:7;902:14;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;838:85;:::o;732:79:6:-;785:19;796:7;785:10;:19::i;:::-;732:79;:::o;817:75::-;860:25;874:10;860:13;:25::i;:::-;817:75::o;4383:213:1:-;4468:4;4484:84;4493:10;4505:7;4514:53;4551:15;4514:11;:23;4526:10;4514:23;;;;;;;;;;;;;;;:32;4538:7;4514:32;;;;;;;;;;;;;;;;:36;;:53;;;;:::i;:::-;4484:8;:84::i;:::-;4585:4;4578:11;;4383:213;;;;:::o;1963:153::-;2032:4;2048:40;2058:10;2070:9;2081:6;2048:9;:40::i;:::-;2105:4;2098:11;;1963:153;;;;:::o;446:107:6:-;502:4;525:21;538:7;525:8;:12;;:21;;;;:::i;:::-;518:28;;446:107;;;:::o;2174:132:1:-;2246:7;2272:11;:18;2284:5;2272:18;;;;;;;;;;;;;;;:27;2291:7;2272:27;;;;;;;;;;;;;;;;2265:34;;2174:132;;;;:::o;7108:329::-;7217:1;7200:19;;:5;:19;;;;7192:68;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7297:1;7278:21;;:7;:21;;;;7270:68;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7379:5;7349:11;:18;7361:5;7349:18;;;;;;;;;;;;;;;:27;7368:7;7349:27;;;;;;;;;;;;;;;:35;;;;7415:7;7399:31;;7408:5;7399:31;;;7424:5;7399:31;;;;;;;;;;;;;;;;;;7108:329;;;:::o;5070:422::-;5185:1;5167:20;;:6;:20;;;;5159:70;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5268:1;5247:23;;:9;:23;;;;5239:71;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5341:29;5363:6;5341:9;:17;5351:6;5341:17;;;;;;;;;;;;;;;;:21;;:29;;;;:::i;:::-;5321:9;:17;5331:6;5321:17;;;;;;;;;;;;;;;:49;;;;5403:32;5428:6;5403:9;:20;5413:9;5403:20;;;;;;;;;;;;;;;;:24;;:32;;;;:::i;:::-;5380:9;:20;5390:9;5380:20;;;;;;;;;;;;;;;:55;;;;5467:9;5450:35;;5459:6;5450:35;;;5478:6;5450:35;;;;;;;;;;;;;;;;;;5070:422;;;:::o;1274:179:8:-;1332:7;1364:1;1359;:6;;1351:49;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1410:9;1426:1;1422;:5;1410:17;;1445:1;1438:8;;;1274:179;;;;:::o;834:176::-;892:7;911:9;927:1;923;:5;911:17;;951:1;946;:6;;938:46;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1002:1;995:8;;;834:176;;;;:::o;5762:302:1:-;5856:1;5837:21;;:7;:21;;;;5829:65;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5920:24;5937:6;5920:12;;:16;;:24;;;;:::i;:::-;5905:12;:39;;;;5975:30;5998:6;5975:9;:18;5985:7;5975:18;;;;;;;;;;;;;;;;:22;;:30;;;;:::i;:::-;5954:9;:18;5964:7;5954:18;;;;;;;;;;;;;;;:51;;;;6041:7;6020:37;;6037:1;6020:37;;;6050:6;6020:37;;;;;;;;;;;;;;;;;;5762:302;;:::o;898:119:6:-;954:21;967:7;954:8;:12;;:21;;;;:::i;:::-;1002:7;990:20;;;;;;;;;;;;898:119;:::o;1023:127::-;1082:24;1098:7;1082:8;:15;;:24;;;;:::i;:::-;1135:7;1121:22;;;;;;;;;;;;1023:127;:::o;779:200:7:-;851:4;894:1;875:21;;:7;:21;;;;867:68;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;952:4;:11;;:20;964:7;952:20;;;;;;;;;;;;;;;;;;;;;;;;;945:27;;779:200;;;;:::o;260:175::-;337:18;341:4;347:7;337:3;:18::i;:::-;336:19;328:63;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;424:4;401;:11;;:20;413:7;401:20;;;;;;;;;;;;;;;;:27;;;;;;;;;;;;;;;;;;260:175;;:::o;510:180::-;589:18;593:4;599:7;589:3;:18::i;:::-;581:64;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;678:5;655:4;:11;;:20;667:7;655:20;;;;;;;;;;;;;;;;:28;;;;;;;;;;;;;;;;;;510:180;;:::o",
  "source": "pragma solidity ^0.5.0;\n\nimport './ERC20.sol';\nimport './ERC20Detailed.sol';\nimport './ERC20Mintable.sol';\n\ncontract AcademyCoin is ERC20, ERC20Detailed, ERC20Mintable {\n\n    constructor(string memory name, string memory symbol, uint8 decimals)\n        ERC20Mintable()\n        ERC20Detailed(name, symbol, decimals)\n        ERC20()\n        public\n    {}\n\n}\n",
  "sourcePath": "/home/josh/Documents/ethereum/Academy-Coin-mintCoins/contracts/AcademyCoin.sol",
  "ast": {
    "absolutePath": "/home/josh/Documents/ethereum/Academy-Coin-mintCoins/contracts/AcademyCoin.sol",
    "exportedSymbols": {
      "AcademyCoin": [
        30
      ]
    },
    "id": 31,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1,
        "literals": [
          "solidity",
          "^",
          "0.5",
          ".0"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:23:0"
      },
      {
        "absolutePath": "/home/josh/Documents/ethereum/Academy-Coin-mintCoins/contracts/ERC20.sol",
        "file": "./ERC20.sol",
        "id": 2,
        "nodeType": "ImportDirective",
        "scope": 31,
        "sourceUnit": 428,
        "src": "25:21:0",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/josh/Documents/ethereum/Academy-Coin-mintCoins/contracts/ERC20Detailed.sol",
        "file": "./ERC20Detailed.sol",
        "id": 3,
        "nodeType": "ImportDirective",
        "scope": 31,
        "sourceUnit": 486,
        "src": "47:29:0",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/josh/Documents/ethereum/Academy-Coin-mintCoins/contracts/ERC20Mintable.sol",
        "file": "./ERC20Mintable.sol",
        "id": 4,
        "nodeType": "ImportDirective",
        "scope": 31,
        "sourceUnit": 514,
        "src": "77:29:0",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 5,
              "name": "ERC20",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 427,
              "src": "132:5:0",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC20_$427",
                "typeString": "contract ERC20"
              }
            },
            "id": 6,
            "nodeType": "InheritanceSpecifier",
            "src": "132:5:0"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 7,
              "name": "ERC20Detailed",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 485,
              "src": "139:13:0",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC20Detailed_$485",
                "typeString": "contract ERC20Detailed"
              }
            },
            "id": 8,
            "nodeType": "InheritanceSpecifier",
            "src": "139:13:0"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 9,
              "name": "ERC20Mintable",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 513,
              "src": "154:13:0",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC20Mintable_$513",
                "typeString": "contract ERC20Mintable"
              }
            },
            "id": 10,
            "nodeType": "InheritanceSpecifier",
            "src": "154:13:0"
          }
        ],
        "contractDependencies": [
          427,
          485,
          513,
          582,
          741
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 30,
        "linearizedBaseContracts": [
          30,
          513,
          741,
          485,
          427,
          582
        ],
        "name": "AcademyCoin",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": {
              "id": 28,
              "nodeType": "Block",
              "src": "350:2:0",
              "statements": []
            },
            "documentation": null,
            "id": 29,
            "implemented": true,
            "kind": "constructor",
            "modifiers": [
              {
                "arguments": [],
                "id": 19,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 18,
                  "name": "ERC20Mintable",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 513,
                  "src": "253:13:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_type$_t_contract$_ERC20Mintable_$513_$",
                    "typeString": "type(contract ERC20Mintable)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "253:15:0"
              },
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 21,
                    "name": "name",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 12,
                    "src": "291:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  {
                    "argumentTypes": null,
                    "id": 22,
                    "name": "symbol",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 14,
                    "src": "297:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  {
                    "argumentTypes": null,
                    "id": 23,
                    "name": "decimals",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 16,
                    "src": "305:8:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  }
                ],
                "id": 24,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 20,
                  "name": "ERC20Detailed",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 485,
                  "src": "277:13:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_type$_t_contract$_ERC20Detailed_$485_$",
                    "typeString": "type(contract ERC20Detailed)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "277:37:0"
              },
              {
                "arguments": [],
                "id": 26,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 25,
                  "name": "ERC20",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 427,
                  "src": "323:5:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_type$_t_contract$_ERC20_$427_$",
                    "typeString": "type(contract ERC20)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "323:7:0"
              }
            ],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 17,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 12,
                  "name": "name",
                  "nodeType": "VariableDeclaration",
                  "scope": 29,
                  "src": "187:18:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 11,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "187:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14,
                  "name": "symbol",
                  "nodeType": "VariableDeclaration",
                  "scope": 29,
                  "src": "207:20:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 13,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "207:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 16,
                  "name": "decimals",
                  "nodeType": "VariableDeclaration",
                  "scope": 29,
                  "src": "229:14:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint8",
                    "typeString": "uint8"
                  },
                  "typeName": {
                    "id": 15,
                    "name": "uint8",
                    "nodeType": "ElementaryTypeName",
                    "src": "229:5:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "186:58:0"
            },
            "returnParameters": {
              "id": 27,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "350:0:0"
            },
            "scope": 30,
            "src": "175:177:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 31,
        "src": "108:247:0"
      }
    ],
    "src": "0:356:0"
  },
  "legacyAST": {
    "absolutePath": "/home/josh/Documents/ethereum/Academy-Coin-mintCoins/contracts/AcademyCoin.sol",
    "exportedSymbols": {
      "AcademyCoin": [
        30
      ]
    },
    "id": 31,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1,
        "literals": [
          "solidity",
          "^",
          "0.5",
          ".0"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:23:0"
      },
      {
        "absolutePath": "/home/josh/Documents/ethereum/Academy-Coin-mintCoins/contracts/ERC20.sol",
        "file": "./ERC20.sol",
        "id": 2,
        "nodeType": "ImportDirective",
        "scope": 31,
        "sourceUnit": 428,
        "src": "25:21:0",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/josh/Documents/ethereum/Academy-Coin-mintCoins/contracts/ERC20Detailed.sol",
        "file": "./ERC20Detailed.sol",
        "id": 3,
        "nodeType": "ImportDirective",
        "scope": 31,
        "sourceUnit": 486,
        "src": "47:29:0",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/josh/Documents/ethereum/Academy-Coin-mintCoins/contracts/ERC20Mintable.sol",
        "file": "./ERC20Mintable.sol",
        "id": 4,
        "nodeType": "ImportDirective",
        "scope": 31,
        "sourceUnit": 514,
        "src": "77:29:0",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 5,
              "name": "ERC20",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 427,
              "src": "132:5:0",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC20_$427",
                "typeString": "contract ERC20"
              }
            },
            "id": 6,
            "nodeType": "InheritanceSpecifier",
            "src": "132:5:0"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 7,
              "name": "ERC20Detailed",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 485,
              "src": "139:13:0",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC20Detailed_$485",
                "typeString": "contract ERC20Detailed"
              }
            },
            "id": 8,
            "nodeType": "InheritanceSpecifier",
            "src": "139:13:0"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 9,
              "name": "ERC20Mintable",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 513,
              "src": "154:13:0",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC20Mintable_$513",
                "typeString": "contract ERC20Mintable"
              }
            },
            "id": 10,
            "nodeType": "InheritanceSpecifier",
            "src": "154:13:0"
          }
        ],
        "contractDependencies": [
          427,
          485,
          513,
          582,
          741
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 30,
        "linearizedBaseContracts": [
          30,
          513,
          741,
          485,
          427,
          582
        ],
        "name": "AcademyCoin",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": {
              "id": 28,
              "nodeType": "Block",
              "src": "350:2:0",
              "statements": []
            },
            "documentation": null,
            "id": 29,
            "implemented": true,
            "kind": "constructor",
            "modifiers": [
              {
                "arguments": [],
                "id": 19,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 18,
                  "name": "ERC20Mintable",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 513,
                  "src": "253:13:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_type$_t_contract$_ERC20Mintable_$513_$",
                    "typeString": "type(contract ERC20Mintable)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "253:15:0"
              },
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 21,
                    "name": "name",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 12,
                    "src": "291:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  {
                    "argumentTypes": null,
                    "id": 22,
                    "name": "symbol",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 14,
                    "src": "297:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  {
                    "argumentTypes": null,
                    "id": 23,
                    "name": "decimals",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 16,
                    "src": "305:8:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  }
                ],
                "id": 24,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 20,
                  "name": "ERC20Detailed",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 485,
                  "src": "277:13:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_type$_t_contract$_ERC20Detailed_$485_$",
                    "typeString": "type(contract ERC20Detailed)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "277:37:0"
              },
              {
                "arguments": [],
                "id": 26,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 25,
                  "name": "ERC20",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 427,
                  "src": "323:5:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_type$_t_contract$_ERC20_$427_$",
                    "typeString": "type(contract ERC20)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "323:7:0"
              }
            ],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 17,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 12,
                  "name": "name",
                  "nodeType": "VariableDeclaration",
                  "scope": 29,
                  "src": "187:18:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 11,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "187:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14,
                  "name": "symbol",
                  "nodeType": "VariableDeclaration",
                  "scope": 29,
                  "src": "207:20:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 13,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "207:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 16,
                  "name": "decimals",
                  "nodeType": "VariableDeclaration",
                  "scope": 29,
                  "src": "229:14:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint8",
                    "typeString": "uint8"
                  },
                  "typeName": {
                    "id": 15,
                    "name": "uint8",
                    "nodeType": "ElementaryTypeName",
                    "src": "229:5:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "186:58:0"
            },
            "returnParameters": {
              "id": 27,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "350:0:0"
            },
            "scope": 30,
            "src": "175:177:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 31,
        "src": "108:247:0"
      }
    ],
    "src": "0:356:0"
  },
  "compiler": {
    "name": "solc",
    "version": "0.5.0+commit.1d4f565a.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.0.9",
  "updatedAt": "2019-06-06T20:39:03.826Z",
  "devdoc": {
    "methods": {
      "allowance(address,address)": {
        "details": "See `IERC20.allowance`."
      },
      "approve(address,uint256)": {
        "details": "See `IERC20.approve`.     * Requirements:     * - `spender` cannot be the zero address."
      },
      "balanceOf(address)": {
        "details": "See `IERC20.balanceOf`."
      },
      "decimals()": {
        "details": "Returns the number of decimals used to get its user representation. For example, if `decimals` equals `2`, a balance of `505` tokens should be displayed to a user as `5,05` (`505 / 10 ** 2`).     * Tokens usually opt for a value of 18, imitating the relationship between Ether and Wei.     * > Note that this information is only used for _display_ purposes: it in no way affects any of the arithmetic of the contract, including `IERC20.balanceOf` and `IERC20.transfer`."
      },
      "decreaseAllowance(address,uint256)": {
        "details": "Atomically decreases the allowance granted to `spender` by the caller.     * This is an alternative to `approve` that can be used as a mitigation for problems described in `IERC20.approve`.     * Emits an `Approval` event indicating the updated allowance.     * Requirements:     * - `spender` cannot be the zero address. - `spender` must have allowance for the caller of at least `subtractedValue`."
      },
      "increaseAllowance(address,uint256)": {
        "details": "Atomically increases the allowance granted to `spender` by the caller.     * This is an alternative to `approve` that can be used as a mitigation for problems described in `IERC20.approve`.     * Emits an `Approval` event indicating the updated allowance.     * Requirements:     * - `spender` cannot be the zero address."
      },
      "mint(address,uint256)": {
        "details": "See `ERC20._mint`.     * Requirements:     * - the caller must have the `MinterRole`."
      },
      "name()": {
        "details": "Returns the name of the token."
      },
      "symbol()": {
        "details": "Returns the symbol of the token, usually a shorter version of the name."
      },
      "totalSupply()": {
        "details": "See `IERC20.totalSupply`."
      },
      "transfer(address,uint256)": {
        "details": "See `IERC20.transfer`.     * Requirements:     * - `recipient` cannot be the zero address. - the caller must have a balance of at least `amount`."
      },
      "transferFrom(address,address,uint256)": {
        "details": "See `IERC20.transferFrom`.     * Emits an `Approval` event indicating the updated allowance. This is not required by the EIP. See the note at the beginning of `ERC20`;     * Requirements: - `sender` and `recipient` cannot be the zero address. - `sender` must have a balance of at least `value`. - the caller must have allowance for `sender`'s tokens of at least `amount`."
      }
    }
  },
  "userdoc": {
    "methods": {
      "addMinter(address)": {
        "notice": "The onlyMinter modifier has been removed, so anyone can add themselves as a minter and start minting tokens. This is not standard behavior!!"
      }
    }
  }
}
},{}],2:[function(require,module,exports){
const web3 = new Web3(Web3.givenProvider, null, {})
const AcademyCoinJSON = require("../../build/contracts/AcademyCoin.json");
let account, AcademyCoinContract

init()

async function mintTokens(){
    AcademyCoinContract.methods.mint(account, 1000000000000000000).send({from: account})
}
 
async function init(){
    const accounts = await ethereum.enable()
    account = accounts[0]

    AcademyCoinContract = new web3.eth.Contract(AcademyCoinJSON.abi, '0x61f0e026e2aa59c16f97920361a095b4f3af5b85', {
        defaultAccount: account, // default from address
        defaultGasPrice: '20000000000' // default gas price in wei, 20 gwei in this case
    })   

    document.getElementById("mintTokens").onclick = mintTokens
}



},{"../../build/contracts/AcademyCoin.json":1}]},{},[2]);
