import { CONTACT_FORM_TYPES } from "../constants/ContactFormTypes";

export interface IBookingForm {
  fullName: string;
  contactNumber: string;
  email: string;
  services: string[];
}
