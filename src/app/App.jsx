import "../fake-db";
import "../styles/_app.scss";
import React from "react";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import EgretTheme from "./EgretLayout/EgretTheme/EgretTheme";
import { AppProvider } from "./appContext";
import history from "history.js";


import { Store } from "./redux/Store";
import Auth from "./auth/Auth";
import EgretLayout from "./EgretLayout/EgretLayout";
import AuthGuard from "./auth/AuthGuard";

const App = () => {
  return (
    <AppProvider>
      <Provider store={Store}>
        <EgretTheme>
          <Auth>
            <Router history={history}>
              <AuthGuard>
                <EgretLayout />
              </AuthGuard>
            </Router>
          </Auth>
        </EgretTheme>
      </Provider>
    </AppProvider>
  );
};

export default App;
