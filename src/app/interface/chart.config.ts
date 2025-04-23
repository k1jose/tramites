import {
    Chart,
    BarController,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend,
    ChartConfiguration,
  } from 'chart.js';
  
  Chart.register(
    BarController,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
  );
  
  // Exporta una función que genera la config con los datos que le pases
  export const getEstadoChartConfig = (data: number[]): ChartConfiguration => ({
    type: 'bar',
    data: {
      labels: ['Pendiente', 'En proceso', 'Completado', 'Rechazado'],
      datasets: [
        {
          label: 'Trámites',
          data,
          backgroundColor: ['#fbbf24', '#60a5fa', '#34d399', '#f87171'],
          borderRadius: 6,
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            stepSize: 1,
          },
        },
      },
    },
  });
  