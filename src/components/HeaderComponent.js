import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import HomeIcon from "@material-ui/icons/Home";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";

// semua komponen ada disini
import HomePage from "./HomePage";
import ListPage from "./ListPage";
import CreatePage from "./CreatePage";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

const HeaderComponent = () => {
  const classes = useStyles();
  return (
    <Router>
      <div className={classes.root}>
        <AppBar position="static">
          <ToolBar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <HomeIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Home
            </Typography>
            <Button color="inherit">
              <Link to="/list" style={{ color: "white" }}>
                List
              </Link>
            </Button>
            <Button color="inherit">
              <Link to="/create" style={{ color: "white" }}>
                New
              </Link>
            </Button>
          </ToolBar>
        </AppBar>
        <CssBaseline />
        <Container maxWidth="lg">
          <Typography variant="h4" style={{ margin: 20 }}>
            React Catatan
          </Typography>
          <Route path="/" exact component={HomePage}></Route>
          <Route path="/list" component={ListPage}></Route>
          <Route path="/create" component={CreatePage}></Route>
        </Container>
      </div>
    </Router>
  );
};

export default HeaderComponent;
