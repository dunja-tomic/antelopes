import {
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
} from "chart.js";
import { Scatter } from "react-chartjs-2";

ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);

interface ScatterPlotProps {
  title: string;
  xAxisTitle: string;
  yAxisTitle: string;
  datasets: {
    label: string;
    data: {
      x: number;
      y: number;
    }[];
    backgroundColor: string;
  }[];
}

export const ScatterPlot = ({
  title,
  xAxisTitle,
  yAxisTitle,
  datasets,
}: ScatterPlotProps) => {
  const options = {
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: title,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: xAxisTitle,
        },
      },
      y: {
        title: {
          display: true,
          text: yAxisTitle,
        },
      },
    },
  };

  const data = {
    datasets,
  };

  return <Scatter options={options} data={data} />;
};

export default ScatterPlot;
