// SPDX-License-Identifier: MIT

pragma solidity ^0.8.18;

contract Crowdfund {

    uint256 public fundingPool;
    address[] public funders;
    mapping(address funder => uint256 amountFunded) public registry;

    function fund() public payable {
        funders.push(msg.sender);
        registry[msg.sender] += msg.value;
        fundingPool += msg.value;
    }

    function viewFundingPool() public view returns(uint256) {
        return fundingPool;
    }
    
}