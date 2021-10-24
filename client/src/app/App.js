import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import theme from "./theme";

// const { REACT_APP_TEST_VAR } = process.env;

function App() {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Router>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/avatar">Avatar
            </Link>
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
      </ThemeProvider>
    </>
  );
}

function Home() {
  return (
    <>
      <Button variant="contained" color="primary">
        Hello World
      </Button>
    </>
  );
}

function Avatar() {
  return <>Avatar</>;
}

export default App;
