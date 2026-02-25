import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './layouts/private/header/header.component';
import { concatMap, delay, Observable, of, Subscriber, Subscription } from 'rxjs';
import { AsyncPipe } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet], //AsyncPipe
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'demon-projet';

  // // letter: string = '';
  // letter1: string = '';
  // letter2: string = '';

  // // subscription1?: Subscription;
  // subscription2?: Subscription;
  // subscription3?: Subscription;

  helloObservable$?: Observable<string>;

  constructor() {
    // // this.helloObservable$ = new Observable<string>((subscriber:Subscriber<string>) => {
    // //  const message = 'Hello, Observable!';
    // //  for(let i = 0; i < message.length; i++) {
    // //     setTimeout(() => {
    // //       subscriber.next(message[i]);
    // //     }, 1000 * (i + 1));
    // //   }
    // //   setInterval(() => {
    // //     subscriber.complete();
    // //   }, 1000 * (message.length + 1));
    // // });
    
    
  }

  // ngOnInit(): void {
  //     this.helloObservable$ = of('H','e','l','l','o',',',' ','O','b','s','e','r','v','a','b','l','e','!').pipe(
  //       concatMap(letter => of(letter).pipe(delay(1000)))
  //     );
  // }

  // //ngOnInit(): void {
    // const helloObservable1 = {
    //   next: (letter: string) => {
    //     this.letter += letter;
    //   },
    //   complete: () => {
    //     console.log('Observable 1 completed');
    //   }
    // };
    // const helloObservable2 = {
    //   next: (letter: string) => {
    //     this.letter1 += letter;
    //   },
    //   complete: () => {
    //     console.log('Observable 2 completed');
    //   }
    // };

    // this.subscription1 = this.helloObservable$?.subscribe(helloObservable1);
    // this.subscription2 = this.helloObservable$?.subscribe(helloObservable2);
    // this.subscription3 = this.helloObservable$?.subscribe({
    //   next: (letter: string) => {
    //     this.letter2 += letter;
    //   },
    //   complete: () => {
    //     console.log('Observable 3 completed');
    //   }
    // });
  // //}

  // //ngOnDestroy(): void {
    // this.subscription1?.unsubscribe();
    // this.subscription2?.unsubscribe();
    // this.subscription3?.unsubscribe();
    // console.log('AppComponent destroyed and subscriptions unsubscribed');
  // //}
}
