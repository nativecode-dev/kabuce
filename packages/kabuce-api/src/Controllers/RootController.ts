import * as path from 'path'

import { promises as fs } from 'fs'
import { Controller, Get, Property, Returns } from '@tsed/common'

async function getPackageJson() {
  const filename = path.join(process.cwd(), 'package.json')
  const contents = await fs.readFile(filename)
  return JSON.parse(contents.toString())
}

export class ServerInfo {
  @Property()
  name: string

  @Property()
  version: string
}

@Controller('/')
export class RootController {
  @Get('/version')
  @Returns(200, ServerInfo)
  async get() {
    const json = await getPackageJson()
    return { name: json.name, version: json.version }
  }
}
