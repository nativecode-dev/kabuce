/* tslint:disable:max-line-length */
/**
 * 1.0.0
 * Api documentation
 * undefined
 */

import { NgModule } from '@angular/core'
import { EffectsModule as NgrxEffectsModule } from '@ngrx/effects'
import { StoreModule as NgrxStoreModule } from '@ngrx/store'

import { OrganizationLocationsService } from '../../../controllers/OrganizationLocations'
import { FormsSharedModule } from '../../forms-shared.module'
import { OrganizationLocationsPutFormService } from './organizationLocationsPut.service'

import { OrganizationLocationsPutEffects } from './states/effects'
import { OrganizationLocationsPutReducer } from './states/reducers'
import { selectorName } from './states/reducers'

@NgModule({
  imports: [
    FormsSharedModule,
    NgrxStoreModule.forFeature(selectorName, OrganizationLocationsPutReducer),
    NgrxEffectsModule.forFeature([OrganizationLocationsPutEffects]),
  ],
  providers: [OrganizationLocationsService, OrganizationLocationsPutFormService],
})
export class OrganizationLocationsPutModule {}
