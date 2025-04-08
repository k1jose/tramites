import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-types',
  imports: [RouterModule],
  templateUrl: './types.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TypesComponent { }
