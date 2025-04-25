import { AfterViewInit, ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ChartService } from 'src/app/service/chart.service';
import { ProcessItem } from 'src/app/interface/item-proces';
import { ProcessStatus } from 'src/app/interface/item-proces';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports:[CommonModule],
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class HomeComponent implements AfterViewInit {
  private router = inject(Router);
  private chartService = inject(ChartService);

  summaryCards = [
    { label: 'Total', value: 120 },
    { label: 'Pendientes', value: 34 },
    { label: 'En proceso', value: 50 },
    { label: 'Completados', value: 30 },
    { label: 'Rechazados', value: 6 },
  ];

  recentProcesses: ProcessItem[] = [
    {
      id: 1,
      title: 'Solicitud de licencia',
      createdAt: new Date('2025-04-01'),
      status: ProcessStatus.Pending,
    },
    {
      id: 2,
      title: 'Reclamo por servicio',
      createdAt: new Date('2025-03-29'),
      status: ProcessStatus.InProgress,
    },
    {
      id: 3,
      title: 'Petición de acceso a datos',
      createdAt: new Date('2025-03-27'),
      status: ProcessStatus.Completed,
    },
    {
      id: 4,
      title: 'Revisión de contrato',
      createdAt: new Date('2025-03-27'),
      status: ProcessStatus.Rejected,
    },
    {
      id: 5,
      title: 'Aprobación final',
      createdAt: new Date('2025-03-27'),
      status: ProcessStatus.Finished,
    }
  ];

  ngAfterViewInit(): void {
    setTimeout(() => this.renderCharts(), 0);
  }

  renderCharts(): void {
    const labels = ['Pendiente', 'En proceso', 'Completado', 'Rechazado', 'Finalizado'];
    const data = [
      this.countByStatus(ProcessStatus.Pending),
      this.countByStatus(ProcessStatus.InProgress),
      this.countByStatus(ProcessStatus.Completed),
      this.countByStatus(ProcessStatus.Rejected),
      this.countByStatus(ProcessStatus.Finished),
    ];
    const backgroundColor = ['#fbbf24', '#60a5fa', '#34d399', '#f87171', '#a78bfa'];

    this.chartService.createChart('estadoBarChart', {
      type: 'bar',
      data: {
        labels,
        datasets: [{
          label: 'Trámites',
          data,
          backgroundColor,
          borderRadius: 6,
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: { stepSize: 1 },
          },
        },
      }
    });

    this.chartService.createChart('estadoPieChart', {
      type: 'pie',
      data: {
        labels,
        datasets: [{
          label: 'Distribución',
          data,
          backgroundColor,
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'bottom',
          },
        },
      }
    });
  }

  countByStatus(status: ProcessStatus): number {
    return this.recentProcesses.filter(p => p.status === status).length;
  }

  goToDetail(id: number): void {
    this.router.navigate(['/process', id]);
  }
}
