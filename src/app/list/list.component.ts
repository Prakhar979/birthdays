import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  clickeventsubscription :Subscription;
  data:any;

  constructor(private api:ApiService) {
    this.clickeventsubscription=this.api.getclickevent().subscribe(()=>{
      this.sortbya();
    })
   }

  ngOnInit(): void {
    this.api.getdata().subscribe((res)=>{
      this.data=res
      console.log(this.data);

    })
  }
  sortbyn(){
    let newarr=this.data.sort((a:any,b:any)=> a.name>b.name);
    this.data=newarr;
    console.log(this.data);
  }
  sortbya(){
    let newarr=this.data.sort((a:any,b:any)=> a.age - b.age);
    this.data=newarr;
  }

}
