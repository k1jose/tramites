import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OptionsComponent } from '../../components/menu/options/options.component';





@Component({
  selector: 'app-dashboard',
  imports: [RouterOutlet, OptionsComponent],
  templateUrl: './dashboard.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default  class DashboardComponent {
  
 }
