/**
 * This file was automatically generated by @cosmwasm/ts-codegen@1.11.1.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run the @cosmwasm/ts-codegen generate command to regenerate this file.
 */

import {
  CosmWasmClient,
  SigningCosmWasmClient,
  ExecuteResult,
} from "@cosmjs/cosmwasm-stargate";
import { Coin, StdFee } from "@cosmjs/amino";
import {
  TaskId,
  ConfigResponse,
  NullableOperatorVoteInfoResponse,
  NullableTaskInfoResponse,
} from "./VerifierSimple.types";
export interface VerifierSimpleReadOnlyInterface {
  contractAddress: string;
  config: () => Promise<ConfigResponse>;
  taskInfo: ({
    taskContract,
    taskId,
  }: {
    taskContract: string;
    taskId: TaskId;
  }) => Promise<NullableTaskInfoResponse>;
  operatorVote: ({
    operator,
    taskContract,
    taskId,
  }: {
    operator: string;
    taskContract: string;
    taskId: TaskId;
  }) => Promise<NullableOperatorVoteInfoResponse>;
}
export class VerifierSimpleQueryClient
  implements VerifierSimpleReadOnlyInterface
{
  client: CosmWasmClient;
  contractAddress: string;
  constructor(client: CosmWasmClient, contractAddress: string) {
    this.client = client;
    this.contractAddress = contractAddress;
    this.config = this.config.bind(this);
    this.taskInfo = this.taskInfo.bind(this);
    this.operatorVote = this.operatorVote.bind(this);
  }
  config = async (): Promise<ConfigResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      config: {},
    });
  };
  taskInfo = async ({
    taskContract,
    taskId,
  }: {
    taskContract: string;
    taskId: TaskId;
  }): Promise<NullableTaskInfoResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      task_info: {
        task_contract: taskContract,
        task_id: taskId,
      },
    });
  };
  operatorVote = async ({
    operator,
    taskContract,
    taskId,
  }: {
    operator: string;
    taskContract: string;
    taskId: TaskId;
  }): Promise<NullableOperatorVoteInfoResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      operator_vote: {
        operator,
        task_contract: taskContract,
        task_id: taskId,
      },
    });
  };
}
export interface VerifierSimpleInterface
  extends VerifierSimpleReadOnlyInterface {
  contractAddress: string;
  sender: string;
  executedTask: (
    {
      result,
      taskId,
      taskQueueContract,
    }: {
      result: string;
      taskId: TaskId;
      taskQueueContract: string;
    },
    fee?: number | StdFee | "auto",
    memo?: string,
    _funds?: Coin[]
  ) => Promise<ExecuteResult>;
}
export class VerifierSimpleClient
  extends VerifierSimpleQueryClient
  implements VerifierSimpleInterface
{
  client: SigningCosmWasmClient;
  sender: string;
  contractAddress: string;
  constructor(
    client: SigningCosmWasmClient,
    sender: string,
    contractAddress: string
  ) {
    super(client, contractAddress);
    this.client = client;
    this.sender = sender;
    this.contractAddress = contractAddress;
    this.executedTask = this.executedTask.bind(this);
  }
  executedTask = async (
    {
      result,
      taskId,
      taskQueueContract,
    }: {
      result: string;
      taskId: TaskId;
      taskQueueContract: string;
    },
    fee: number | StdFee | "auto" = "auto",
    memo?: string,
    _funds?: Coin[]
  ): Promise<ExecuteResult> => {
    return await this.client.execute(
      this.sender,
      this.contractAddress,
      {
        executed_task: {
          result,
          task_id: taskId,
          task_queue_contract: taskQueueContract,
        },
      },
      fee,
      memo,
      _funds
    );
  };
}
