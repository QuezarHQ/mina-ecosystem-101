// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

// Lottery Contract

contract lottery {
    //Golbal veriables
    address public manger;
    address payable[] public Lotterybuyers;

    constructor() {
        manger = msg.sender;
    }

    receive() external payable {
        require(msg.value >= 1 ether, "Price not sufficent for buying a ticket");
        require(msg.sender != manger, "Lottery owner can't buy a ticket");
        Lotterybuyers.push(payable(msg.sender));
    }

    function getblance() public view returns (uint) {
        require(msg.sender == manger, "Only owner can see the balance");
        return address(this).balance;
    }

    function random() public view returns (uint) {
        return uint(keccak256(abi.encodePacked(block.difficulty, block.timestamp, Lotterybuyers.length)));
    }

    function TotalNumberOfBuyer() public view returns (uint) {
        return Lotterybuyers.length;
    }

    function Winer() public {
        require(msg.sender == manger);
        require(Lotterybuyers.length >= 3);
        address payable Winner;
        uint r = random();
        uint index = r % Lotterybuyers.length;
        Winner = Lotterybuyers[index];
        Winner.transfer(getblance());
    }

    function ReloadLottery() public {
        require(msg.sender == manger);
        Lotterybuyers = new address payable[](0);
    }
}
