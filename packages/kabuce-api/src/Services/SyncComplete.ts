import { SyncResult } from './SyncResult'
import { AccountSync } from '../Models/AccountSync'

export interface SyncComplete<T extends SyncResult> {
  complete(account_sync: AccountSync): Promise<T>
}
