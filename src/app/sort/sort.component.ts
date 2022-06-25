import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.css']
})
export class SortComponent implements OnInit {

  constructor(private api:ApiService) { }

  ngOnInit(): void {
  }

  sortbyname(){
    this.api.sendclickevent();

  }
  sortbyage(){
    this.api.sendclickevent();
  }

}
