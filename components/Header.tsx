import { Button, Link, Theme, Typography, makeStyles } from "@material-ui/core";
import React, { FC } from "react";
import { contact, experience, home, portfolio } from "../src/routes";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileCode } from "@fortawesome/free-solid-svg-icons";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: "100%",
    color: "#fff",
    backgroundColor: "#333",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    maxWidth: 1040,
    padding: "10px 20px",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      justifyContent: "center",
    },
  },
  icon: {
    width: "2em !important",
    height: "2em !important",
    marginRight: theme.spacing(1),
  },
  item: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  link: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
}));

const Header: FC = () => {
  const classes = useStyles();

  return (
    <header className={classes.root}>
      <div className={classes.content}>
        <Link className={classes.item} href={home}>
          <FontAwesomeIcon className={classes.icon} icon={faFileCode} />
          <Typography variant="h6" component="h1">
            Sam Svindland
          </Typography>
        </Link>
        <div className={classes.item}>
          <Link className={classes.link} href={experience}>
            Experience
          </Link>
          <Link className={classes.link} href={portfolio}>
            Portfolio
          </Link>
          <Button
            className={classes.link}
            variant="contained"
            color="primary"
            component="a"
            href={contact}
          >
            Contact Me
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
