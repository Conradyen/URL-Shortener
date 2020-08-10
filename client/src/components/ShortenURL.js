import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import CopyIcon from "./CopyIcon";
import { makeStyles } from "@material-ui/core/styles";
import ChartContainer from "./chart/ChartContainer";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "inline-block",
    flexWrap: "wrap",
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
    // width: "30%",
    minWidth: "436px",
  },
}));

const ShortenURL = ({ value, data }) => {
  const classes = useStyles();
  const [copied, setCopied] = useState(false);

  const handleShortURLCopy = (e) => {
    navigator.clipboard.writeText(value);
    setCopied(!copied);
    setTimeout(() => {
      setCopied(!copied);
    }, 5000);
  };
  return (
    <div className={classes.root}>
      <div>
        <TextField
          className={classes.textField}
          error={
            value === "Invalid Long URL" ||
            value === "Server error" ||
            value === "Connection error"
          }
          id="outlined-read-only-input"
          label="Shorten URL"
          value={value}
          InputProps={{
            readOnly: true,
          }}
          variant="outlined"
        />
        {
          /* Logical shortcut for only displaying the 
          button if the copy command exists */
          document.queryCommandSupported("copy") && (
            <IconButton
              className={classes.icon}
              aria-label="toggle password visibility"
              onClick={handleShortURLCopy}
            >
              <CopyIcon
                copied={copied}
                toggleTrue="Link copied"
                toggleFalse="Copy Link"
              />
            </IconButton>
          )
        }
      </div>
      <div>
        <ChartContainer data={data} />
      </div>
    </div>
  );
};

export default ShortenURL;
