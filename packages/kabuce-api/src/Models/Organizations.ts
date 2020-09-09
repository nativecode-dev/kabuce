import { promises as dns } from "dns";
import { PouchCollection, PouchModel } from "pouchorm";

import { CreateOrganization, Organization } from "./Organization";
import { Security } from "../Services/Security";

export class Organizations extends PouchCollection<Organization> {
  constructor() {
    super("data/organization");
  }

  async update(organization: CreateOrganization | Organization) {
    if (organization instanceof CreateOrganization && organization.password) {
      const organization_password = await Security.password(
        organization.password
      );

      return await this.upsert({
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
      return await this.upsert({
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
      Security.string_hash(password),
    ].join("");
  }
}

export class OrganizationDocument extends PouchModel<Organization> {}
