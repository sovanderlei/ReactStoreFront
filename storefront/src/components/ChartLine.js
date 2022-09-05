import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
/* https://www.npmjs.com/package/react-chartjs-2 */
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
); 

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July','Setember'];

const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

function ChartLine(props) {
  const options = {
    responsive: true,
    maintainAspectRatio: true,
    //width:"100%",
    //height:"200",
    plugins: {
      legend: {
        position: "right",
      },
      title: {
        display: true,
        text: props.title,
      },
    },
  }; 

  return <Line  options={options} data={data}  />;
}

export default ChartLine;