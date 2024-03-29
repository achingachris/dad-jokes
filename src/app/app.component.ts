import { Component } from '@angular/core';
import { JokesService } from './jokes.service';
import { pwa } from 'pwafire';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
  
export class AppComponent {
  joke = 'Make Me Laugh!';
  jokeCopied = false;
  title = 'Dad jokes';

  constructor(private jokeService: JokesService) {}

  fetchJoke(): void {
    this.jokeService.getJoke().subscribe((data: any) => {
      this.joke = data.joke;
    });
  }

  async copyJoke(joke: string) {
    try {
      const res = await pwa.copyText(joke);
      this.jokeCopied = res.ok;
      setTimeout(() => (this.jokeCopied = false), 5000);
    } catch (error) {
      console.log(error);
    }
  }

  async shareJoke() {
    const shareOptions = {
      title: 'Check out this joke!',
      text: `${this.joke} @WTM_Pwani #DevFestPwani #DevFest2023 #askmoringa @moringaschool @OnlyDevs_Ke`,
      url: 'https://dadjokes-phi.vercel.app/',
    };
    

    try {
      await pwa.Share(shareOptions);
    } catch (error) {
      console.log(error);
    }
  }
}
