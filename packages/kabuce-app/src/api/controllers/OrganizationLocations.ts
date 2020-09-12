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

export interface OrganizationLocationsAllParams {
  organization_id: string;
}

export interface OrganizationLocationsPostParams {
  organization_id: string;
  body?: __model.Location;
}

export interface OrganizationLocationsGetParams {
  organization_id: string;
  organization_location_id: string;
}

export interface OrganizationLocationsPutParams {
  organization_id: string;
  organization_location_id: string;
  body?: __model.Location;
}

@Injectable()
export class OrganizationLocationsService {
  constructor(private http: HttpClient) {}

  /** http://undefined/swagger/swagger-ui.html#!/OrganizationLocations/OrganizationLocations.all */
  organizationLocationsAll(params: OrganizationLocationsAllParams): Observable<__model.Location[]> {
    const pathParams = {
      organization_id: params.organization_id,
    };
    return this.http.get<__model.Location[]>(`/orgs/${pathParams.organization_id}/locations`);
  }

  /** http://undefined/swagger/swagger-ui.html#!/OrganizationLocations/OrganizationLocations.post */
  organizationLocationsPost(params: OrganizationLocationsPostParams): Observable<__model.ModelKey> {
    const pathParams = {
      organization_id: params.organization_id,
    };
    const bodyParams = params.body;

    return this.http.post<__model.ModelKey>(`/orgs/${pathParams.organization_id}/locations`, bodyParams || {});
  }

  /** http://undefined/swagger/swagger-ui.html#!/OrganizationLocations/OrganizationLocations.get */
  organizationLocationsGet(params: OrganizationLocationsGetParams): Observable<__model.Location> {
    const pathParams = {
      organization_id: params.organization_id,
      organization_location_id: params.organization_location_id,
    };
    return this.http.get<__model.Location>(`/orgs/${pathParams.organization_id}/locations/${pathParams.organization_location_id}`);
  }

  /** http://undefined/swagger/swagger-ui.html#!/OrganizationLocations/OrganizationLocations.put */
  organizationLocationsPut(params: OrganizationLocationsPutParams): Observable<__model.ModelKey> {
    const pathParams = {
      organization_id: params.organization_id,
      organization_location_id: params.organization_location_id,
    };
    const bodyParams = params.body;

    return this.http.put<__model.ModelKey>(`/orgs/${pathParams.organization_id}/locations/${pathParams.organization_location_id}`, bodyParams || {});
  }
}
