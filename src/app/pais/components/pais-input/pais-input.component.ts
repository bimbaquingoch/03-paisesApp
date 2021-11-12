import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounce, debounceTime } from 'rxjs/operators';

@Component( {
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
} )
export class PaisInputComponent implements OnInit
{
  @Output() onEnter: EventEmitter<string> = new EventEmitter;
  @Output() onDebounce: EventEmitter<string> = new EventEmitter;

  @Input() placeholder: string = '';

  // se emite despues de escribir
  debouncer: Subject<string> = new Subject;

  termino: string = '';

  ngOnInit(): void
  {
    // se dispara una unica vez cuando el componente se inicializa
    this.debouncer.pipe( debounceTime( 500 ) ).subscribe( valor =>
    {
      this.onDebounce.emit( valor );
    } );

  }

  buscar()
  {
    this.onEnter.emit( this.termino );
  }

  teclaPresionada()
  {
    // llama al next, llama al codigo del ngOnInit
    this.debouncer.next( this.termino );
  }
}
