import { Component, OnInit } from '@angular/core';
import { Post } from '../dto';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  posts: Post[];

  constructor(http: HttpClient) {
    http.get<Post[]>("http://5bbcd6e229214000136cc0bb.mockapi.io/post")
      .subscribe((postsReceived: Post[]) => {
        this.onDataReceived(postsReceived);
      });
  }

  ngOnInit() {
    
  }

  onDataReceived(postsReceived: Post[]) {
    this.posts = postsReceived;
  }

}
