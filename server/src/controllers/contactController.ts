import { BOOKING_FORM_TYPES } from "../constants/BookingFormtypes.js";
import { CONTACT_FORM_TYPES } from "../constants/ContactFormTypes.js";
import { errorTypes } from "../constants/errors.js";
import { IBookingForm } from "../definitions/IBookingForm.js";
import { IContactForm } from "../definitions/IContactForm.js";
import { AppError } from "../utils/appError.js";
import { catchAsync } from "../utils/catchAsync.js";
import { Email } from "../utils/email.js";

export const sendContactMail = catchAsync(async (req, res, next) => {
  const reqData: IContactForm = {
    fullName: req.body.fullName,
    contactNumber: req.body.contactNumber,
    needAssistanceAs: req.body.needAssistanceAs,
    email: req.body.email,
    telegramLink: req.body.telegramLink,
    message: req.body.message,
  };
  // validation

  const errorObj: {
    [key in keyof IContactForm]?: typeof errorTypes.invalidvalue;
  } = {};

  const validateField = (key: keyof IContactForm, value: any) => {
    if (!value) return errorTypes.invalidvalue;

    switch (key) {
      case "needAssistanceAs":
        return Object.values(CONTACT_FORM_TYPES).includes(value)
          ? null
          : errorTypes.invalidvalue;
      case "email":
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
          ? null
          : errorTypes.invalidvalue;
      case "telegramLink":
        return /^https:\/\/t\.me\/[a-zA-Z0-9_]+$/.test(value)
          ? null
          : errorTypes.invalidvalue;
      case "contactNumber":
        // Accepts numbers, spaces, dashes, parentheses, and plus sign, min 7 digits
        return typeof value === "string" && /^\+?[\d\s\-()]{7,}$/.test(value)
          ? null
          : errorTypes.invalidvalue;

      default:
        return null;
    }
  };

  const { needAssistanceAs } = reqData;
  const skipFields = {
    telegramLink: ["Partner", "Traveler"].includes(needAssistanceAs),
    email: ["Student", "Parent"].includes(needAssistanceAs),
  };

  for (const key in reqData) {
    const typedKey = key as keyof IContactForm;
    if (skipFields[typedKey as keyof typeof skipFields]) continue;

    const error = validateField(typedKey, reqData[typedKey]);
    if (error) errorObj[typedKey] = error;
  }

  if (Object.values(errorObj).length) {
    return next(new AppError("please fill all fields", 400, errorObj));
  }

  await new Email().sendContactForm(reqData);
  res.status(200).json({
    status: "success",
    message: "Contact form submitted successfully",
  });
});

export const bookJourney = catchAsync(async (req, res, next) => {
  const reqData: IBookingForm = {
    fullName: req.body.fullName,
    contactNumber: req.body.contactNumber,
    email: req.body.email,
    services: req.body.services,
  };
  // validation

  const errorObj: {
    [key in keyof IBookingForm]?: typeof errorTypes.invalidvalue;
  } = {};

  const validateField = (key: keyof IBookingForm, value: any) => {
    if (!value) return errorTypes.invalidvalue;

    switch (key) {
      case "services":
        // Check if value is an array and all elements are valid service types
        return Array.isArray(value) &&
          value.length > 0 &&
          value.every((v) => Object.values(BOOKING_FORM_TYPES).includes(v))
          ? null
          : errorTypes.invalidvalue;
      case "email":
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
          ? null
          : errorTypes.invalidvalue;
      case "contactNumber":
        // Accepts numbers, spaces, dashes, parentheses, and plus sign, min 7 digits
        return typeof value === "string" && /^\+?[\d\s\-()]{7,}$/.test(value)
          ? null
          : errorTypes.invalidvalue;

      default:
        return null;
    }
  };

  for (const key in reqData) {
    const typedKey = key as keyof IBookingForm;

    const error = validateField(typedKey, reqData[typedKey]);
    if (error) errorObj[typedKey] = error;
  }

  if (Object.values(errorObj).length) {
    return next(new AppError("please fill all fields", 400, errorObj));
  }

  await new Email().sendBookingForm(reqData);
  res.status(200).json({
    status: "success",
    message: "Booking form submitted successfully",
  });
});
