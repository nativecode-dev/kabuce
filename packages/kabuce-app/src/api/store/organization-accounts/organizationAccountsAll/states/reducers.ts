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

export interface OrganizationAccountsAllState {
  data: __model.Account[] | null;
  loading: boolean;
  error: HttpErrorResponse | null;
}

export const initialOrganizationAccountsAllState: OrganizationAccountsAllState = {
  data: null,
  loading: false,
  error: null,
};

export const selectorName = 'OrganizationAccounts_OrganizationAccountsAll';
export const getOrganizationAccountsAllStateSelector = createFeatureSelector<OrganizationAccountsAllState>(selectorName);

export function OrganizationAccountsAllReducer(
  state: OrganizationAccountsAllState = initialOrganizationAccountsAllState,
  action: actions.OrganizationAccountsAllAction): OrganizationAccountsAllState {
  switch (action.type) {
    case actions.Actions.START: return {...state, loading: true, error: null};
    case actions.Actions.SUCCESS: return {...state, data: action.payload, loading: false};
    case actions.Actions.ERROR: return {...state, error: action.payload, loading: false};
    default: return state;
  }
}
