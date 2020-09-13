/* tslint:disable:max-line-length */
/**
 * 1.0.0
 * Api documentation
 * undefined
 */

import * as __model from '../model'

export interface CreateOrganization {
  domain: string
  /** format: email */
  email: string
  organization_name: string
  organization_title: string
  /** default:  */
  locations?: __model.Location[]
  verification_code?: string
  password: string
}
