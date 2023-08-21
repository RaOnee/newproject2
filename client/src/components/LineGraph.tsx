
import React from 'react';
import { Line } from 'react-chartjs-2';
import { useGraphData } from '../hooks';

const LineGraph: React.FC = () => {
  const { data } = useGraphData();

  if (!data) {
    return <div>Loading graph data...</div>;
  }

  // Process data and create chart configuration
  const chartData = {
    labels: Object.keys(data.cases),
    datasets: [
      {
        label: 'Cases',
        data: Object.values(data.cases),
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
      },
    ],
  };

  return <Line data={chartData} />;
};

export default LineGraph;
