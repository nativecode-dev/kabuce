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

@Injectable()
export class RootControllerService {
  constructor(private http: HttpClient) {}

  /** http://undefined/swagger/swagger-ui.html#!/RootController/RootController.get */
  version(): Observable<__model.ServerInfo> {
    return this.http.get<__model.ServerInfo>(`/version`)
  }
}
