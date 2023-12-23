// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract Square {

    int public number;

    constructor() {
        number = 3;
    }

    function update(int square) public {
        if(square == number * number) {
            number = square;
        }
    }

}