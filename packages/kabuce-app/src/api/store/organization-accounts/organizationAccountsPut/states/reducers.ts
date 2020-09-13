/* tslint:disable:max-line-length */
/**
 * 1.0.0
 * Api documentation
 * undefined
 */

import { createFeatureSelector } from '@ngrx/store'

import { HttpErrorResponse } from '@angular/common/http'
import * as __model from '../../../../model'
import * as actions from './actions'

export interface OrganizationAccountsPutState {
  data: __model.ModelKey | null
  loading: boolean
  error: HttpErrorResponse | null
}

export const initialOrganizationAccountsPutState: OrganizationAccountsPutState = {
  data: null,
  loading: false,
  error: null,
}

export const selectorName = 'OrganizationAccounts_OrganizationAccountsPut'
export const getOrganizationAccountsPutStateSelector = createFeatureSelector<OrganizationAccountsPutState>(selectorName)

export function OrganizationAccountsPutReducer(
  state: OrganizationAccountsPutState = initialOrganizationAccountsPutState,
  action: actions.OrganizationAccountsPutAction,
): OrganizationAccountsPutState {
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
