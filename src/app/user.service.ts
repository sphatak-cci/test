import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = 'https://api.github.com/';
  users;
  constructor(
    private http: HttpClient
  ) { }

  searchUser(name: string) {
    this.http.get(`${this.apiUrl}search/users?q=${name}&client_id=d47e4584cc487be21830&client_secret=c3e68a66cdbde5237bcd864df2447beaeabccda9`).subscribe(usr => {
      usr ? this.users = usr['items'] : this.users = []
    })
  }

  getUser(name: string) {
    return this.http.get(`${this.apiUrl}users/${name}?client_id=d47e4584cc487be21830&client_secret=c3e68a66cdbde5237bcd864df2447beaeabccda9`)
  }

  getRepos(name:string){
    return this.http.get(`${this.apiUrl}users/${name}/repos?client_id=d47e4584cc487be21830&client_secret=c3e68a66cdbde5237bcd864df2447beaeabccda9`)

  }

  clear() {
    this.users = []
  }

}
