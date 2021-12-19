npm install -g truffle@5.1.14
npm install -s identicon.js@^2.3.3

// to migrate the contract after creating the migration file
~ truffle migrate

// to echo out the contract of terminal
~ truffle console
~ contract = await EthSwap.deployed()
~ contract
~ contract.address
~ name = await contract.name()
~ name

// Ethereum allows one to create his own cryptocurrency without his own blockchain.
https://gist.github.com/gwmccubbin/a0a17f504591fc5795bc89bd7f75263c <Default Token Contract Code>

~ truffle migrate --reset ==> Smart contract code is IMMUTABLE, you cannot change it. The only thing that can be done is to deploy a new copy of it to the blockchain [ran after editing the migrations file and adding a new contract to be de
ployed, ran if there has been a previous migration]

~ token = await Token.deployed()
~ token
~ balance = await token.balanceOf('0xe891c6dcd38d747EB914b4DE81AA7fc914443c69') // an address on the blockchain network
~ balance.toString()
// ABOVE BLOCK OF Code SUMMARY: We took the totalSupply of coins and assigned it to the blockchain address passed as a parameter.

// after writing to transfer totalSupply from one contract to another [onSupply]
~ ethSwap = await EthSwap.deployed()
~ token = await Token.deployed()
~ balance = await token.balanceOf(ethSwap.address)
~ balance.toString()
