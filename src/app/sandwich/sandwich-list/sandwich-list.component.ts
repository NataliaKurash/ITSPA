import { Component, OnInit } from '@angular/core';
import { SandwichService } from '../sandwich.service';

@Component({
  selector: 'wsb-sandwich-list',
  templateUrl: './sandwich-list.component.html',
  styleUrls: ['./sandwich-list.component.css']
})
export class SandwichListComponent implements OnInit {
  public sandwiches =  this.sandiwchService.getSandwiches();

  constructor(private sandiwchService: SandwichService) { }

  public ngOnInit(): void {
 
  }

}
