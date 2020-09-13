/* tslint:disable:max-line-length */
/**
 * 1.0.0
 * Api documentation
 * undefined
 */

import { NgModule } from '@angular/core'
import { EffectsModule as NgrxEffectsModule } from '@ngrx/effects'
import { StoreModule as NgrxStoreModule } from '@ngrx/store'

import { OrganizationTemplatesService } from '../../../controllers/OrganizationTemplates'
import { FormsSharedModule } from '../../forms-shared.module'
import { OrganizationTemplatesPostFormService } from './organizationTemplatesPost.service'

import { OrganizationTemplatesPostEffects } from './states/effects'
import { OrganizationTemplatesPostReducer } from './states/reducers'
import { selectorName } from './states/reducers'

@NgModule({
  imports: [
    FormsSharedModule,
    NgrxStoreModule.forFeature(selectorName, OrganizationTemplatesPostReducer),
    NgrxEffectsModule.forFeature([OrganizationTemplatesPostEffects]),
  ],
  providers: [OrganizationTemplatesService, OrganizationTemplatesPostFormService],
})
export class OrganizationTemplatesPostModule {}
