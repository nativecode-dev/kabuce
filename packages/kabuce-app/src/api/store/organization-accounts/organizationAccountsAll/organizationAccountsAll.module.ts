/* tslint:disable:max-line-length */
/**
 * 1.0.0
 * Api documentation
 * undefined
 */

import { NgModule } from '@angular/core'
import { EffectsModule as NgrxEffectsModule } from '@ngrx/effects'
import { StoreModule as NgrxStoreModule } from '@ngrx/store'

import { OrganizationAccountsService } from '../../../controllers/OrganizationAccounts'
import { FormsSharedModule } from '../../forms-shared.module'
import { OrganizationAccountsAllFormService } from './organizationAccountsAll.service'

import { OrganizationAccountsAllEffects } from './states/effects'
import { OrganizationAccountsAllReducer } from './states/reducers'
import { selectorName } from './states/reducers'

@NgModule({
  imports: [
    FormsSharedModule,
    NgrxStoreModule.forFeature(selectorName, OrganizationAccountsAllReducer),
    NgrxEffectsModule.forFeature([OrganizationAccountsAllEffects]),
  ],
  providers: [OrganizationAccountsService, OrganizationAccountsAllFormService],
})
export class OrganizationAccountsAllModule {}
