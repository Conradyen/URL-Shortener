import React from "react";
import ReactEcharts from "echarts-for-react";
import { generateLastMonthDate } from "./Utils";
const generateDataOption = (vistingData) => {
  return {
    legend: {
      show: false,
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "line",
      },
      position: function (pt) {
        return [pt[0], 130];
      },
    },
    xAxis: {
      type: "category",
      axisLine: { show: false },
      splitLine: { show: false },
      axisLabel: { show: false },
      axisTick: { show: false },
      data: generateLastMonthDate(),
    },
    yAxis: {
      type: "value",
      axisLine: { show: false },
      axisTick: { show: false },
      splitLine: { show: false },
      axisLabel: { show: false },
    },
    series: [
      {
        name: "# of visited",
        symbol: "none",
        data: vistingData,
        type: "line",
        lineStyle: {
          color: "rgba(19, 224, 64, 1)",
        },
        itemStyle: {
          color: "rgba(19, 224, 64, 1)",
        },
        areaStyle: {
          color: "rgba(19, 224, 64, 0.5)",
        },
      },
    ],
  };
};

const Chart = ({ data, width, height }) => {
  const option = generateDataOption(data);
  return (
    <ReactEcharts
      option={option}
      style={{
        height: `${height}`,
        width: `${width}`,
      }}
      opts={{ renderer: "svg" }}
    ></ReactEcharts>
  );
};

export default Chart;
