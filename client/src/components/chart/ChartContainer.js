import React from "react";
import Chart from "./Chart";
import { makeStyles } from "@material-ui/core/styles";
// import { usePromiseTracker } from "react-promise-tracker";

const useStyles = makeStyles((theme) => ({
  container: {
    // border: "1px solid",
    // borderRadius: "5px",
    textAlign: "left",
    color: "#918f8e",
  },
  hFour: {
    fontFamily: "Anton, sans-serif",
  },
}));

const ChartContainer = ({ data }) => {
  // const { promiseInProgress } = usePromiseTracker();
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.hFour}>Number of daily visit</div>
      <Chart data={data} width="500px" height="100px" />
    </div>
  );
};

export default ChartContainer;
