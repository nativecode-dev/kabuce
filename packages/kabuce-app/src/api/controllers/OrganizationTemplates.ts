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

export interface OrganizationTemplatesAllParams {
  organization_id: string
}

export interface OrganizationTemplatesPostParams {
  organization_id: string
  body?: __model.Template
}

export interface OrganizationTemplatesPutParams {
  organization_id: string
  template_id: string
  body?: object
}

@Injectable()
export class OrganizationTemplatesService {
  constructor(private http: HttpClient) {}

  /** http://undefined/swagger/swagger-ui.html#!/OrganizationTemplates/OrganizationTemplates.all */
  organizationTemplatesAll(params: OrganizationTemplatesAllParams): Observable<__model.Template[]> {
    const pathParams = {
      organization_id: params.organization_id,
    }
    return this.http.get<__model.Template[]>(`/orgs/${pathParams.organization_id}/templates`)
  }

  /** http://undefined/swagger/swagger-ui.html#!/OrganizationTemplates/OrganizationTemplates.post */
  organizationTemplatesPost(params: OrganizationTemplatesPostParams): Observable<__model.Template> {
    const pathParams = {
      organization_id: params.organization_id,
    }
    const bodyParams = params.body

    return this.http.post<__model.Template>(`/orgs/${pathParams.organization_id}/templates`, bodyParams || {})
  }

  /** http://undefined/swagger/swagger-ui.html#!/OrganizationTemplates/OrganizationTemplates.put */
  organizationTemplatesPut(params: OrganizationTemplatesPutParams): Observable<string> {
    const pathParams = {
      organization_id: params.organization_id,
      template_id: params.template_id,
    }
    const bodyParams = params.body

    return this.http.put<string>(
      `/orgs/${pathParams.organization_id}/templates/${pathParams.template_id}`,
      bodyParams || {},
    )
  }
}
