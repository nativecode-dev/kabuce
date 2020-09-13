/* tslint:disable:max-line-length */
/**
 * 1.0.0
 * Api documentation
 * undefined
 */

import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'

import * as __model from '../model'

export interface OrganizationAccountsAllParams {
  organization_id: string
}

export interface OrganizationAccountsPostParams {
  organization_id: string
  body?: __model.Account
}

export interface OrganizationAccountsGetParams {
  organization_id: string
  account_id: string
}

export interface OrganizationAccountsPutParams {
  organization_id: string
  account_id: string
  body?: __model.Account
}

@Injectable()
export class OrganizationAccountsService {
  constructor(private http: HttpClient) {}

  /** http://undefined/swagger/swagger-ui.html#!/OrganizationAccounts/OrganizationAccounts.all */
  organizationAccountsAll(params: OrganizationAccountsAllParams): Observable<__model.Account[]> {
    const pathParams = {
      organization_id: params.organization_id,
    }
    return this.http.get<__model.Account[]>(`/orgs/${pathParams.organization_id}/accounts`)
  }

  /** http://undefined/swagger/swagger-ui.html#!/OrganizationAccounts/OrganizationAccounts.post */
  organizationAccountsPost(params: OrganizationAccountsPostParams): Observable<__model.ModelKey> {
    const pathParams = {
      organization_id: params.organization_id,
    }
    const bodyParams = params.body

    return this.http.post<__model.ModelKey>(`/orgs/${pathParams.organization_id}/accounts`, bodyParams || {})
  }

  /** http://undefined/swagger/swagger-ui.html#!/OrganizationAccounts/OrganizationAccounts.get */
  organizationAccountsGet(params: OrganizationAccountsGetParams): Observable<void> {
    const pathParams = {
      organization_id: params.organization_id,
      account_id: params.account_id,
    }
    return this.http.get<void>(`/orgs/${pathParams.organization_id}/accounts/${pathParams.account_id}`)
  }

  /** http://undefined/swagger/swagger-ui.html#!/OrganizationAccounts/OrganizationAccounts.put */
  organizationAccountsPut(params: OrganizationAccountsPutParams): Observable<__model.ModelKey> {
    const pathParams = {
      organization_id: params.organization_id,
      account_id: params.account_id,
    }
    const bodyParams = params.body

    return this.http.put<__model.ModelKey>(
      `/orgs/${pathParams.organization_id}/accounts/${pathParams.account_id}`,
      bodyParams || {},
    )
  }
}
