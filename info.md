1. ng new nombreproyecto
2. appcomponent borramos todo y metemos todo el proyecto dentro de <router-outlet>
3. generamos componentes con ng g component movies-Category
                             ng g component movie-detail

4. en approuting asignamos rutas

import { MoviesCategoryComponent } from './movies-category/movies-category.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';

        {path:'movies/:category' , component: MoviesCategoryComponent},
        {path:'movie/:id' , component: MovieDetailComponent}
        {path:'**' , redirectTo:'/movies/popular', pathMatch:'full'}, 

5. en package json añadir --open:   "start": "ng serve --open",

6. ng g c navigation

y lo añadimos en app.component.html

<app-navigation></app-navigation>  
<router-outlet></router-outlet>

7. creamos el html en navigation:
<nav>
 <a [routerLink]="'/movies/popular'" routerLinkActive="active">popular</a>
 <a routerLink="/movies/top_rated" routerLinkActive="active">top rated</a>
  ...

8. estilos en navigation y style.scss(global proyecto)

9. vamos al componente movies category



