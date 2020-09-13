import { SyncComplete } from './SyncComplete'
import { SyncHandler } from './SyncHandler'
import { SyncResult } from './SyncResult'

class SyncRegistry {
  private readonly completion = new Map<string, SyncComplete<SyncResult>>()
  private readonly handlers = new Map<string, SyncHandler<SyncResult>>()

  begin(name: string, handler: SyncHandler<SyncResult>) {
    this.handlers.set(name, handler)
  }

  complete(name: string, complete: SyncComplete<SyncResult>) {
    this.completion.set(name, complete)
  }
}

export const Registery = new SyncRegistry()
