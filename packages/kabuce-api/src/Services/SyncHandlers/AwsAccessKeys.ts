import { SyncHandler } from "../SyncHandler";
import { AccountSync } from "../../Models/AccountSync";
import { Registery } from "../SyncRegistry";
import { SyncComplete } from "../SyncComplete";
import { SyncResult } from "../SyncResult";
import { SyncStatus } from "../SyncStatus";

export interface AwsSyncResult extends SyncResult {
  access_key: string;
  secret_key: string;
}

class AwsAccessKeys implements SyncHandler<AwsSyncResult> {
  async execute(account: Account, account_sync: AccountSync) {
    const result: AwsSyncResult = {
      error_message: null,
      status: SyncStatus.ok,
      access_key: "",
      secret_key: "",
    };

    return result;
  }
}

class AwsAccessKeysComplete implements SyncComplete<SyncResult> {
  async complete(account_sync: AccountSync) {
    const result: SyncResult = {
      error_message: null,
      status: SyncStatus.ok,
    };

    return result;
  }
}

Registery.begin("aws_access_keys", new AwsAccessKeys());
Registery.complete("aws_access_keys", new AwsAccessKeysComplete());
