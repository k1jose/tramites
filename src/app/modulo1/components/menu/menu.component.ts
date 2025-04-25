import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { OptionsComponent } from "./options/options.component";



@Component({
  selector: 'app-menu',
  imports: [NavbarComponent, OptionsComponent],
  templateUrl: './menu.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuComponent { }
