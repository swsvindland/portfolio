import {
  IconButton,
  Link,
  Theme,
  Typography,
  makeStyles,
} from "@material-ui/core";
import React, { FC } from "react";
import {
  contact,
  experience,
  home,
  portfolio,
  privacy,
  terms,
} from "../src/routes";
import {
  faGithub,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
    maxWidth: 1040,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  list: {
    listStyleType: "none",
    paddingInlineStart: 0,
  },
  links: {
    margin: "2rem 1rem",
  },
}));

const Footer: FC = () => {
  const classes = useStyles();

  return (
    <footer className={classes.root}>
      <div className={classes.content}>
        <div className={classes.links}>
          <Typography variant="h6" component="h3">
            Svindland Tech
          </Typography>
          <Link href="mailto:swsvindland@gmail.com">swsvindland@gmail.com</Link>
          <br />
          <IconButton
            component="a"
            aria-label="GitHub"
            href="https://github.com/swsvindland"
            rel="noopener"
            target="_blank"
          >
            <FontAwesomeIcon className="icon" icon={faGithub} />
          </IconButton>
          <IconButton
            component="a"
            aria-label="LinkedIn"
            href="https://www.linkedin.com/in/sam-svindland-649611b5/"
            rel="noopener"
            target="_blank"
          >
            <FontAwesomeIcon className="icon" icon={faLinkedin} />
          </IconButton>
          <IconButton
            component="a"
            aria-label="YouTube"
            href="https://www.youtube.com/channel/UCKb9yezq5xIJeXgZmdba41A"
            rel="noopener"
            target="_blank"
          >
            <FontAwesomeIcon className="icon" icon={faYoutube} />
          </IconButton>
        </div>
        <div className={classes.links}>
          <ul className={classes.list}>
            <li>
              <Link href={home}>Home</Link>
            </li>
            <li>
              <Link href={experience}>Experience</Link>
            </li>
            <li>
              <Link href={portfolio}>Portfolio</Link>
            </li>
            <li>
              <Link href={contact}>Contact</Link>
            </li>
            <li>
              <Link href={terms}>Terms</Link>
            </li>
            <li>
              <Link href={privacy}>Privacy</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
