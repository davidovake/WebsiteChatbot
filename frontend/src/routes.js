import { AboutSTEMio } from "./components/AboutSTEMio/AboutSTEMio";
import { Blogs } from "./components/Blogs/Blogs";
import { Contacts } from "./components/Contacts/Contacts";
import { FAQ } from "./components/FAQ/FAQ";
import { TheGuideline } from "./components/TheGuideline/TheGuideline";
import { Welcome } from "./components/Welcome/Welcome";

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
