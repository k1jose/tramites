import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';



@Component({
  selector: 'app-modulo1',
  imports: [ RouterOutlet, MenuComponent],
  templateUrl: './modulo1.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class Modulo1Component { }
