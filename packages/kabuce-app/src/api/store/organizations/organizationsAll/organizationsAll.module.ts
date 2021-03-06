/* tslint:disable:max-line-length */
/**
 * 1.0.0
 * Api documentation
 * undefined
 */

import { NgModule } from '@angular/core'
import { EffectsModule as NgrxEffectsModule } from '@ngrx/effects'
import { StoreModule as NgrxStoreModule } from '@ngrx/store'

import { OrganizationsService } from '../../../controllers/Organizations'
import { FormsSharedModule } from '../../forms-shared.module'

import { OrganizationsAllEffects } from './states/effects'
import { OrganizationsAllReducer } from './states/reducers'
import { selectorName } from './states/reducers'

@NgModule({
  imports: [
    FormsSharedModule,
    NgrxStoreModule.forFeature(selectorName, OrganizationsAllReducer),
    NgrxEffectsModule.forFeature([OrganizationsAllEffects]),
  ],
  providers: [OrganizationsService],
})
export class OrganizationsAllModule {}
