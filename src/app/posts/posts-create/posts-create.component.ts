import { Component, OnInit } from '@angular/core';
import {post} from '../post.model';
import {NgForm} from '@angular/forms'
import { from } from 'rxjs';
import { PostsService } from '../posts.service';
@Component({
  selector: 'app-posts-create',
  templateUrl: './posts-create.component.html',
  styleUrls: ['./posts-create.component.css']
})
export class PostsCreateComponent implements OnInit {
  // @Output() postCreated = new EventEmitter<post>();
  constructor(public postService: PostsService) { }

  ngOnInit() {
  }

  onAddPost(form: NgForm) {
    if (form.invalid ) {return; }
    this.postService.addPost(form.value.title, form.value.content );
  }

}
