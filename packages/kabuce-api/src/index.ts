import "pouchorm";
import { promises as fs } from "fs";

import fetch from "node-fetch";

import { $log } from "@tsed/common";
import { PlatformExpress } from "@tsed/platform-express";

import { Server } from "./Server";
import { configuration } from "./AppConfiguration";

async function bootstrap(args: string[]) {
  const config = await configuration(process.env.NODE_ENV);

  try {
    $log.debug("Start server...");
    const platform = await PlatformExpress.bootstrap(Server, config.tsed);
    const listen = platform.listen();

    if (args.includes("generate:swagger")) {
      const response = await fetch(
        "http://localhost:8080/api-docs/swagger.json"
      );
      const jsonstr = await response.text();
      await fs.writeFile("swagger.json", jsonstr);
      process.exit(0);
    }

    await listen;
    $log.debug("Server initialized");
  } catch (er) {
    $log.error(er);
  }
}

bootstrap(process.argv).catch(console.error);
