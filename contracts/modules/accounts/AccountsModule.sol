pragma solidity ^0.5.12;

import "../../common/Base.sol";

contract AccountsModule is Base {

    function initialize(address sender) public initializer {
        Base.initialize(sender);
    }
}