import React from "react";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import Tooltip from "@material-ui/core/Tooltip";
const CopyIcon = ({ copied, toggleTrue, toggleFalse }) => {
  return (
    <Tooltip title={copied ? toggleTrue : toggleFalse}>
      <FileCopyIcon
        style={{
          color: `${copied ? "#8dd96a" : "#8d8f8c"}`,
          width: "30px",
          height: "30px",
        }}
      />
    </Tooltip>
  );
};

export default CopyIcon;
