import React from "react";

import {
  AppBar,
  Toolbar,
  Typography
} from "@material-ui/core";

const Header = (props) => {
  return (
    <header>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6">
            { props.text }
          </Typography>
        </Toolbar>
      </AppBar>
    </header>
  );
};

export default Header;