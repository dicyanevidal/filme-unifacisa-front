import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MovieService } from '../../providers/movie.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  movies: any[] = [];

  constructor(public navCtrl: NavController, private movieService: MovieService) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
    this.movieService.getMovies().then(data => {
      console.log('Movies data:', data);
      this.movies = data;
    }).catch(error => {
      console.error('Error loading movies', error);
    });
  }
}
