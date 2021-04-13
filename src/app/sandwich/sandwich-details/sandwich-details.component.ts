import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Sandwich } from '../sandiwch';
import { SandwichService } from '../sandwich.service';

@Component({
  selector: 'wsb-sandwich-details',
  templateUrl: './sandwich-details.component.html',
  styles: [
  ]
})
export class SandwichDetailsComponent implements OnInit {
  public sandwichID = this.activatedRoute.snapshot.params.id;
  public sandwichDetails:Promise<Sandwich> = this.sandwichService.getSandwich(this.sandwichID);

  constructor(private activatedRoute: ActivatedRoute, private sandwichService: SandwichService) { }

  ngOnInit(): void {
  }

}
