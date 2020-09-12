/* tslint:disable:max-line-length */
/**
 * 1.0.0
 * Api documentation
 * undefined
 */

import {createFeatureSelector} from '@ngrx/store';

import {HttpErrorResponse} from '@angular/common/http';
import * as actions from './actions';

export interface OrganizationTemplatesPutState {
  data: string | null;
  loading: boolean;
  error: HttpErrorResponse | null;
}

export const initialOrganizationTemplatesPutState: OrganizationTemplatesPutState = {
  data: null,
  loading: false,
  error: null,
};

export const selectorName = 'OrganizationTemplates_OrganizationTemplatesPut';
export const getOrganizationTemplatesPutStateSelector = createFeatureSelector<OrganizationTemplatesPutState>(selectorName);

export function OrganizationTemplatesPutReducer(
  state: OrganizationTemplatesPutState = initialOrganizationTemplatesPutState,
  action: actions.OrganizationTemplatesPutAction): OrganizationTemplatesPutState {
  switch (action.type) {
    case actions.Actions.START: return {...state, loading: true, error: null};
    case actions.Actions.SUCCESS: return {...state, data: action.payload, loading: false};
    case actions.Actions.ERROR: return {...state, error: action.payload, loading: false};
    default: return state;
  }
}
