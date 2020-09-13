import { SyncStatus } from './SyncStatus'

export interface SyncResult {
  error_message: null | string
  status: SyncStatus
}
