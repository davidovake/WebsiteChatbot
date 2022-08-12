import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { FirstComponent } from "./components/FirstComponent";
import { SecondComponent } from "./components/SecondComponent";
import { Switch, Route, Redirect } from "react-router-dom";
import { routes } from "./routes";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer";
import { RootContainer } from "./components/Welcome.styles";
import { Chatbot } from "./components/Chatbot";

function App() {
  const redirectTo = () => {
    return <Redirect to="/" />;
  };

  return (
    <div className="App">
      <Chatbot />
      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Header />

        <RootContainer>
          {/* {[...Array(1000).keys()].map((item) => (
            <div>test</div>
          ))} */}
          {/* <Switch>
            {routes.map(({ component, path }) => (
              <Route component={component} path={path} exact />
            ))}

            <Route component={redirectTo} />
          </Switch> */}
        </RootContainer>

        <Footer />
      </div>
    </div>
  );
}

export default App;
