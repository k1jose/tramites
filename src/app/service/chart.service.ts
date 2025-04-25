import { Injectable } from '@angular/core';
import {
  Chart,
  ChartConfiguration,
  BarController,
  BarElement,
  PieController,
  ArcElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from 'chart.js';

@Injectable({
  providedIn: 'root'
})
export class ChartService {
  createChart(canvasId: string, config: ChartConfiguration): void {
    const canvas = document.getElementById(canvasId) as HTMLCanvasElement;

    if (!canvas) {
      console.warn(`No se encontró un canvas con el id "${canvasId}". Asegúrate de que el canvas esté en el DOM.`);
      return;
    }

    // Destruir cualquier gráfico existente en el canvas
    if (Chart.getChart(canvasId)) {
      Chart.getChart(canvasId)?.destroy();
    }

    // Registrar todos los elementos necesarios
    Chart.register(
      BarController,
      BarElement,
      PieController,
      ArcElement,
      CategoryScale,
      LinearScale,
      Tooltip,
      Legend
    );

    // Crear el gráfico
    try {
      new Chart(canvas, config);
    } catch (error) {
      console.error('Error al crear el gráfico:', error);
    }
  }
}
