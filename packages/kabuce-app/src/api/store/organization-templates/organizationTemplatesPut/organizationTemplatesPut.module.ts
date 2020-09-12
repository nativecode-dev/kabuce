/* tslint:disable:max-line-length */
/**
 * 1.0.0
 * Api documentation
 * undefined
 */

import {NgModule} from '@angular/core';
import {EffectsModule as NgrxEffectsModule} from '@ngrx/effects';
import {StoreModule as NgrxStoreModule} from '@ngrx/store';

import {OrganizationTemplatesService} from '../../../controllers/OrganizationTemplates';
import {FormsSharedModule} from '../../forms-shared.module';
import {OrganizationTemplatesPutFormService} from './organizationTemplatesPut.service';

import {OrganizationTemplatesPutEffects} from './states/effects';
import {OrganizationTemplatesPutReducer} from './states/reducers';
import {selectorName} from './states/reducers';

@NgModule({
  imports: [
    FormsSharedModule,
    NgrxStoreModule.forFeature(selectorName, OrganizationTemplatesPutReducer),
    NgrxEffectsModule.forFeature([OrganizationTemplatesPutEffects]),
  ],
  providers: [
    OrganizationTemplatesService,
    OrganizationTemplatesPutFormService,
  ],
})
export class OrganizationTemplatesPutModule {}
