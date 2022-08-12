import { AboutSTEMio } from "./components/AboutSTEMio";
import { FirstComponent } from "./components/FirstComponent";
import { SecondComponent } from "./components/SecondComponent";
import { TheGuideline } from "./components/TheGuideline";
import { Videos } from "./components/Videos";
import { FAQ } from "./components/FAQ";
import { Contacts } from "./components/Contacts";
import { Welcome } from "./components/Welcome";

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
  {
    component: Welcome,
    path: "/",
  },
];
