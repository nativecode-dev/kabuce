/* tslint:disable:max-line-length */
/**
 * 1.0.0
 * Api documentation
 * undefined
 */

import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import * as __model from '../model';

export interface OrganizationsPostParams {
  body?: __model.CreateOrganization;
}

export interface OrganizationsGetParams {
  organization_id: string;
}

export interface OrganizationsPutParams {
  organization_id: string;
  body?: __model.CreateOrganization;
}

export interface VerifiedParams {
  organization_id: string;
}

export interface VerifyParams {
  organization_id: string;
}

export interface VerificationCodeParams {
  organization_id: string;
}

@Injectable()
export class OrganizationsService {
  constructor(private http: HttpClient) {}

  /** http://undefined/swagger/swagger-ui.html#!/Organizations/Organizations.all */
  organizationsAll(): Observable<__model.Organization[]> {
    return this.http.get<__model.Organization[]>(`/orgs`);
  }

  /** http://undefined/swagger/swagger-ui.html#!/Organizations/Organizations.post */
  organizationsPost(params: OrganizationsPostParams): Observable<__model.Organization> {
    const bodyParams = params.body;

    return this.http.post<__model.Organization>(`/orgs`, bodyParams || {});
  }

  /** http://undefined/swagger/swagger-ui.html#!/Organizations/Organizations.get */
  organizationsGet(params: OrganizationsGetParams): Observable<__model.Organization> {
    const pathParams = {
      organization_id: params.organization_id,
    };
    return this.http.get<__model.Organization>(`/orgs/${pathParams.organization_id}`);
  }

  /** http://undefined/swagger/swagger-ui.html#!/Organizations/Organizations.put */
  organizationsPut(params: OrganizationsPutParams): Observable<__model.Organization> {
    const pathParams = {
      organization_id: params.organization_id,
    };
    const bodyParams = params.body;

    return this.http.put<__model.Organization>(`/orgs/${pathParams.organization_id}`, bodyParams || {});
  }

  /** http://undefined/swagger/swagger-ui.html#!/Organizations/Organizations.verified */
  verified(params: VerifiedParams): Observable<boolean> {
    const pathParams = {
      organization_id: params.organization_id,
    };
    return this.http.get<boolean>(`/orgs/${pathParams.organization_id}/verified`);
  }

  /** http://undefined/swagger/swagger-ui.html#!/Organizations/Organizations.verify */
  verify(params: VerifyParams): Observable<__model.Organizations> {
    const pathParams = {
      organization_id: params.organization_id,
    };
    return this.http.put<__model.Organizations>(`/orgs/${pathParams.organization_id}/verify`, {});
  }

  /** http://undefined/swagger/swagger-ui.html#!/Organizations/Organizations.verification_code */
  verificationCode(params: VerificationCodeParams): Observable<string> {
    const pathParams = {
      organization_id: params.organization_id,
    };
    return this.http.get<string>(`/orgs/${pathParams.organization_id}/verification_code`);
  }
}
