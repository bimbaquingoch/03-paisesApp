import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { switchMap, tap } from 'rxjs/operators';
import { Country } from '../../interfaces/pais.interface';

@Component( {
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
} )
export class VerPaisComponent implements OnInit
{

  pais!: Country;

  // activatedRoute => viene con lo necesario para los cambios del url
  constructor (
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService
  ) { }

  ngOnInit(): void
  {
    // this.activatedRoute.params.subscribe( ( { id } ) =>
    // {
    //   console.log( id );
    //   this.paisService.getPaisPorCodigo( id ).subscribe( pais =>
    //   {
    //     console.log( pais );
    //   } );
    // } );

    /***
     * los codigos son equivalentes
     */

    this.activatedRoute.params
      .pipe(
        // importar switchMap de rxjs
        // import { switchMap } from 'rxjs/operators';
        switchMap( ( { id } ) => this.paisService.getPaisPorCodigo( id ) ),
        tap( console.log )
      )
      .subscribe( pais => this.pais = pais );
  }

}
