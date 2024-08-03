import { useState } from 'react';
import ReactApexChart from 'react-apexcharts';



const RoundedProgress = () => {
  const [chartState, setChartState] = useState<any>({
    series: [70],
    options: {
      chart: {
        height: 250,
        type: 'radialBar',
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size: '50%',
            margin: 100,
            background:'#fff'
          },
          dataLabels: {
            name: {
              show: true,
              color: '#fff', // Change to your desired color
              fontSize: '8px',
              offsetY: 19,
              formatter: function (val:any) {
                return val.split(' ').join('\n'); // Add line break
              }

              
            },
            value: {
              show: true,
              color: '#fff', // Change to your desired color
              fontSize: '18px',
              fontWeight:600,
              offsetY: -22
            },
          },
        },
      },
      labels: ['Goal Completed'],
      stroke: {
        lineCap: 'round',
        width: 1,
      },
    },
  });

  return (
    <div className='w-fit' style={{ padding: 0, margin: 0 }}>
      <div id="" style={{ padding: 0, margin: 0 }}>
        <ReactApexChart
          options={chartState.options as any}
          series={chartState.series}
          type="radialBar"
          width='200px'
          height='230px'
        />
      </div>
    </div>
  );
};

export default RoundedProgress;
