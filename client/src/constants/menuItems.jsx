// Application Header 

import {
  homePagePath, 
  aboutPagePath,
  termsPagePath
} from "../router/path"

import {
  twitterUrl,
  telegramUrl,
  emailAddress,
  documentation,
} from "./contacts"

export const headerMenuItems =  [
  {
    text: "Home", 
    link: homePagePath   
  },
  {
    text: "About us", 
    link: aboutPagePath 
  },
  {
    text: "Terms of use", 
    link: termsPagePath 
  },
]

// General Footer 

export const footerMenuItems = [
  {
    title: "Resources",
    items: [
      {
        text: "Documentation",
        link: documentation,
        target: "_blank"
      },
      { text: "Terms of use", 
        link: termsPagePath
      },
      { text: "Disclaimer", 
        link: "https://usercentrics.com/guides/website-disclaimers/ai-disclaimer/", 
        target: "_blank"
      },
    ],
  },
  {
    title: "Social Media",
    items: [
      {
        text: "Twitter",
        link: twitterUrl,
        target: "_blank"
        },
      {
        text: "Telegram",
        link: telegramUrl ,
        target: "_blank"
      },
    ],
  },
  {
    title: "Contact",
    items: [
      {
        text:  emailAddress,
        link: `mailto:${emailAddress}`,
      },
    ],
  },
];