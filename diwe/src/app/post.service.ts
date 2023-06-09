import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private posts: any[] = [];

  constructor() {
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

  // get all the posts to list at the home page
  getPosts() {
    return this.posts;
  }

  // create post feature
  createPost(newPost: any) {
    this.posts.push(newPost);
  }

  // add comment feature
  addComment(post: any, newComment: any) {
    post.comments.push(newComment);
  }

  // update vote feature
  upvoteComment(comment: any) {
    comment.votes++;
  }

  //search feature
  searchPosts(query: string) {
    query = query.toLowerCase();
    return this.posts.filter((post) => {
      const postQuestion = post.question.toLowerCase();
      const postTitle = post.title.toLowerCase();
      return postQuestion.includes(query) || postTitle.includes(query);
    });
  }
}
