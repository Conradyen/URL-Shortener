import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import CopyIcon from "./CopyIcon";
import IconButton from "@material-ui/core/IconButton";
// import SubmitBTN from "./SubmitBTN";
import ShortTextIcon from "@material-ui/icons/ShortText";
// import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "inline-block",
    alignItems: "center",
    flexWrap: "wrap",
    minWidth: "530px",
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  icon: {
    width: "64px",
    height: "64px",
  },
  textField: {
    // width: "auto",
    minWidth: "372px",
  },
}));

const URLInput = ({ onURLChange, value, setURL, onURLSubmit }) => {
  const classes = useStyles();
  const [copied, setCopied] = useState(false);
  //   const isValidURL = () => {};

  const handleShortURLPast = async (e) => {
    navigator.clipboard.readText().then((clipText) => {
      //   console.log(clipText);
      setURL(clipText);
      setCopied(!copied);
    });
  };

  return (
    <div className={classes.root}>
      <TextField
        className={classes.textField}
        id="standard-basic"
        label="URL"
        value={value}
        onChange={onURLChange}
      />
      <IconButton
        className={classes.icon}
        aria-label="toggle submit link"
        onClick={handleShortURLPast}
      >
        <CopyIcon
          copied={copied}
          toggleTrue="Link pasted"
          toggleFalse="Paste Link"
        />
      </IconButton>
      <IconButton
        className={`${classes.icon} ${copied ? "copied" : " "}`}
        aria-label="Generate shorten link"
        onClick={onURLSubmit}
        onAnimationEnd={() => setCopied(!copied)}
      >
        <ShortTextIcon />
      </IconButton>
      {/* <SubmitBTN className={classes.icon} onClick={onURLSubmit} /> */}
    </div>
  );
};

export default URLInput;
