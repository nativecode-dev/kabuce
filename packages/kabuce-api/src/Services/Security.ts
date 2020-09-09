import { x2 } from "sha256";
import { compare, genSalt, hash as hasher } from "bcrypt";

export class Security {
  static async authentic(hash: string, clear_password: string) {
    return await compare(clear_password, atob(hash));
  }

  static async password(plaintext: string, salt_rounds: number = 10) {
    const salt = await genSalt(salt_rounds);
    const hashstr = await hasher(plaintext, salt);
    const hash = Buffer.from(hashstr).toString("base64");
    return { hash, salt };
  }

  static string_hash(source: string): string {
    return x2(source);
  }
}
