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
import { OrganizationLocationsAllFormService } from './organizationLocationsAll.service'

import { OrganizationLocationsAllEffects } from './states/effects'
import { OrganizationLocationsAllReducer } from './states/reducers'
import { selectorName } from './states/reducers'

@NgModule({
  imports: [
    FormsSharedModule,
    NgrxStoreModule.forFeature(selectorName, OrganizationLocationsAllReducer),
    NgrxEffectsModule.forFeature([OrganizationLocationsAllEffects]),
  ],
  providers: [OrganizationLocationsService, OrganizationLocationsAllFormService],
})
export class OrganizationLocationsAllModule {}
