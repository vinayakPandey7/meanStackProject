import { Injectable } from '@angular/core';
import {Subject} from 'rxjs'
import { post } from './post.model';
import { HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private posts: post[] = [];
  private postUpdated = new Subject <post[]>();


  constructor( private http: HttpClient) { }

  getPost() {
    return [...this.posts ];    // shorthand to get the copy of new updated post array
    
  }

  getpostUpdatedListner() {
    return this.postUpdated.asObservable();
  }

  addPost(title: String, content: String) {
    const post: post = { id: null,title: title, content: content };
    this.http.post<{message: string }>('http://localhost:3000/api/addPost', post).subscribe((responceData) => {
      console.log(responceData.message);
      this.posts.push(post);
      this.postUpdated.next([...this.posts]);
    } );
  }



}
