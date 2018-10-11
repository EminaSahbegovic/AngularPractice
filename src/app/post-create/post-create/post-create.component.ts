import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  data: FormGroup;
  http: HttpClient;
  router: Router;

  constructor(httpFromAngular: HttpClient, routerFromAngular: Router) {
    this.data = new FormGroup({
      title: new FormControl(),
      createdBy: new FormControl(),
      text: new FormControl(),
      createdAt: new FormControl()
    });
    this.http = httpFromAngular;
    this.router = routerFromAngular;
  }

  ngOnInit() {
  }

  onFormSubmitted() {
    this.data.controls.createdAt.setValue((new Date()).getTime() / 1000);
    this.http.post("http://5bbcd6e229214000136cc0bb.mockapi.io/post", this.data.value)
      .subscribe(() => {
        this.router.navigate(['/']);
      });
  }

}
