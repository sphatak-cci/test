import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';
import { Router } from '@angular/router'
import {UserService} from '../user.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(
    private router: Router,
    private userService:UserService
  ) { }

  ngOnInit() {
  }

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      map(term =>  this.userService.searchUser(term))
    )

    onSearchFocus(){
      this.router.navigateByUrl('');
    }

    clickSearch(){
      this.router.navigateByUrl('/');
    }
    
    clearPage(){
      this.userService.clear()
    }

}
