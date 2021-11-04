import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import React, { createContext } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useAxios } from "use-axios-client";
import Player from "./player/player.container";
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
            <Switch>
              <Route exact path="/">
                <Player />
              </Route>
            </Switch>
          </Router>
        </Context.Provider>
      </ThemeProvider>
    </>
  );
}

export default App;
