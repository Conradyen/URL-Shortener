import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    margin: "20px",
    // maxHeight: "200px",
  },
  details: {
    display: "flex",
    flexDirection: "column",
    maxWidth: "500px",
  },
  content: {
    textAlign: "left",
    flex: "1 0 auto",
  },
  coverImage: {
    width: "100%",
    maxHeight: "100%",
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  cover: {
    height: "100px",
    width: "100px",
    minWidth: "20%",
    maxWidth: "30%",
    margin: "auto",
    display: "block",
    alignItems: "center",
  },
}));

const LinkPreview = ({ title, description, domain, image }) => {
  const classes = useStyles();

  const trimTitle = (title) => {
    const stringArr = title.split();
    if (stringArr > 15) {
    }
  };

  const trimDescription = (description) => {};

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {title}
          </Typography>
          <Typography variant="body1" color="textPrimary">
            {description}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {domain}
          </Typography>
        </CardContent>
      </div>
    </Card>
  );
};

export default LinkPreview;
