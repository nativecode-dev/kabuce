import { AccountSync } from "../Models/AccountSync";
import { SyncResult } from "./SyncResult";

export interface SyncHandler<T extends SyncResult> {
  execute(account: Account, account_sync: AccountSync): Promise<T>;
}
