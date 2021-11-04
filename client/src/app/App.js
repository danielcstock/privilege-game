import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import React, { createContext, useContext } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { useAxios } from "use-axios-client";
import theme from "./theme";

const { REACT_APP_BASE_API_URL } = process.env;
const Context = createContext("Default Value");

function App() {
  const { data, error, loading } = useAxios({
    url: "https://jsonplaceholder.typicode.com/posts/1",
  });

  if (loading || !data) return "Loading...";
  if (error) return "Error!";

  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Context.Provider value="teste">
          <Router>
            <nav>
              <Link to="/">Home</Link>
              <Link to="/avatar">Avatar</Link>
            </nav>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/avatar">
                <Avatar />
              </Route>
            </Switch>
          </Router>
        </Context.Provider>
      </ThemeProvider>
    </>
  );
}

function Home() {
  const value = useContext(Context);
  return (
    <>
      <h1>{value}</h1>
    </>
  );
}

function Avatar() {
  const value = useContext(Context);

  return <>{value}</>;
}

export default App;
