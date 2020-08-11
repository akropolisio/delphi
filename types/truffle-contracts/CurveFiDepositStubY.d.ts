/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import BN from "bn.js";
import { EventData, PastEventOptions } from "web3-eth-contract";

export interface CurveFiDepositStubYContract
  extends Truffle.Contract<CurveFiDepositStubYInstance> {
  "new"(
    meta?: Truffle.TransactionDetails
  ): Promise<CurveFiDepositStubYInstance>;
}

export interface OwnershipTransferred {
  name: "OwnershipTransferred";
  args: {
    previousOwner: string;
    newOwner: string;
    0: string;
    1: string;
  };
}

type AllEvents = OwnershipTransferred;

export interface CurveFiDepositStubYInstance extends Truffle.ContractInstance {
  N_COINS(txDetails?: Truffle.TransactionDetails): Promise<BN>;

  curveFiSwap(txDetails?: Truffle.TransactionDetails): Promise<string>;

  /**
   * Returns true if the caller is the current owner.
   */
  isOwner(txDetails?: Truffle.TransactionDetails): Promise<boolean>;

  /**
   * Returns the address of the current owner.
   */
  owner(txDetails?: Truffle.TransactionDetails): Promise<string>;

  /**
   * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner.     * > Note: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
   */
  renounceOwnership: {
    (txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(txDetails?: Truffle.TransactionDetails): Promise<void>;
    sendTransaction(txDetails?: Truffle.TransactionDetails): Promise<string>;
    estimateGas(txDetails?: Truffle.TransactionDetails): Promise<number>;
  };

  token(txDetails?: Truffle.TransactionDetails): Promise<string>;

  /**
   * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
   */
  transferOwnership: {
    (newOwner: string, txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(
      newOwner: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      newOwner: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      newOwner: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  add_liquidity: {
    (
      uamounts: (number | BN | string)[],
      min_mint_amount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      uamounts: (number | BN | string)[],
      min_mint_amount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      uamounts: (number | BN | string)[],
      min_mint_amount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      uamounts: (number | BN | string)[],
      min_mint_amount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  remove_liquidity: {
    (
      _amount: number | BN | string,
      min_uamounts: (number | BN | string)[],
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      _amount: number | BN | string,
      min_uamounts: (number | BN | string)[],
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _amount: number | BN | string,
      min_uamounts: (number | BN | string)[],
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _amount: number | BN | string,
      min_uamounts: (number | BN | string)[],
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  remove_liquidity_imbalance: {
    (
      uamounts: (number | BN | string)[],
      max_burn_amount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      uamounts: (number | BN | string)[],
      max_burn_amount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      uamounts: (number | BN | string)[],
      max_burn_amount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      uamounts: (number | BN | string)[],
      max_burn_amount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  withdraw_donated_dust: {
    (txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(txDetails?: Truffle.TransactionDetails): Promise<void>;
    sendTransaction(txDetails?: Truffle.TransactionDetails): Promise<string>;
    estimateGas(txDetails?: Truffle.TransactionDetails): Promise<number>;
  };

  coins(
    i: number | BN | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<string>;

  underlying_coins(
    i: number | BN | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<string>;

  curve(txDetails?: Truffle.TransactionDetails): Promise<string>;

  calc_withdraw_one_coin(
    _token_amount: number | BN | string,
    i: number | BN | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BN>;

  methods: {
    N_COINS(txDetails?: Truffle.TransactionDetails): Promise<BN>;

    curveFiSwap(txDetails?: Truffle.TransactionDetails): Promise<string>;

    /**
     * Returns true if the caller is the current owner.
     */
    isOwner(txDetails?: Truffle.TransactionDetails): Promise<boolean>;

    /**
     * Returns the address of the current owner.
     */
    owner(txDetails?: Truffle.TransactionDetails): Promise<string>;

    /**
     * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner.     * > Note: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
     */
    renounceOwnership: {
      (txDetails?: Truffle.TransactionDetails): Promise<
        Truffle.TransactionResponse<AllEvents>
      >;
      call(txDetails?: Truffle.TransactionDetails): Promise<void>;
      sendTransaction(txDetails?: Truffle.TransactionDetails): Promise<string>;
      estimateGas(txDetails?: Truffle.TransactionDetails): Promise<number>;
    };

    token(txDetails?: Truffle.TransactionDetails): Promise<string>;

    /**
     * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
     */
    transferOwnership: {
      (newOwner: string, txDetails?: Truffle.TransactionDetails): Promise<
        Truffle.TransactionResponse<AllEvents>
      >;
      call(
        newOwner: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        newOwner: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        newOwner: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    add_liquidity: {
      (
        uamounts: (number | BN | string)[],
        min_mint_amount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        uamounts: (number | BN | string)[],
        min_mint_amount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        uamounts: (number | BN | string)[],
        min_mint_amount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        uamounts: (number | BN | string)[],
        min_mint_amount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    remove_liquidity: {
      (
        _amount: number | BN | string,
        min_uamounts: (number | BN | string)[],
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        _amount: number | BN | string,
        min_uamounts: (number | BN | string)[],
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        _amount: number | BN | string,
        min_uamounts: (number | BN | string)[],
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _amount: number | BN | string,
        min_uamounts: (number | BN | string)[],
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    remove_liquidity_imbalance: {
      (
        uamounts: (number | BN | string)[],
        max_burn_amount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        uamounts: (number | BN | string)[],
        max_burn_amount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        uamounts: (number | BN | string)[],
        max_burn_amount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        uamounts: (number | BN | string)[],
        max_burn_amount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    withdraw_donated_dust: {
      (txDetails?: Truffle.TransactionDetails): Promise<
        Truffle.TransactionResponse<AllEvents>
      >;
      call(txDetails?: Truffle.TransactionDetails): Promise<void>;
      sendTransaction(txDetails?: Truffle.TransactionDetails): Promise<string>;
      estimateGas(txDetails?: Truffle.TransactionDetails): Promise<number>;
    };

    coins(
      i: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;

    underlying_coins(
      i: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;

    curve(txDetails?: Truffle.TransactionDetails): Promise<string>;

    calc_withdraw_one_coin(
      _token_amount: number | BN | string,
      i: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;

    "initialize()": {
      (txDetails?: Truffle.TransactionDetails): Promise<
        Truffle.TransactionResponse<AllEvents>
      >;
      call(txDetails?: Truffle.TransactionDetails): Promise<void>;
      sendTransaction(txDetails?: Truffle.TransactionDetails): Promise<string>;
      estimateGas(txDetails?: Truffle.TransactionDetails): Promise<number>;
    };

    "initialize(address)": {
      (_curveFiSwap: string, txDetails?: Truffle.TransactionDetails): Promise<
        Truffle.TransactionResponse<AllEvents>
      >;
      call(
        _curveFiSwap: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        _curveFiSwap: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _curveFiSwap: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    "remove_liquidity_one_coin(uint256,int128,uint256)": {
      (
        _token_amount: number | BN | string,
        i: number | BN | string,
        min_uamount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        _token_amount: number | BN | string,
        i: number | BN | string,
        min_uamount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        _token_amount: number | BN | string,
        i: number | BN | string,
        min_uamount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _token_amount: number | BN | string,
        i: number | BN | string,
        min_uamount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    "remove_liquidity_one_coin(uint256,int128,uint256,bool)": {
      (
        _token_amount: number | BN | string,
        _i: number | BN | string,
        min_uamount: number | BN | string,
        donate_dust: boolean,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        _token_amount: number | BN | string,
        _i: number | BN | string,
        min_uamount: number | BN | string,
        donate_dust: boolean,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        _token_amount: number | BN | string,
        _i: number | BN | string,
        min_uamount: number | BN | string,
        donate_dust: boolean,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _token_amount: number | BN | string,
        _i: number | BN | string,
        min_uamount: number | BN | string,
        donate_dust: boolean,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };
  };

  getPastEvents(event: string): Promise<EventData[]>;
  getPastEvents(
    event: string,
    options: PastEventOptions,
    callback: (error: Error, event: EventData) => void
  ): Promise<EventData[]>;
  getPastEvents(event: string, options: PastEventOptions): Promise<EventData[]>;
  getPastEvents(
    event: string,
    callback: (error: Error, event: EventData) => void
  ): Promise<EventData[]>;
}