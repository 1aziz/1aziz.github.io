import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://azizified.com",
  author: "Aziz",
  desc: "I'm Aziz, a Cloud Engineer and here I share things I've learned or I'm excited about :)",
  title: "Azizified",
  ogImage: "",
  lightAndDarkMode: true,
  postPerPage: 3,
};

export const LOCALE = ["en-EN"]; // set to [] to use the environment default

export const LOGO_IMAGE = {
  enable: true,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/1aziz",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/1aziz",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/azizified",
    linkTitle: `${SITE.title} on Twitter`,
    active: true,
  },
];
