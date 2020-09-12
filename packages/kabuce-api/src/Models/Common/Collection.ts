import { PouchCollection } from "pouchorm";

import { AppConfiguration } from "../../AppConfiguration";

export abstract class Collection<T> extends PouchCollection<T> {
  protected static connection_string(config: AppConfiguration, path?: string) {
    const connection: string[] = [config.app.couchdb.host];

    if (config.app.couchdb.port) {
      connection.push(`:${config.app.couchdb.port}`);
    }

    if (path) {
      connection.push(`/${path}`);
    } else if (config.app.couchdb.path) {
      connection.push(`/${config.app.couchdb.path}`);
    }

    return connection.join("");
  }
}
