import { AboutSTEMio } from "./components/AboutSTEMio";
import { TheGuideline } from "./components/TheGuideline/TheGuideline";
import { Blogs } from "./components/Blogs";
import { FAQ } from "./components/FAQ";
import { Contacts } from "./components/Contacts";
import { Welcome } from "./components/Welcome";

export const routes = [
  {
    component: Contacts,
    path: "/contacts",
  },
  {
    component: FAQ,
    path: "/FAQ",
  },
  {
    component: AboutSTEMio,
    path: "/about",
  },
  {
    component: TheGuideline,
    path: "/guideline/:option",
  },
  {
    component: TheGuideline,
    path: "/guideline",
  },
  {
    component: Blogs,
    path: "/blogs/:option",
  },
  {
    component: Blogs,
    path: "/blogs",
  },
  {
    component: Welcome,
    path: "/",
  },
];
