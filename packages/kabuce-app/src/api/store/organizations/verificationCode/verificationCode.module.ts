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
import { VerificationCodeFormService } from './verificationCode.service'

import { VerificationCodeEffects } from './states/effects'
import { VerificationCodeReducer } from './states/reducers'
import { selectorName } from './states/reducers'

@NgModule({
  imports: [
    FormsSharedModule,
    NgrxStoreModule.forFeature(selectorName, VerificationCodeReducer),
    NgrxEffectsModule.forFeature([VerificationCodeEffects]),
  ],
  providers: [OrganizationsService, VerificationCodeFormService],
})
export class VerificationCodeModule {}
