import { Security } from "../../Services/Security";

export abstract class Document {
  _id: string;
}

export function GetId(key: string, type: string, owner: string = ""): string {
  return Security.string_hash(`${owner}.${type}.${key}`);
}
