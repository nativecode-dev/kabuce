/* tslint:disable:max-line-length */
/**
 * 1.0.0
 * Api documentation
 * undefined
 */

import {createFeatureSelector} from '@ngrx/store';

import {HttpErrorResponse} from '@angular/common/http';
import * as __model from '../../../../model';
import * as actions from './actions';

export interface OrganizationsAllState {
  data: __model.Organization[] | null;
  loading: boolean;
  error: HttpErrorResponse | null;
}

export const initialOrganizationsAllState: OrganizationsAllState = {
  data: null,
  loading: false,
  error: null,
};

export const selectorName = 'Organizations_OrganizationsAll';
export const getOrganizationsAllStateSelector = createFeatureSelector<OrganizationsAllState>(selectorName);

export function OrganizationsAllReducer(
  state: OrganizationsAllState = initialOrganizationsAllState,
  action: actions.OrganizationsAllAction): OrganizationsAllState {
  switch (action.type) {
    case actions.Actions.START: return {...state, loading: true, error: null};
    case actions.Actions.SUCCESS: return {...state, data: action.payload, loading: false};
    case actions.Actions.ERROR: return {...state, error: action.payload, loading: false};
    default: return state;
  }
}
