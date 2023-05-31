import { Component } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  posts: any[] = [];
  newPostTitle: string = '';
  newPostQuestion: string = '';
  newComment: string = '';
  showCommentsForPost: any;

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.posts = this.postService.getPosts();
  }

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

  upvoteComment(post: any, comment: any) {
    this.postService.upvoteComment(comment);
  }

  showComments(post: any) {
    if (this.showCommentsForPost === post) {
      this.showCommentsForPost = null;
    } else {
      this.showCommentsForPost = post;
    }
  }

  addComment(post: any) {
    const newComment = {
      text: this.newComment,
      votes: 0,
    };
    this.postService.addComment(post, newComment);
    this.newComment = '';
  }
}
