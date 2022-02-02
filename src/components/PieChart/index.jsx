import React, { useEffect, useRef } from "react";
import "./pieChart.scss";
import { Pie, Chart } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";

function PieChart(props) {
  return (
    <div className="pie-chart">
      <Pie
        height={500}
        plugins={[ChartDataLabels]}
        options={{
          maintainAspectRatio: false,
          aspectRatio: 1,
          plugins: {
            legend: {
              position: "top",
            },
            tooltip: {
              callbacks: {
                label: function (context) {
                  return context.label + ": " + context.parsed + "%";
                },
              },
            },
            datalabels: {
              color: "#ffffff",
              labels: {
                title: {
                  font: {
                    size: "20px",
                    weight: "bold",
                  },
                },
              },
              formatter: (value) => {
                return value + "%";
              },
            },
          },
        }}
        data={{
          labels: ["Label 1", "Label 2", "Label 3"],
          datasets: [
            {
              data: [35, 30, 35],
              hoverBorderColor: ["#FF9D00", "#16CABD", "#7B3DD9"],
              backgroundColor: ["#FF9D00", "#16CABD", "#7B3DD9"],
              hoverOffset: 4,
            },
          ],
          text: "100.1 tonne CO2e",
        }}
      />
    </div>
  );
}

export default PieChart;
