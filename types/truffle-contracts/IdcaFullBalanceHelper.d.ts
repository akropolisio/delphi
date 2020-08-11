/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import BN from "bn.js";
import { EventData, PastEventOptions } from "web3-eth-contract";

export interface IdcaFullBalanceHelperContract
  extends Truffle.Contract<IdcaFullBalanceHelperInstance> {
  "new"(
    meta?: Truffle.TransactionDetails
  ): Promise<IdcaFullBalanceHelperInstance>;
}

type AllEvents = never;

export interface IdcaFullBalanceHelperInstance
  extends Truffle.ContractInstance {
  getFullAccountBalances: {
    (
      dcaModule: string,
      account: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      dcaModule: string,
      account: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<[string[], BN[]]>;
    sendTransaction(
      dcaModule: string,
      account: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      dcaModule: string,
      account: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  methods: {
    getFullAccountBalances: {
      (
        dcaModule: string,
        account: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        dcaModule: string,
        account: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<[string[], BN[]]>;
      sendTransaction(
        dcaModule: string,
        account: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        dcaModule: string,
        account: string,
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