import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SandwichService } from '../sandwich.service';

@Component({
  selector: 'wsb-sandwich-list',
  templateUrl: './sandwich-list.component.html',
  styleUrls: ['./sandwich-list.component.css']
})
export class SandwichListComponent implements OnInit {
  // @ViewChild('queryInput') public queryInput;
  public searchForm: FormGroup;
  // public sandwiches = this.sandiwchService.getSandwiches();
  public sandwiches = this.activateRoute.snapshot.data.sandwiches;

  constructor(
    private sandiwchService: SandwichService,
    private formBuilder: FormBuilder,
    private activateRoute: ActivatedRoute
    ) { 
      console.log(this.activateRoute.snapshot.data.sandwiches)
    }

  public ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      query: '',
      sort: 'name',
      order: 'asc'
    })

  }

  public find() {
    const {query, sort, order} =  this.searchForm.getRawValue();
    this.sandwiches = this.sandiwchService.findSandwiches(query, sort, order);
  }
}
