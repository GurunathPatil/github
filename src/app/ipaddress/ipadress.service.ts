import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient }from '@angular/common/http';

@Injectable() 
export class IpService {
    
    constructor(private http:HttpClient){


    }
    getIpadress(){
        return this.http.get("https://jsonip.com/");
      }
      getGeoloction(ip:string){
          return this.http.get("http://ip-api.com/json/"+ip);
      }
      
}



