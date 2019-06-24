import { Component, OnInit , Input} from '@angular/core';
import {Subscription } from 'rxjs'
import { post } from '../post.model';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})

export class PostListComponent implements OnInit {

  // posts = [
  //   {title : "first title", content : 'first content'},
  //   {title : "second title", content : 'second content'},
  //   {title : "third title", content : 'third content'},
  //   {title : "fourth title", content : 'fourth content'},
  // ]
  // @Input() listPost : post[] = []

  listPost: post[] = [];
  private postsSub: Subscription;
  constructor(public postService: PostsService) { }

  ngOnInit() {
    this.listPost = this.postService.getPost();
    this.postsSub = this.postService.getpostUpdatedListner().subscribe((posts: post[]) => {
      this.listPost = posts;
    });
  }


  ngOnDestroy() {
    this.postsSub.unsubscribe();
  }


}
