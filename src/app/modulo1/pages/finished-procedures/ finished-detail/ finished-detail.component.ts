import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app--finished-detail',
  imports: [],
  templateUrl: './ finished-detail.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class FinishedDetailComponent {
  id: string | null = null;

  constructor(private route: ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get('id');
  }
 }
