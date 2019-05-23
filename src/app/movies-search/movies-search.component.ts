import { Component, OnInit } from '@angular/core';
import { ApiMoviesService } from '../api-movies.service';

@Component({
  selector: 'app-movies-search',
  templateUrl: './movies-search.component.html',
  styleUrls: ['./movies-search.component.scss']
})
export class MoviesSearchComponent implements OnInit {

  moviesFound:object[];
  query=''

  constructor(private api:ApiMoviesService) { }

  ngOnInit() {  }

  search(){
    console.log(this.query);
    this.api.searchMovies(this.query).subscribe( (res:any) =>{  
      console.log(res)
      this.moviesFound=res.results;
    })
  }

}
