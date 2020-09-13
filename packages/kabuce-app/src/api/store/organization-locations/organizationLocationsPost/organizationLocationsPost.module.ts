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
import { OrganizationLocationsPostFormService } from './organizationLocationsPost.service'

import { OrganizationLocationsPostEffects } from './states/effects'
import { OrganizationLocationsPostReducer } from './states/reducers'
import { selectorName } from './states/reducers'

@NgModule({
  imports: [
    FormsSharedModule,
    NgrxStoreModule.forFeature(selectorName, OrganizationLocationsPostReducer),
    NgrxEffectsModule.forFeature([OrganizationLocationsPostEffects]),
  ],
  providers: [OrganizationLocationsService, OrganizationLocationsPostFormService],
})
export class OrganizationLocationsPostModule {}
