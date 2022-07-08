import { AboutSTEMio } from "./AboutSTEMio";
import { FirstComponent } from "./FirstComponent";
import { SecondComponent } from "./SecondComponent";
import { TheGuideline } from "./TheGuideline";
import { Videos } from "./Videos";
import { FAQ } from "./FAQ";
import { Contacts } from "./Contacts";

export const routes = [
  {
    component: Contacts,
    path: "/Contacts",
  },
  {
    component: FAQ,
    path: "/FAQ",
  },
  {
    component: AboutSTEMio,
    path: "/AboutSTEMio",
  },
  {
    component: TheGuideline,
    path: "/TheGuideline",
  },
  {
    component: Videos,
    path: "/VideosAndSocialMedia",
  },
];
