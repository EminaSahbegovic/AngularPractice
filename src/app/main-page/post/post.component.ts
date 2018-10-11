import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../../dto';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() post: Post;
  Http: HttpClient;
  isDeleted: boolean;

  constructor(http: HttpClient) {
    this.Http = http;
  }

  ngOnInit() {
  }

  OnDelete() {
    this.Http.delete<Post>("http://5bbcd6e229214000136cc0bb.mockapi.io/post/" + this.post.id) 
    .subscribe((deletedPost: Post) => {

      this.isDeleted = true;

    });

  }

}
