/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import BN from "bn.js";
import { EventData, PastEventOptions } from "web3-eth-contract";

export interface ICurveFiRewardsYContract
  extends Truffle.Contract<ICurveFiRewardsYInstance> {
  "new"(meta?: Truffle.TransactionDetails): Promise<ICurveFiRewardsYInstance>;
}

type AllEvents = never;

export interface ICurveFiRewardsYInstance extends Truffle.ContractInstance {
  yfi(txDetails?: Truffle.TransactionDetails): Promise<string>;

  methods: {
    yfi(txDetails?: Truffle.TransactionDetails): Promise<string>;
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