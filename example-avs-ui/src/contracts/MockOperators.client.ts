/**
 * This file was automatically generated by @cosmwasm/ts-codegen@1.11.1.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run the @cosmwasm/ts-codegen generate command to regenerate this file.
 */

import { CosmWasmClient } from "@cosmjs/cosmwasm-stargate";
import {
  AllVotersResponse,
  TotalPowerResponse,
  VotingPowerResponse,
} from "./MockOperators.types";
export interface MockOperatorsReadOnlyInterface {
  contractAddress: string;
  votingPowerAtHeight: ({
    address,
    height,
  }: {
    address: string;
    height?: number;
  }) => Promise<VotingPowerResponse>;
  totalPowerAtHeight: ({
    height,
  }: {
    height?: number;
  }) => Promise<TotalPowerResponse>;
  allVoters: () => Promise<AllVotersResponse>;
}
export class MockOperatorsQueryClient
  implements MockOperatorsReadOnlyInterface
{
  client: CosmWasmClient;
  contractAddress: string;
  constructor(client: CosmWasmClient, contractAddress: string) {
    this.client = client;
    this.contractAddress = contractAddress;
    this.votingPowerAtHeight = this.votingPowerAtHeight.bind(this);
    this.totalPowerAtHeight = this.totalPowerAtHeight.bind(this);
    this.allVoters = this.allVoters.bind(this);
  }
  votingPowerAtHeight = async ({
    address,
    height,
  }: {
    address: string;
    height?: number;
  }): Promise<VotingPowerResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      voting_power_at_height: {
        address,
        height,
      },
    });
  };
  totalPowerAtHeight = async ({
    height,
  }: {
    height?: number;
  }): Promise<TotalPowerResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      total_power_at_height: {
        height,
      },
    });
  };
  allVoters = async (): Promise<AllVotersResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      all_voters: {},
    });
  };
}
