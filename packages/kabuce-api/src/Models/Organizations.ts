import { promises as dns } from "dns";
import { Inject, Injectable } from "@tsed/di";

import { Security } from "../Services/Security";
import { Collection } from "./Common/Collection";
import { AppConfiguration } from "../AppConfiguration";
import { CreateOrganization, Organization } from "./Organization";

@Injectable()
export class Organizations extends Collection<Organization> {
  constructor(
    @Inject(AppConfiguration) config: AppConfiguration,
    @Inject(Security) private readonly security: Security
  ) {
    super(Collection.connection_string(config, "organization"));
  }

  async upsert(organization: CreateOrganization | Organization) {
    if (organization instanceof CreateOrganization && organization.password) {
      const organization_password = await this.security.password(
        organization.password
      );

      return await super.upsert({
        ...organization,
        _id: organization.domain,
        organization_password_hash: organization_password.hash,
        verification_code: await this.verificationCode(
          organization,
          organization.password
        ),
      });
    }

    const existing = await this.findById(organization.domain);

    if (existing) {
      return await super.upsert({
        _id: organization.domain,
        ...existing,
        ...organization,
      });
    }

    throw new Error("operation failed");
  }

  async verify(organization: Organization): Promise<boolean> {
    const verification = organization.verification_code;
    const records = await dns.resolveTxt(organization.domain);
    return records.reduce<boolean>(
      (previous, current) => (current.includes(verification) ? true : previous),
      false
    );
  }

  private async verificationCode(organization: Organization, password: string) {
    return [
      "kabuce:",
      organization.organization_name,
      "=",
      this.security.string_hash(password),
    ].join("");
  }
}
