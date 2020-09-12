import path from "path";

import { promises as fs } from "fs";
import { registerProvider } from "@tsed/di";

const DEFAULT_CONFIGURATION: Partial<AppConfiguration> = {
  app: {
    couchdb: {
      host: "data",
    },
    ses: {},
  },
};

export class AppConfiguration {
  app: {
    couchdb: {
      host: string;
      port?: string;
      path?: string;
      credentials?: {
        username: string;
        password: string;
      };
    };

    ses: {};
  };

  tsed: Partial<TsED.Configuration>;
}

async function fromDefault() {
  try {
    const filename = path.join(process.cwd(), "appsettings.json");
    console.log(filename);
    const buffer = await fs.readFile(filename);
    return JSON.parse(buffer.toString());
  } catch {
    return DEFAULT_CONFIGURATION;
  }
}

async function fromEnvironment(env: string) {
  try {
    const filename = path.join(process.cwd(), `appsettings.${env}.json`);
    console.log(filename);
    const buffer = await fs.readFile(filename);
    return JSON.parse(buffer.toString());
  } catch {
    return await fromDefault();
  }
}

export async function configuration(env?: string): Promise<AppConfiguration> {
  if (env === undefined) {
    return await fromDefault();
  }
  return await fromEnvironment(env);
}

registerProvider({
  provide: AppConfiguration,
  async useAsyncFactory() {
    return await configuration(process.env.NODE_ENV);
  },
});
