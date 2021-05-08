import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SandwichService } from '../sandwich.service';

@Component({
  selector: 'wsb-sandwich-list',
  templateUrl: './sandwich-list.component.html',
  styleUrls: ['./sandwich-list.component.css']
})
export class SandwichListComponent implements OnInit {
  // @ViewChild('queryInput') public queryInput;
  public searchForm: FormGroup;
  public sandwiches = this.sandiwchService.getSandwiches();

  constructor(
    private sandiwchService: SandwichService,
    private formBuilder: FormBuilder
    ) { }

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
