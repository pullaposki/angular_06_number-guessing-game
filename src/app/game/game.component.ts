import { Component } from '@angular/core';

@Component({
  selector: 'game',
  templateUrl: './game.component.html',
})
export class GameComponent {
  constructor() {}
  _target: number = Math.floor(Math.random() * 10) + 1;
  _guess: number = 0;
  _message: string = '';

  checkGuess() {
    if (this._guess === this._target) {
      this._message = 'You guessed it!';
    } else if (this._guess < this._target) {
      this._message = 'Too low!';
    } else {
      this._message = 'Too high!';
    }
  }
}
