import {
  aboutPagePath,
  tourismPagePath,
  educationPagePath,
  servicesPagePath,
  imprintPagePath,
} from "../router/path";

import { phone, email, address } from "./contacts";

import {
  uzcardImage,
  uzcardWebpImage,
  humoImage,
  humoWebpImage,
  mastercardImage,
  mastercardWebpImage,
  visaImage,
  mvisaWebpImage,
} from "../assets/images";

//  Footer menu
export const footerMenuItems = [
  {
    title: "Our Services",
    items: [
      {
        text: "Study Abroad ",
        link: educationPagePath,
      },

      { text: "Travel to Uzbekistan", link: tourismPagePath },

      { text: "Extra VIP Services", link: servicesPagePath },
    ],
  },

  {
    title: "About Us",
    items: [
      {
        text: "Who We Are",
        link: aboutPagePath,
      },

      {
        text: "Become Our Partner",
        link: "https://docs.google.com/forms/d/e/1FAIpQLScdSzciNzc_P5MwJsOL4kxHgMFiYY9ydlwWZg01OrXIPeHlbQ/viewform?usp=sharing",
        target: "_blank",
      },

      {
        text: "Terms and Conditions",
        link: "https://drive.google.com/drive/folders/1jRuDPBiNrYH5EVAva4UFuxAp-J14-S0C?usp=share_link",
        target: "_blank",
      },

      {
        text: "Imprint",
        link: imprintPagePath,
      },
    ],
  },
  {
    title: "Useful Links",
    items: [
      {
        text: "Student Registration EN:",
        link: "https://docs.google.com/forms/d/e/1FAIpQLSd4nAWmdvLh_-tCmT_cxO-yhxuDDUSynhpWasp1B4Gm-webmw/viewform?usp=sharing",
        target: "_blank",
      },
      {
        text: "Student Registration RU:",
        link: "https://docs.google.com/forms/d/e/1FAIpQLSfA4peXy1Mwe6rJSO9oLXVEkbxJ1zNmRZd7xClTJbQ-1ts6jA/viewform?usp=sharing",
        target: "_blank",
      },

      {
        text: "Useful link 1",
        link: "https://docs.google.com/forms/d/e/1FAIpQLSfA4peXy1Mwe6rJSO9oLXVEkbxJ1zNmRZd7xClTJbQ-1ts6jA/viewform?usp=sharing",
        target: "_blank",
      },
    ],
  },

  {
    title: "Contact Us",
    items: [
      {
        text: "MAMNUN Agency",
      },

      {
        text: `Address: ${address}`,
      },

      {
        text: `Email: ${email}`,
        link: `mailto:${email}`,
        isOutLink: true,
      },

      {
        text: `Phone: ${phone}`,
        link: `tel:${phone}`,
        //isOutLink: true,
      },
    ],
  },
];

// Payments images
export const paymentsData = [
  {
    image: uzcardImage,
    webpImage: uzcardWebpImage,
    alt: "UZCARD",
  },

  {
    image: humoImage,
    webpImage: humoWebpImage,
    alt: "HUMO",
  },

  {
    image: mastercardImage,
    webpImage: mastercardWebpImage,
    alt: "Visa",
  },

  {
    image: visaImage,
    webpImage: mvisaWebpImage,
    alt: "Mastercard",
  },
];
