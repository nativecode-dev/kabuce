/* tslint:disable:max-line-length */
/**
 * 1.0.0
 * Api documentation
 * undefined
 */

import { NgModule } from '@angular/core'
import { EffectsModule as NgrxEffectsModule } from '@ngrx/effects'
import { StoreModule as NgrxStoreModule } from '@ngrx/store'

import { RootControllerService } from '../../../controllers/RootController'
import { FormsSharedModule } from '../../forms-shared.module'

import { VersionEffects } from './states/effects'
import { VersionReducer } from './states/reducers'
import { selectorName } from './states/reducers'

@NgModule({
  imports: [
    FormsSharedModule,
    NgrxStoreModule.forFeature(selectorName, VersionReducer),
    NgrxEffectsModule.forFeature([VersionEffects]),
  ],
  providers: [RootControllerService],
})
export class VersionModule {}
