import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  posts: any[] = []; //posts

  newPostTitle: string = ''; //Title
  newPostUrl: string = ''; //Url
  newComment: string = ''; //Comment

  createPost() {
    const newPost = {
      title: this.newPostTitle,
      url: this.newPostUrl,
      votes: 0,
      comments: [],
    };
    this.posts.push(newPost);

    this.newPostTitle = ''; // Clear the input field after creating the post
    this.newPostUrl = ''; // Clear the input field after creating the post
  }

  upvotePost(post: any) {
    post.votes++;
  }

  showComments(post: any) {
    this.showCommentsForPost = post;
  }

  addComment(post: any) {
    const newComment = this.newComment;
    post.comments.push(newComment);
    this.newComment = ''; // Clear the input field after adding the comment
  }
  showCommentsForPost: any; // Added showCommentsForPost property
}
