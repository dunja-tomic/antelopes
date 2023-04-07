import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface BarChartProps {
  title: string;
  yAxisTitle: string;
  datasets: {
    label: string;
    data: Record<string, number>;
    backgroundColor: string;
  }[];
}

export const BarChart = ({ title, yAxisTitle, datasets }: BarChartProps) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: title,
      },
    },
    scales: {
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

  return <Bar options={options} data={data} />;
};
