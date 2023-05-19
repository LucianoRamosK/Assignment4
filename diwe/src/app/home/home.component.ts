import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  posts: any[] = []; //posts

  newPostTitle: string = ''; //Title
  newPostQuestion: string = ''; //Question
  newComment: string = ''; //Comment

  createPost() {
    const newPost = {
      title: this.newPostTitle,
      url: this.newPostQuestion,
      votes: 0, //votes counter
      comments: [],
    };
    this.posts.push(newPost);

    this.newPostTitle = ''; // Clear the input field after creating the post
    this.newPostQuestion = ''; // Clear the input field after creating the post
  }

  upvotePost(post: any) {
    post.votes++; //incremment the vote counter
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
