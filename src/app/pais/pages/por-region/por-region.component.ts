import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component( {
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
  ]
} )
export class PorRegionComponent
{
  regiones: string[] = [ 'EU', 'EFTA', 'CARICOM', 'PA', 'AU', 'USAN', 'EEU', 'AL', 'ASEAN', 'CAIS', 'CEFTA', 'NAFTA', 'SAARC' ];
  regionActiva: string = '';
  paises: Country[] = [];

  constructor ( private paisService: PaisService ) { }

  getClaseCSS( region: string ): string
  {
    return region === this.regionActiva
      ? 'btn btn-primary region-btn m-1'
      : 'btn btn-outline-primary region-btn m-1';
  }

  activarRegion( region: string )
  {

    this.regionActiva = region;

    this.paisService.buscarRegion( this.regionActiva )
      .subscribe( ( paises ) => this.paises = paises );

  }

}
