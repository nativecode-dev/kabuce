/* tslint:disable:max-line-length */
/**
 * 1.0.0
 * Api documentation
 * undefined
 */

import {NgModule} from '@angular/core';
import {EffectsModule as NgrxEffectsModule} from '@ngrx/effects';
import {StoreModule as NgrxStoreModule} from '@ngrx/store';

import {OrganizationsService} from '../../../controllers/Organizations';
import {FormsSharedModule} from '../../forms-shared.module';
import {OrganizationsGetFormService} from './organizationsGet.service';

import {OrganizationsGetEffects} from './states/effects';
import {OrganizationsGetReducer} from './states/reducers';
import {selectorName} from './states/reducers';

@NgModule({
  imports: [
    FormsSharedModule,
    NgrxStoreModule.forFeature(selectorName, OrganizationsGetReducer),
    NgrxEffectsModule.forFeature([OrganizationsGetEffects]),
  ],
  providers: [
    OrganizationsService,
    OrganizationsGetFormService,
  ],
})
export class OrganizationsGetModule {}
