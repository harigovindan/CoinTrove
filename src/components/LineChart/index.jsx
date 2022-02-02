import React, { useState } from "react";
import "./lineChart.scss";
import { Line } from "react-chartjs-2";

function LineChart({
  showLegend = true,
  showXAxisLabels = true,
  showYAxisLabels = true,
  showXAxisGrid = false,
  showYAxisGrid = true,
  lineTension = 0,
  borderColor = "#092A54",
  backgroundColor = "#092A5450",
  data,
  labels,
  animationDuration = 1000,
}) {
  return (
    <div className="line-chart">
      <Line
        options={{
          animation: {
            duration: animationDuration,
          },
          interaction: {
            mode: "index",
            intersect: false,
          },
          plugins: {
            legend: {
              position: "top",
              display: showLegend,
            },
            tooltip: {
              callbacks: {
                labelColor: function (context) {
                  return {
                    borderColor: context.dataset.borderColor,
                    backgroundColor: context.dataset.fill
                      ? context.dataset.backgroundColor
                      : "#FFFFFF",
                    borderDash: context.dataset.fill ? [0, 0] : [3, 3],
                    borderWidth: 2,
                  };
                },
              },
              mode: "index",
              intersect: false,
            },
            hover: {
              mode: "nearest",
              intersect: true,
            },
          },
          maintainAspectRatio: false,
          aspectRatio: 1,
          elements: {
            point: {
              radius: 1,
              hitRadius: 1,
              hoverRadius: 4,
            },
          },
          scales: {
            x: {
              grid: {
                display: showXAxisGrid,
              },
              ticks: {
                display: showXAxisLabels,
              },
            },
            y: {
              grid: {
                display: showYAxisGrid,
              },
              ticks: {
                display: showYAxisLabels,
              },
            },
          },
        }}
        data={{
          labels: labels ?? [
            "2011",
            "2012",
            "2013",
            "2014",
            "2015",
            "2016",
            "2017",
            "2018",
            "2019",
            "2020",
          ],
          datasets: [
            {
              label: "Increase in returns",
              data: data ?? [55, 49, 70, 71, 63, 70, 76, 80, 75, 89],
              backgroundColor: backgroundColor,
              fill: true,
              borderColor: [borderColor],
              tension: lineTension,
            },
          ],
        }}
      />
    </div>
  );
}

export default LineChart;
