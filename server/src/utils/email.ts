import { convert } from "html-to-text";
import nodemailer, { TransportOptions } from "nodemailer";
import pug from "pug";
import { DIRNAME } from "../constants/Dirname.js";

interface MyTransportOptions extends TransportOptions {
  host: string;
}

export class Email {
  url: string;
  to: string;
  firstName: string;
  from: string;

  constructor(user: { email: string }, url: string) {
    this.url = url;
    this.to = user.email;
    this.firstName = "Admin";
    this.from = "Mamnun Agency";
  }

  newTransport() {
    console.log({
      auth: {
        user: process.env.GMAIL_USERNAME,
        pass: process.env.GMAIL_PASSWORD,
      },
    });

    return nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USERNAME,
        pass: process.env.GMAIL_PASSWORD,
      },
    });
  }

  async send(template: string, subject: string) {
    try {
      const html = pug.renderFile(
        `${DIRNAME}dist/src/views/emails/${template}.pug`,
        {
          name: this.firstName,
          url: this.url,
        }
      );

      const options = {
        from: this.from,
        to: this.to,
        subject,
        html,
        text: convert(html, { wordwrap: 80 }),
      };

      await this.newTransport().sendMail(options);
    } catch (error) {
      console.log("email sending error", error);
    }
  }

  async sendForgotPass() {
    await this.send("forgotPass", "Forgot Your Password");
  }
}
