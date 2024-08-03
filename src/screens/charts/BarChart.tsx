import  { useState } from "react";
import Chart from "react-apexcharts";

const ApexChart = () => {
  const [chartState] = useState<any>({
    series: [
      {
        name: "Net Profit",
        data: [144, 55, 117, 56, 111, 58, 63, 60, 136, 121, 99],
      },
    ],
    options: {
      theme: {
        mode: "dark", // Set the theme mode to "dark"
        palette: "custom", // Use a custom palette
        monochrome: {
          enabled: true,
          color: "#7595FE",
          shadeTo: "light",
          //   shadeIntensity: 0.65,
        },
      },
      chart: {
        type: "bar",
        height: 350,
        toolbar: {
          show: false, // Remove toolbar
        },
        background: "transparent",
        foreColor: "#fff", // Set font color to white for better contrast
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "30%",
          endingShape: "rounded",
          borderRadius: 10,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      xaxis: {
        categories: [
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
      yaxis: {
        title: {
          text: "₹ (thousands)",
          style: {
            color: "#fff", // Set y-axis title color to white
          },
        },
        tickAmount: 3,
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: function (val: any) {
            return "₹ " + val + " thousands";
          },
        },
      },
    },
  });

  return (
    <div className="">
      <div className=" " style={{margin:0,padding:0

      }}>
        <Chart
        
          options={chartState.options}
          series={chartState.series}
          type="bar"
          height={250}
        />
      </div>
    </div>
  );
};

export default ApexChart;
