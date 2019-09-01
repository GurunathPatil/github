import { Component, OnInit } from '@angular/core';
import {IpService} from './ipadress.service';
@Component({
  selector: 'app-ipaddress',
  templateUrl: './ipaddress.component.html',
  styleUrls: ['./ipaddress.component.scss']
})
export class IpaddressComponent implements OnInit {

  constructor(private ipService:IpService) { }
  data = {}
  ngOnInit() {
    this.
    ipService.getIpadress()
 .subscribe((result) =>{
   console.log(result.ip);
   
   this.
   ipService.getGeoloction(result.ip)
   .subscribe((results) =>{
     console.log(results);
     this.data = results;
   });
 });
}

}
