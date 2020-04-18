import { HostListener, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import * as firebase from 'firebase';
import 'firebase/firestore';

import { User } from '../user.model';
import { KEY_CODE } from '../KEY_CODE';
import { StraightPoolModel } from '../STRAIGHT_POOL_MODEL';

@Component({
  selector: 'app-straight-pool',
  templateUrl: './straight-pool.component.html',
  styleUrls: ['./straight-pool.component.css']
})

export class StraightPoolComponent implements OnInit
{
  firebaseDB = firebase.firestore(); /* reference to the firebase database */

  game: StraightPoolModel = { /* instantiation of our straight pool model */
    total: 0,
    run: 0,
    highestRun: 0,
    runHistory: [],
    saveName: '',
    date: new Date()
  };

  constructor()
  { }

  ngOnInit(): void
  { }

  /* listen for key events, call functions if they are pressed */
  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent)
  {
    if (event.keyCode === KEY_CODE.RIGHT_ARROW)
    {
      this.increment();
    }
    else if (event.keyCode === KEY_CODE.LEFT_ARROW)
    {
      this.decrement();
    }
    else if (event.keyCode === KEY_CODE.DOWN_ARROW)
    {
      this.miss();
    }
  }

  decrement()
  {
    this.game.total -= 1;
    this.game.run -= 1;
  }

  increment()
  {
    this.game.total += 1;
    this.game.run += 1;
  }

  miss()
  {
    /* add run to run history array (as long as you aren't at 0)*/
    if (this.game.run !== 0)
    {
      this.game.runHistory.push(this.game.run);
    }

    /* if current run is higher than highest run, update highest run */
    if (this.game.run >= this.game.highestRun)
    {
      this.game.highestRun = this.game.run;
    }

    /* set current run to 0 */
    this.game.run = 0;
  }

  submit()
  {
    /* get the user reference */
    const user = firebase.auth().currentUser;

    /* add the game using the user id */
    this.firebaseDB.collection('users')
      .doc(user.uid)
      .collection('straightPool')
      .add(this.game);
  }

  /* TODO

      Add confirmation on page that information was saved in firebase

      make data consistent so it doesn't change when page is reloaded

    */


}


