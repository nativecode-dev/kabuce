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
import { OrganizationAccountsPostFormService } from './organizationAccountsPost.service'

import { OrganizationAccountsPostEffects } from './states/effects'
import { OrganizationAccountsPostReducer } from './states/reducers'
import { selectorName } from './states/reducers'

@NgModule({
  imports: [
    FormsSharedModule,
    NgrxStoreModule.forFeature(selectorName, OrganizationAccountsPostReducer),
    NgrxEffectsModule.forFeature([OrganizationAccountsPostEffects]),
  ],
  providers: [OrganizationAccountsService, OrganizationAccountsPostFormService],
})
export class OrganizationAccountsPostModule {}
