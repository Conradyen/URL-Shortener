import React from "react";
import Button from "@material-ui/core/Button";
import ShortTextIcon from "@material-ui/icons/ShortText";
import IconButton from "@material-ui/core/IconButton";

const SubmitBTN = ({ onClick }) => {
  return (
    <>
      <IconButton aria-label="Generate shorten link" onClick={onClick}>
        <ShortTextIcon />
      </IconButton>
    </>
  );
};

export default SubmitBTN;
