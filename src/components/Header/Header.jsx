import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar'; import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const Header = props => console.log("hello world", props) || (
  <AppBar color="primary">
    <Toolbar >
      <IconButton>
        <MenuIcon />
      </IconButton>
      <Typography>
        Sample React Application
      </Typography>
      <Button>Login</Button>
    </Toolbar>
  </AppBar>
);

Header.propTypes = {};

Header.defaultProps = {};


export default Header;
