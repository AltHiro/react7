import { Page2 } from "../Page2";
import { UrlParameter } from "../UrlParameter.jsx";

export const Page2Routes = [
  {
    parh: "/",
    exact: true,
    childen: <Page2 />
  },
  {
    parh: "/:id",
    exact: false,
    childen: <UrlParameter />
  }
];
