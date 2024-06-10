import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable()
export class MovieService {

  private baseUrl: string = 'http://localhost:8081';

  constructor() {}

  getMovies() {
    return axios.get(`${this.baseUrl}/filmes`)
      .then(response => response.data)
      .catch(error => {
        console.error('Error fetching movies:', error);
        throw error;
      });
  }
}
