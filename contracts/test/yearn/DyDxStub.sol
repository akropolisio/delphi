pragma solidity ^0.5.0;
pragma experimental ABIEncoderV2;

import "../../common/Base.sol";
import "@openzeppelin/contracts-ethereum-package/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts-ethereum-package/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts-ethereum-package/contracts/token/ERC20/ERC20Detailed.sol";
import "@openzeppelin/contracts-ethereum-package/contracts/token/ERC20/SafeERC20.sol";
import "@openzeppelin/contracts-ethereum-package/contracts/math/SafeMath.sol";


import "./Interfaces.sol";
import "./DyDxStructs.sol";

contract DyDxStub is Base, DyDx {
    using SafeMath for uint256;
    using SafeERC20 for IERC20;

    event MarketAdded(address token, uint256 market);

    struct AccountBalances {
        mapping(address=>uint256) tokens;
    }

    uint256 numMarkets;
    mapping(uint256 => address) public markets;
    mapping(address=>AccountBalances) balances;

    function addMarket(address token) external onlyOwner {
        numMarkets += 1;
        markets[numMarkets] = token;
        emit MarketAdded(token, numMarkets);
    }
    
    function getAccountWei(Info memory account, uint256 marketId) public view returns (Wei memory) {
        address beneficiary = account.owner;
        address token = markets[marketId];
        require(token != address(0), "Market not found");
        return Wei({
            sign: true,
            value: balances[beneficiary].tokens[token]
        });
    }

    function operate(Info[] memory accounts, ActionArgs[] memory args) public {
        require(accounts.length == args.length, "Array size mismatch");
        for(uint256 i=0; i< accounts.length; i++) {
            _operate(accounts[i], args[i]);
        }
    }

    function _operate(Info memory account, ActionArgs memory arg) internal {
        address beneficiary = account.owner;
        address token = markets[arg.primaryMarketId];
        require(token != address(0), "Market not found");
        uint256 amount = arg.amount.value;
        if(arg.actionType == ActionType.Deposit) {
            _deposit(token, beneficiary, amount);
        } else if(arg.actionType == ActionType.Deposit) {
            _withdraw(token, beneficiary, amount);
        } else {
            revert("Unsupported action");
        }
    }

    function _deposit(address token, address beneficiary, uint256 amount) internal {
        IERC20(token).safeTransferFrom(beneficiary, address(this), amount);
        balances[beneficiary].tokens[token] = balances[beneficiary].tokens[token].add(amount);
    }

    function _withdraw(address token, address beneficiary, uint256 amount) internal {
        balances[beneficiary].tokens[token] = balances[beneficiary].tokens[token].sub(amount);
        IERC20(token).safeTransfer(beneficiary, amount);
    }
}
