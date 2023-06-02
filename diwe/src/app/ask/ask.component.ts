import { Component } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-ask',
  templateUrl: './ask.component.html',
  styleUrls: ['./ask.component.css'],
})
export class AskComponent {
  newPostTitle: string = '';
  newPostQuestion: string = '';

  constructor(private postService: PostService) {}

  createPost() {
    const newPost = {
      title: this.newPostTitle,
      question: this.newPostQuestion,
      comments: [],
    };
    this.postService.createPost(newPost);
    this.newPostTitle = '';
    this.newPostQuestion = '';
  }
}
