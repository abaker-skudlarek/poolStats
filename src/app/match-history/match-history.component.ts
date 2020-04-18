import { Component, OnInit } from '@angular/core';

import * as firebase from 'firebase';
import 'firebase/firestore';

@Component({
  selector: 'app-match-history',
  templateUrl: './match-history.component.html',
  styleUrls: ['./match-history.component.css']
})

export class MatchHistoryComponent implements OnInit
{
  firebaseDB = firebase.firestore(); /* reference to the firebase database */

  constructor()
  { }

  ngOnInit(): void
  {
    const user = firebase.auth().currentUser;

    this.firebaseDB.collection('users')
      .doc(user.uid)
      .collection('straightPool')
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          console.log(`${doc.id} => ${doc.data()}`);
        });
      });

  }


}









