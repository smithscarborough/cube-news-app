import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import { Button, Menu, MenuItem } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { withRouter } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    [theme.breakpoints.down('xs')]: {
      flexGrow: 1,
      display: 'block'
    }
  },
  headerOptions: {
    display: 'flex',
    flex: 1,
    justifyContent: 'space-evenly',
  }
}));

const SearchAppBar = props => {
  const { history } = props;
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClick = pageURL => {
    history.push(pageURL);
    setAnchorEl(null);
  };

  const handleButtonClick = pageURL => {
    history.push(pageURL);
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.title} variant="h6">
            Cube News
          </Typography>
          {/* navbar-to-burger media query */}
          <div>
          {isMobile ? (
          <>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick={handleMenu}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right'
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horitzontal: 'right'
            }}
            open={open}
            onClose={() => setAnchorEl(null)}
          >
            <MenuItem onClick={() => handleMenuClick('/')}>Home</MenuItem>
            <MenuItem onClick={() => handleMenuClick('/news')}>News</MenuItem>
            <MenuItem onClick={() => handleMenuClick('/tech')}>Tech</MenuItem>
          </Menu>
          </>
          ) : (
            <div className={classes.headerOptions}>
              <Button variant="contained" onClick={() => handleButtonClick('/')}>Home</Button>
              <Button variant="contained" onClick={() => handleButtonClick('/news')}>News</Button>
              <Button variant="contained" onClick={() => handleButtonClick('/business')}>Business</Button>
              <Button variant="contained" onClick={() => handleButtonClick('/tech')}>Tech</Button>
            </div>
          )}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withRouter(SearchAppBar);