import "pouchorm";

import { $log } from "@tsed/common";
import { PlatformExpress } from "@tsed/platform-express";

import { Server } from "./Server";
import { configuration } from "./AppConfiguration";

async function bootstrap() {
  const config = await configuration(process.env.NODE_ENV);

  try {
    $log.debug("Start server...");
    const platform = await PlatformExpress.bootstrap(Server, config.tsed);

    await platform.listen();
    $log.debug("Server initialized");
  } catch (er) {
    $log.error(er);
  }
}

bootstrap().catch(console.error);
