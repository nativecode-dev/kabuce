import { Inject, Injectable } from "@tsed/di";
import { SES } from "aws-sdk";

import { AppConfiguration } from "../AppConfiguration";

@Injectable()
export class MailService {
  private readonly ses: SES;

  constructor(@Inject(AppConfiguration) config: AppConfiguration) {
    this.ses = new SES({ region: "us-east-1" });
  }

  send(options: SES.SendEmailRequest) {
    return new Promise((resolve, reject) => {
      this.ses.sendEmail(options, (error, data) => {
        if (error) {
          reject();
        } else {
          resolve(data);
        }
      });
    });
  }
}
