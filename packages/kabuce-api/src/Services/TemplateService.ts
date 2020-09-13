import { Inject, Injectable } from '@tsed/di'
import { AppConfiguration } from '../AppConfiguration'

@Injectable()
export class TemplateService {
  constructor(@Inject(AppConfiguration) private readonly config: AppConfiguration) {}
}
