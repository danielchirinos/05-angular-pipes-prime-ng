import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';

@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {

  transform(heroes: Hero[], sortBy?: keyof Hero | ""): Hero[] {

    // con esto se obvia el switch
    // return heroes.sort( (a,b) => (a.[sortBy] > b.[sortBy]) ? 1 :-1 )

    // para cambiarlo a ascendente o descendente podemos recibir otro paramtro y controlar el cambio
    // se puede cambiar la posicion 1 por -1 y viceversa o simplemente cambiar el >
    switch ( sortBy ) {
        case "name":
            return heroes.sort( (a,b) => (a.name > b.name) ? 1 :-1 ) ;       
        case "canFly":
            return heroes.sort( (a,b) => (a.canFly > b.canFly) ? 1 :-1 ) ;       
        case "color":
            return heroes.sort( (a,b) => (a.color > b.color) ? 1 :-1 ) ;       
        default:
            return heroes
    }
  }

}
