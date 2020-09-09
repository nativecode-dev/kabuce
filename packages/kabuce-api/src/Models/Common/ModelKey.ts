import { Property } from "@tsed/common";

export class ModelKey<T> {
  @Property()
  id: string;

  @Property()
  model: T;
}
