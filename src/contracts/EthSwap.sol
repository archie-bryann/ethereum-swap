pragma solidity ^0.5.0;

import "./Token.sol";

contract EthSwap {
    string public name = "EthSwap Instant Exchange";
    Token public token;
    uint public rate = 100;

    constructor(Token _token) public {
        token = _token;
    }

    function buyTokens() public payable {
        // Calculate the amount of tokens to buy
        // Redemption Rate = # of tokens they receive for 1 ether
        // Amount of Ethereum * Redemption Rate
        uint tokenAmount = msg.value * rate; // msg.value -> ethereum amount
        token.transfer(msg.sender, tokenAmount); // msg.sender -> msg is a global variable in Solidity, sender is the address of the person calling this function
    }
}
