import { convert } from "html-to-text";
import nodemailer, { TransportOptions } from "nodemailer";
import pug from "pug";
import { DIRNAME } from "../constants/Dirname.js";
import { IContactForm } from "../definitions/IContactForm.js";
import { IBookingForm } from "../definitions/IBookingForm.js";

interface MyTransportOptions extends TransportOptions {
  host: string;
}

export class Email {
  from: string;

  constructor() {
    this.from = "MAMNUN Agency";
  }

  newTransport() {
    return nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USERNAME,
        pass: process.env.GMAIL_PASSWORD,
      },
    });
  }

  async send<T extends Record<any, any>>(
    template: string,
    subject: string,
    params: T,
    to: string,
    from?: string
  ): Promise<void> {
    try {
      const html = pug.renderFile(
        `${DIRNAME}dist/src/views/emails/${template}.pug`,
        params
      );

      const options = {
        from: from || this.from,
        to: to,
        subject,
        html,
        text: convert(html, { wordwrap: 80 }),
      };

      await this.newTransport().sendMail(options);
    } catch (error) {
      console.error("email sending error", error);
      throw new Error("email sending error");
    }
  }

  async sendForgotPass(url: string, userEmail: string) {
    await this.send(
      "forgotPass",
      "Forgot Your Password",
      {
        name: "Admin",
        url: url,
      },
      userEmail
    );
  }
  async sendContactForm(params: IContactForm) {
    const supportMail = process.env.SUPPORT_MAIL;

    if (!supportMail) throw new Error("support mail not found in env");
    await this.send(
      "contact",
      "New Contact Form Submission",
      params,
      supportMail
    );
  }
  async sendBookingForm(params: IBookingForm) {
    const supportMail = process.env.SUPPORT_MAIL;

    if (!supportMail) throw new Error("support mail not found in env");
    await this.send("booking", "New Booking Submission", params, supportMail);
  }
}
