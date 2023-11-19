import { Component, Input, SimpleChanges, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { single } from 'rxjs';
import { state } from '@angular/animations';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  @Input({ required: true }) duration = 0;
  @Input({ required: true }) message = '';
  counter = signal(0);
  counterRef: number | undefined;


  constructor() {
    //No ASYNC
    //antes de que se renderice el componente
    console.log('constructor');
    console.log('-'.repeat(10));
  }

  ngOnChanges(changes: SimpleChanges) {
    //Antes de que se renderice el componente y durante su ciclo de vida
    console.log('ngOnchanges');
    console.log('-'.repeat(10));
    console.log(changes);
    const duration = changes['duration']
    if (duration && duration.currentValue !== duration.previousValue) {
      this.doSomething();
    }

  }

  ngOnInit() {
    //Inicializa el componente
    //Corre una vez 
    console.log('ngOnInit');
    console.log('-'.repeat(10));
    console.log('duration =>', this.duration);
    console.log('message =>', this.duration);

    this.counterRef = window.setInterval(() => {
      console.log('run interval')
      this.counter.update(statePrev => statePrev + 1);
    }, 1000)

  }

  ngAferViewInit() {
    //Cuando se renderiza el componente
    console.log('ngAferViewInit');
    console.log('-'.repeat(10));
  }


  ngOnDestroy() {
    //Cuando se renderiza el componente
    console.log('ngOnDestroy');
    console.log('-'.repeat(10));
    window.clearInterval(this.counterRef);
  }

  doSomething() {
    console.log('Change duration');
    console.log('-'.repeat(10));
  }
}