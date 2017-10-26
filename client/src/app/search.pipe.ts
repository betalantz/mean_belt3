import { Pipe, PipeTransform } from '@angular/core';
import { Poll } from './poll'

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(polls: Array<Poll>, search_text?: string): Array<Poll> {
    if(!search_text) {return polls}
    
    search_text = search_text.toLowerCase()

    return polls.filter(poll => poll.author.toLowerCase().includes(search_text) || poll.question.includes(search_text));
  }

}
