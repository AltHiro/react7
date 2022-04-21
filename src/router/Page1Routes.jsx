import { Page1 } from "../Page1";
import { Page1DetailA } from "../Page1DetailA";
import { Page1DetailB } from "../Page1DetailB";

export const Page1Routes = [
  {
    parh: "/",
    exact: true,
    childen: <Page1 />
  },
  {
    parh: "/detailA",
    exact: false,
    childen: <Page1DetailA />
  },
  {
    parh: "/detailB",
    exact: false,
    childen: <Page1DetailB />
  }
];
