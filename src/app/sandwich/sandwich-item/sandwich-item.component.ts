import { Component, Input } from '@angular/core';
import { Sandwich } from '../sandiwch';

@Component({
  selector: 'wsb-sandwich-item',
  templateUrl: './sandwich-item.component.html',
  styleUrls: ['./sandwich-item.component.scss']
})
export class SandwichItemComponent {
@Input() public sandwich:Sandwich;


}
