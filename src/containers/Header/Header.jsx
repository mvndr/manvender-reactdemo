import React from "react";
import { Typography } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Badge from "@material-ui/core/Badge";
import PersonAdd from "@material-ui/icons/PersonAdd";
import PersonAddDisabled from "@material-ui/icons/PersonAddDisabled";
import CountUp from "react-countup";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  button: {
    margin: 10,
  },
}));

//=>
const Header = ({ data: { confirmed, deaths, lastUpdate } }) => {
  const classes = useStyles();
  if (!confirmed) {
    return "Loading...";
  }
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="white"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Evolution Engineering
          </Typography>
          <Badge color="secondary" variant="">
            <Typography>
              COVID-19 : {new Date(lastUpdate).toDateString()}{" "}
            </Typography>
          </Badge>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            startIcon={<PersonAdd />}
          >
            <CountUp
              start={0}
              end={confirmed.value}
              duration={2.75}
              separator=","
            />
          </Button>
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            startIcon={<PersonAddDisabled />}
          >
            <CountUp
              start={0}
              end={deaths.value}
              duration={2.75}
              separator=","
            />
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
