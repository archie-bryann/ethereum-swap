const { assert } = require('chai')

const Token = artifacts.require('Token')
const EthSwap = artifacts.require('EthSwap')

require('chai')
    .use(require('chai-as-promised'))
    .should()

function tokens(n) {
    return web3.utils.toWei(n, 'ether')
}

contract('EthSwap', (accounts) => {
    let token, ethSwap;

    before(async() => { // do this before testing, esp. the transfer 
        token = await Token.new();
        ethSwap = await EthSwap.new(token.address);
        await token.transfer(ethSwap.address, tokens('1000000')); // this transfer applies only for testing
    })

    describe('Token deployment', async () => {
        it('contract has a name', async () => {
            const name = await token.name();
            assert.equal(name, 'Dapp Token');
        })
    })

    describe('EthSwap deployment', async () => {
        it('contract has a name', async () => {
            const name = await ethSwap.name();
            assert.equal(name, 'EthSwap Instant Exchange');
        })
    })

    it('contract has tokens', async () => {
        // test if the transfer in the before call worked
        let balance = await token.balanceOf(ethSwap.address);
        assert.equal(balance.toString(), tokens('1000000'));
    })

    describe('buyTokens()', async () => {
        it('Allows user to instantly purchase tokens from ethSwap for a fixed price', async () => {
            await ethSwap.buyTokens({ from: accounts[1], value: tokens('1') }); // account at index 1 has successfully bought my token [1:14:32]
        })
    })
})