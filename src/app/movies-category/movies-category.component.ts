import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { ApiMoviesService } from '../api-movies.service';


@Component({
  selector: 'app-movies-category',
  templateUrl: './movies-category.component.html',
  styleUrls: ['./movies-category.component.scss']
})
export class MoviesCategoryComponent implements OnInit {

  category:string;
  validCategories=['top_rated','upcoming','popular'];
  movies:[];

  constructor(private route:ActivatedRoute, private router: Router, private api:ApiMoviesService) { }

  ngOnInit() {

    //suscribe ejecuta la funcion cada vez q cambia el parametro
    this.route.params.subscribe(params =>{
      this.category = params.category.replace('_','');
    //el replace es para quitar el _ de top_rated y no la muestre en el h1

    //con estos no cambia el parametro
    //this.category =this.route.snapshot.paramMap.get('category');
    //this.category =this.route.snapshot.paramscategory;

    if(this.validCategories.includes(params.category)){
      //get movies
      this.api.getCategory(params.category).subscribe((response: any) => {
        this.movies = response.results;
        console.log(response);
      })  

    }else{
      //redirect to /movies/popular
      this.router.navigate(['/movies/popular'])
    }
  });

  }

}
