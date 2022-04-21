import { Switch, Route } from "react-router-dom";

import { Home } from "../Home";
import { Page2Routes } from "./Page2Routes";
import { Page1Routes } from "./Page1Routes";
import { Page404 } from "../Page404";

export const Router = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route
        path="/page1"
        render={({ match: { url } }) => (
          <Switch>
            {Page1Routes.map((route) => (
              <Route
                key={route.parh}
                exact={route.exact}
                path={`${url}${route.parh}`}
              >
                {route.childen}
              </Route>
            ))}
          </Switch>
        )}
      />
      <Route
        path="/page2"
        render={({ match: { url } }) => (
          <Switch>
            {Page2Routes.map((route) => (
              <Route
                key={route.parh}
                exact={route.exact}
                path={`${url}${route.parh}`}
              >
                {route.childen}
              </Route>
            ))}
          </Switch>
        )}
      />
      <Route path="*">
        <Page404 />
      </Route>
    </Switch>
  );
};