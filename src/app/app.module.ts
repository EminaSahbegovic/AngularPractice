import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { AppComponent } from './app.component';
import { PostComponent } from './main-page/post/post.component';
import { MainPageComponent } from './main-page/main-page.component';
import { HttpClientModule } from '@angular/common/http';
import { MomentModule } from 'angular2-moment';
import { PostCreateComponent } from './post-create/post-create/post-create.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Route[] = [
  { path: '', component: MainPageComponent },
  { path: 'create', component: PostCreateComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    MainPageComponent,
    PostCreateComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MomentModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
