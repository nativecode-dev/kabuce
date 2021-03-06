/* tslint:disable:max-line-length */
/**
 * 1.0.0
 * Api documentation
 * undefined
 */

import { createFeatureSelector } from '@ngrx/store'

import { HttpErrorResponse } from '@angular/common/http'
import * as actions from './actions'

export interface OrganizationAccountsGetState {
  data: void | null
  loading: boolean
  error: HttpErrorResponse | null
}

export const initialOrganizationAccountsGetState: OrganizationAccountsGetState = {
  data: null,
  loading: false,
  error: null,
}

export const selectorName = 'OrganizationAccounts_OrganizationAccountsGet'
export const getOrganizationAccountsGetStateSelector = createFeatureSelector<OrganizationAccountsGetState>(selectorName)

export function OrganizationAccountsGetReducer(
  state: OrganizationAccountsGetState = initialOrganizationAccountsGetState,
  action: actions.OrganizationAccountsGetAction,
): OrganizationAccountsGetState {
  switch (action.type) {
    case actions.Actions.START:
      return { ...state, loading: true, error: null }
    case actions.Actions.SUCCESS:
      return { ...state, data: action.payload, loading: false }
    case actions.Actions.ERROR:
      return { ...state, error: action.payload, loading: false }
    default:
      return state
  }
}
