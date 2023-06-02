import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderByVotes',
})
export class OrderByVotesPipe implements PipeTransform {
  transform(posts: any[]): any[] {
    return posts.sort((a, b) => b.votes - a.votes);
  }
}
