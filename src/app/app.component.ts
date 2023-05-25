import { Component } from '@angular/core';
import { JokesService } from './jokes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  joke: string = '';

  title = 'Dad jokes';

  constructor(private jokeService: JokesService) { }  

  fetchJoke(): void {
    this.jokeService.getJoke().subscribe((data: any) => {
      this.joke = data.joke;
    });
  }

}
