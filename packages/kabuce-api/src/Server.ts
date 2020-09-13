import '@tsed/ajv'
import '@tsed/swagger'

import { json, urlencoded } from 'express'

import * as compress from 'compression'
import * as cookieParser from 'cookie-parser'
import * as methodOverride from 'method-override'

import { GlobalAcceptMimesMiddleware } from '@tsed/platform-express'
import { Configuration, Inject, PlatformApplication } from '@tsed/common'

const root = __dirname

@Configuration({
  rootDir: root,
  acceptMimes: ['application/json', 'text/json'],
  mount: { '/': [`${root}/Controllers/**/*.ts`] },
  swagger: [{ path: '/api-docs' }],

  ajv: {
    errorFormatter: (error) => `At ${error.modelName}${error.dataPath}, value '${error.data}' ${error.message}`,
    verbose: true,
  },
})
export class Server {
  @Inject()
  app: PlatformApplication

  @Configuration()
  settings: Configuration

  /**
   * This method let you configure the express middleware required by your application to works.
   * @returns {Server}
   */
  public $beforeRoutesInit(): void | Promise<any> {
    this.app
      .use(GlobalAcceptMimesMiddleware)
      .use(cookieParser())
      .use(compress({}))
      .use(methodOverride())
      .use(json())
      .use(urlencoded())
  }
}
