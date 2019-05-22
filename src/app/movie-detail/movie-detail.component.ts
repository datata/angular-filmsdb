import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { ApiMoviesService } from '../api-movies.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {

  id:string;
  movieData:object;
  similarMovies:object[]


  constructor(private route:ActivatedRoute, private api:ApiMoviesService) { }

  ngOnInit() {

    this.route.params.subscribe(params =>{
          window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

          this.api.getMovie(params.id).subscribe((res:object)=>{
            console.log(res);
            this.movieData=res;
          });

          this.api.getSimilar(params.id).subscribe((res:any)=>{
            console.log(res);
            this.similarMovies=res.results;
          })



    })
  }
}
