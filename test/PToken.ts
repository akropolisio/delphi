import { PTokenContract, PTokenInstance } from "../types/truffle-contracts/index";

// tslint:disable-next-line:no-var-requires
const { BN, constants, expectEvent, expectRevert, shouldFail } = require("@openzeppelin/test-helpers");
// tslint:disable-next-line:no-var-requires
const should = require("chai").should();

const PToken = artifacts.require("PToken");

contract("PToken", async ([_, owner, ...otherAccounts]) => {
    let pToken: PTokenInstance;
  
    beforeEach(async () => {
        pToken = await PToken.new();
        let pt:any = pToken;
        let receipt = pt.methods['initialize(address)'](owner, {from: owner});
    });

    it("should be mintable by owner", async () => {
        let amount = getRandomAmount(1, 1000);
        let receipt = await pToken.mint(owner, amount, {from: owner});
        expectEvent(receipt, 'Transfer', {'from':constants.ZERO_ADDRESS, 'to':owner, 'value':amount});
    });
    it("should not be mintable by others", async () => {
        let amount = getRandomAmount(1, 1000);
        await expectRevert(
            pToken.mint(otherAccounts[0], amount, {from: otherAccounts[0]}), 
            'MinterRole: caller does not have the Minter role'
        );
    });
    it("should be transferable", async () => {
        let amount = getRandomAmount(1, 1000);
        await pToken.mint(otherAccounts[0], amount, {from: owner});
        let receipt = await pToken.transfer(otherAccounts[1], amount, {from: otherAccounts[0]});
        expectEvent(receipt, 'Transfer', {'from':otherAccounts[0], 'to':otherAccounts[1], 'value':amount});
    });
    it("should be burnable", async () => {
        let amount = getRandomAmount(1, 1000);
        await pToken.mint(otherAccounts[0], amount, {from: owner});
        let receipt = await pToken.burn(amount, {from: otherAccounts[0]});
        expectEvent(receipt, 'Transfer', {'from':otherAccounts[0], 'to':constants.ZERO_ADDRESS, 'value':amount});
    });

    function getRandomAmount(min=0, max=1) {
        let rnd = min + (max-min)*Math.random();
        let w3:any = web3;
        return new BN(w3.utils.toWei(String(rnd), 'ether'));
    }
});
