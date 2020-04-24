import { HostListener, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import * as firebase from 'firebase';
import 'firebase/firestore';

import { User } from '../models/user.model';
import { KEY_CODE } from '../KEY_CODE';
import { EightBallModel } from '../models/eightBall.model';

@Component({
  selector: 'app-eight-ball',
  templateUrl: './eight-ball.component.html',
  styleUrls: ['./eight-ball.component.css']
})

export class EightBallComponent implements OnInit
{
  firebaseDB = firebase.firestore();

  game: EightBallModel = {
    raceTo: 0,
    userScore: 0,
    ghostScore: 0,
    date: new Date(),
    saveName: ''
  };

  constructor()
  { }

  ngOnInit(): void
  { }

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent)
  {
    if (event.keyCode === KEY_CODE.RIGHT_ARROW)
    {
      this.ghostIncrement();
    }
    else if (event.keyCode === KEY_CODE.LEFT_ARROW)
    {
      this.playerIncrement();
    }
  }

  playerIncrement()
  {
    if (this.game.userScore < this.game.raceTo)
    {
      this.game.userScore += 1;
    }
  }

  playerDecrement()
  {
    this.game.userScore -= 1;
  }

  ghostIncrement()
  {
    if (this.game.ghostScore < this.game.raceTo)
    {
      this.game.ghostScore += 1;
    }
  }

  ghostDecrement()
  {
    this.game.ghostScore -= 1;
  }

  submit()
  {
    const user = firebase.auth().currentUser;

    this.firebaseDB.collection('users')
      .doc(user.uid)
      .collection('eightBall')
      .add(this.game);
  }




}












