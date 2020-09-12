/* tslint:disable:max-line-length max-classes-per-file */
/**
 * 1.0.0
 * Api documentation
 * undefined
 */

import {HttpErrorResponse} from '@angular/common/http';
import {Action} from '@ngrx/store';
import {OrganizationLocationsAllParams} from '../../../../controllers/OrganizationLocations';
import * as __model from '../../../../model';

export enum Actions {
  START = '[OrganizationLocations organizationLocationsAll] Start',
  SUCCESS = '[OrganizationLocations organizationLocationsAll] Success',
  ERROR = '[OrganizationLocations organizationLocationsAll] Error',
}

export class Start implements Action {
  readonly type = Actions.START;
  constructor(public payload: OrganizationLocationsAllParams) {}
}

export class Success implements Action {
  readonly type = Actions.SUCCESS;
  constructor(public payload: __model.Location[]) {}
}

export class Error implements Action {
  readonly type = Actions.ERROR;
  constructor(public payload: HttpErrorResponse) {}
}

export type OrganizationLocationsAllAction = Start | Success | Error;
