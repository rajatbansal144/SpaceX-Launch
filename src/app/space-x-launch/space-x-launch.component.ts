import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-space-x-launch',
  templateUrl: './space-x-launch.component.html',
  styleUrls: ['./space-x-launch.component.css']
})
export class SpaceXLaunchComponent implements OnInit {

  constructor(private service :ServiceService) { }
empty=true ;
  spaceData;
spaceData2;
  ngOnInit() {
  
    this.service.getdata().subscribe((data)=>{
 console.log(data)
    this.spaceData= data;
   console.log(this.spaceData)
   this.spaceData2 = this.spaceData;
  });
  
 
}
  
  yearSort(year){
    this.spaceData = this.spaceData2;
   
    let yearFilter = this.spaceData.filter(function(data) {

      console.log(data.launch_year)
      return data.launch_year == year;
    });
    if(yearFilter != ''){
     this.spaceData= yearFilter;
    this.empty = true;
    }
    if(yearFilter == ''){
      
     this.empty = false;
     
     }
    
  }

  launch(value){
    console.log(value)
    this.spaceData = this.spaceData2;
    let launchFilter = this.spaceData.filter(function(data1) {
 
      return  data1.launch_success == value;
    
    });
   
    this.spaceData= launchFilter;
  }

   land(value){
    console.log(value)
    this.spaceData = this.spaceData2;
    let i =0;
    let landFilter = this.spaceData.filter(function(data1) {

      return  data1.rocket.first_stage.cores[i].land_success == value;
    
    });
   i++;
    this.spaceData= landFilter;
  }



}
