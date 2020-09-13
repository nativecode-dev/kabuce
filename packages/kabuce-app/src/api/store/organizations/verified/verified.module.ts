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
import { VerifiedFormService } from './verified.service'

import { VerifiedEffects } from './states/effects'
import { VerifiedReducer } from './states/reducers'
import { selectorName } from './states/reducers'

@NgModule({
  imports: [
    FormsSharedModule,
    NgrxStoreModule.forFeature(selectorName, VerifiedReducer),
    NgrxEffectsModule.forFeature([VerifiedEffects]),
  ],
  providers: [OrganizationsService, VerifiedFormService],
})
export class VerifiedModule {}
