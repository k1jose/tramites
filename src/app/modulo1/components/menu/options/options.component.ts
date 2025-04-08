import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { environment } from '@environnments/environment.development';

@Component({
  selector: 'app-options',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './options.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OptionsComponent {
  logoUrl = environment.logoUrl;

  menuOption = [
    {
      icon: 'fa-solid fa-house-chimney', // Inicio
      label: 'INICIO',
      description: '',
      route: '/dashboard/home',
    },
    {
      icon: 'fa-solid fa-file-lines', // Trámites
      label: 'TRÁMITES',
      description: '',
      route: '/dashboard/process',
    },
    {
      icon: 'fa-solid fa-layer-group', // Tipos
      label: 'TIPOS',
      description: '',
      route: '/dashboard/types',
    }
    ,
    {
      icon: 'fa-solid fa-magnifying-glass', // Búsqueda
      label: 'BUSCAR',
      description: '',
      route: '/dashboard/search',
    },
    {
      icon: 'fa-solid fa-user-group', // Clientes
      label: 'CLIENTES',
      description: '',
      route: '/dashboard/clients',
    },
  ];
  
 }
