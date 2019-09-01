import { Component, OnInit } from '@angular/core';
import { HttpClient }from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public name = "guru";

 
  users = [] as any;
constructor(private http:HttpClient){ }

  ngOnInit() {
    this.getGithubUsers(this.users);

    this.gethubUsersUsingAngular()
    .subscribe(response=> {
      

      console.log(response);
      this.users = response;
    });

  }

  getGithubUsers(users){
    return fetch("https://api.github.com/users")
    .then(function(responce){
      return responce.json()

    })
    .then(function(body){
      console.log(body)
     
      users = [] as any; 
      //return body
    })
  }
gethubUsersUsingAngular(){
  return this.http.get("http://api.github.com/users");
}


  tdHeaders = ["Login",'id',"node_id","avatar_url","gravatar_id","url", "html_url","html_url", "followers_url", "following_url","gists_url", "starred_url", "subscriptions_url", "organizations_url", "repos_url", "events_url", "received_events_url", "type","site_admin"]

}
