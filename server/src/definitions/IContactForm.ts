import { CONTACT_FORM_TYPES } from "../constants/ContactFormTypes";

export interface IContactForm {
  fullName: string;
  contactNumber: string;
  needAssistanceAs: keyof typeof CONTACT_FORM_TYPES;
  email?: string;
  telegramLink?: string;
  message: string;
}
