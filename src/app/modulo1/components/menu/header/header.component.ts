import { ChangeDetectionStrategy, Component } from '@angular/core';
import { environment } from '@environnments/environment.development';


@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class HeaderComponent {
  envs =environment
 }
