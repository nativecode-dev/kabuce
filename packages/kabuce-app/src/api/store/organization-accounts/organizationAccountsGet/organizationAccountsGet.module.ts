/* tslint:disable:max-line-length */
/**
 * 1.0.0
 * Api documentation
 * undefined
 */

import {NgModule} from '@angular/core';
import {EffectsModule as NgrxEffectsModule} from '@ngrx/effects';
import {StoreModule as NgrxStoreModule} from '@ngrx/store';

import {OrganizationAccountsService} from '../../../controllers/OrganizationAccounts';
import {FormsSharedModule} from '../../forms-shared.module';
import {OrganizationAccountsGetFormService} from './organizationAccountsGet.service';

import {OrganizationAccountsGetEffects} from './states/effects';
import {OrganizationAccountsGetReducer} from './states/reducers';
import {selectorName} from './states/reducers';

@NgModule({
  imports: [
    FormsSharedModule,
    NgrxStoreModule.forFeature(selectorName, OrganizationAccountsGetReducer),
    NgrxEffectsModule.forFeature([OrganizationAccountsGetEffects]),
  ],
  providers: [
    OrganizationAccountsService,
    OrganizationAccountsGetFormService,
  ],
})
export class OrganizationAccountsGetModule {}
