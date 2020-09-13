import { Inject } from '@tsed/di'

import { Account } from './Account'
import { Collection } from './Common/Collection'
import { AppConfiguration } from '../AppConfiguration'

export class Accounts extends Collection<Account> {
  constructor(@Inject(AppConfiguration) config: AppConfiguration) {
    super(Collection.connection_string(config, 'account'))
  }
}
