import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  posts: any[] = []; // posts change for db later

  newPostTitle: string = ''; // Title
  newPostQuestion: string = ''; // Question body
  newComment: string = ''; // Comment
  showCommentsForPost: any; // Added showCommentsForPost property

  createPost() {
    const newPost = {
      title: this.newPostTitle,
      question: this.newPostQuestion,
      comments: [],
    };
    this.posts.push(newPost);

    this.newPostTitle = ''; // Clear the input field after creating the post
    this.newPostQuestion = ''; // Clear the input field after creating the post
  }

  upvoteComment(post: any, comment: any) {
    comment.votes++; // Increment the vote counter for the comment
  }

  showComments(post: any) {
    if (this.showCommentsForPost === post) {
      this.showCommentsForPost = null; // Hide the comments if already shown
    } else {
      this.showCommentsForPost = post; // Show the comments
    }
  }

  addComment(post: any) {
    console.log('Post object:', post);
    console.log('newComment:', this.newComment);
    const newComment = {
      text: this.newComment,
      votes: 0, // Votes counter
    };
    post.comments.push(newComment);
    this.newComment = ''; // Clear the input field after adding the comment
  }

  ngOnInit() {
    this.posts = [
      {
        title: 'How to fix a leaky faucet?',
        question:
          'I have a leaky faucet in my kitchen. Any suggestions on how to fix it?',
        comments: [
          { text: 'Try tightening the faucet handle.', votes: 2 },
          { text: 'You may need to replace the washer.', votes: 1 },
        ],
      },
      {
        title: 'Best way to remove wallpaper?',
        question:
          'What is the most effective method to remove wallpaper from walls?',
        comments: [
          { text: 'Use a wallpaper steamer for easy removal.', votes: 4 },
          {
            text: 'Try using a wallpaper scoring tool before applying a remover solution.',
            votes: 2,
          },
        ],
      },
      {
        title: 'How to unclog a drain?',
        question: 'My bathroom sink is clogged. Any tips on how to unclog it?',
        comments: [
          { text: 'Pour boiling water down the drain.', votes: 3 },
          { text: 'Try using a plunger.', votes: 2 },
          { text: 'Use a drain snake to remove the clog.', votes: 1 },
        ],
      },
      {
        title: 'Tips for painting a room?',
        question:
          'I want to paint my living room. Any advice for a smooth painting process?',
        comments: [
          {
            text: 'Prepare the walls by cleaning and patching any holes.',
            votes: 5,
          },
          { text: "Use painter's tape to protect trim and edges.", votes: 3 },
          {
            text: 'Apply primer before painting for better adhesion.',
            votes: 2,
          },
          {
            text: 'Use a roller for large areas and a brush for corners and edges.',
            votes: 1,
          },
        ],
      },
      {
        title: 'How to install a ceiling fan?',
        question:
          'I bought a new ceiling fan. Any instructions on how to install it?',
        comments: [
          {
            text: 'Turn off the power to the circuit before installation.',
            votes: 4,
          },
          {
            text: 'Read the installation manual for specific instructions.',
            votes: 3,
          },
          {
            text: 'Use a ladder and safety precautions when working at heights.',
            votes: 2,
          },
          {
            text: 'Connect the wires according to the wiring diagram.',
            votes: 1,
          },
        ],
      },
    ];
  }
}
