/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import BN from "bn.js";
import { EventData, PastEventOptions } from "web3-eth-contract";

export interface WhitelistedRoleContract
  extends Truffle.Contract<WhitelistedRoleInstance> {
  "new"(meta?: Truffle.TransactionDetails): Promise<WhitelistedRoleInstance>;
}

export interface WhitelistAdminAdded {
  name: "WhitelistAdminAdded";
  args: {
    account: string;
    0: string;
  };
}

export interface WhitelistAdminRemoved {
  name: "WhitelistAdminRemoved";
  args: {
    account: string;
    0: string;
  };
}

export interface WhitelistedAdded {
  name: "WhitelistedAdded";
  args: {
    account: string;
    0: string;
  };
}

export interface WhitelistedRemoved {
  name: "WhitelistedRemoved";
  args: {
    account: string;
    0: string;
  };
}

type AllEvents =
  | WhitelistAdminAdded
  | WhitelistAdminRemoved
  | WhitelistedAdded
  | WhitelistedRemoved;

export interface WhitelistedRoleInstance extends Truffle.ContractInstance {
  addWhitelistAdmin: {
    (account: string, txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(
      account: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      account: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      account: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  isWhitelistAdmin(
    account: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<boolean>;

  renounceWhitelistAdmin: {
    (txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(txDetails?: Truffle.TransactionDetails): Promise<void>;
    sendTransaction(txDetails?: Truffle.TransactionDetails): Promise<string>;
    estimateGas(txDetails?: Truffle.TransactionDetails): Promise<number>;
  };

  initialize: {
    (sender: string, txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(sender: string, txDetails?: Truffle.TransactionDetails): Promise<void>;
    sendTransaction(
      sender: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      sender: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  isWhitelisted(
    account: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<boolean>;

  addWhitelisted: {
    (account: string, txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(
      account: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      account: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      account: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  removeWhitelisted: {
    (account: string, txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(
      account: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      account: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      account: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  renounceWhitelisted: {
    (txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(txDetails?: Truffle.TransactionDetails): Promise<void>;
    sendTransaction(txDetails?: Truffle.TransactionDetails): Promise<string>;
    estimateGas(txDetails?: Truffle.TransactionDetails): Promise<number>;
  };

  methods: {
    addWhitelistAdmin: {
      (account: string, txDetails?: Truffle.TransactionDetails): Promise<
        Truffle.TransactionResponse<AllEvents>
      >;
      call(
        account: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        account: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        account: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    isWhitelistAdmin(
      account: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<boolean>;

    renounceWhitelistAdmin: {
      (txDetails?: Truffle.TransactionDetails): Promise<
        Truffle.TransactionResponse<AllEvents>
      >;
      call(txDetails?: Truffle.TransactionDetails): Promise<void>;
      sendTransaction(txDetails?: Truffle.TransactionDetails): Promise<string>;
      estimateGas(txDetails?: Truffle.TransactionDetails): Promise<number>;
    };

    initialize: {
      (sender: string, txDetails?: Truffle.TransactionDetails): Promise<
        Truffle.TransactionResponse<AllEvents>
      >;
      call(
        sender: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        sender: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        sender: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    isWhitelisted(
      account: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<boolean>;

    addWhitelisted: {
      (account: string, txDetails?: Truffle.TransactionDetails): Promise<
        Truffle.TransactionResponse<AllEvents>
      >;
      call(
        account: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        account: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        account: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    removeWhitelisted: {
      (account: string, txDetails?: Truffle.TransactionDetails): Promise<
        Truffle.TransactionResponse<AllEvents>
      >;
      call(
        account: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        account: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        account: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    renounceWhitelisted: {
      (txDetails?: Truffle.TransactionDetails): Promise<
        Truffle.TransactionResponse<AllEvents>
      >;
      call(txDetails?: Truffle.TransactionDetails): Promise<void>;
      sendTransaction(txDetails?: Truffle.TransactionDetails): Promise<string>;
      estimateGas(txDetails?: Truffle.TransactionDetails): Promise<number>;
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