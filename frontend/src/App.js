import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import { Chatbot } from "./components/Chatbot/Chatbot";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { RootContainer } from "./components/Welcome/Welcome.styles";
import { routes } from "./routes";

/**
 * This is the root of the application
 * @returns the DOM tree of the app
 */
function App() {
  const redirectTo = () => {
    return <Redirect to="/" />;
  };

  return (
    <div className="App">
      <Chatbot />
      <div
        style={{
          height: "100vh",
          margin: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Header />

        {/**
         * This is the main component switcher of the application.
         * It's based on the current entered URL
         */}
        <RootContainer>
          <Switch>
            {routes.map(({ component, path }) => (
              <Route component={component} path={path} exact />
            ))}

            <Route component={redirectTo} />
          </Switch>
        </RootContainer>

        <Footer />
      </div>
    </div>
  );
}

export default App;
