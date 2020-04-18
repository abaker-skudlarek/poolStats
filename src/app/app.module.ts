import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { StorageServiceModule } from 'ngx-webstorage-service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SecretAuthComponent } from './secret-auth/secret-auth.component';
import { StraightPoolComponent } from './straight-pool/straight-pool.component';
import { NineBallComponent } from './nine-ball/nine-ball.component';
import { MatchHistoryComponent } from './match-history/match-history.component';
import { HelpComponent } from './help/help.component';

const firebaseConfig =
{
  apiKey: 'AIzaSyAwFeD6Tgzt4_fwnK7Si1o6BXjH-FGnMSs',
  authDomain: 'poolstats-8b834.firebaseapp.com',
  databaseURL: 'https://poolstats-8b834.firebaseio.com',
  projectId: 'poolstats-8b834',
  storageBucket: 'poolstats-8b834.appspot.com',
  messagingSenderId: '194830892664',
  appId: '1:194830892664:web:02063979e132949211f78d',
  measurementId: 'G-76GTNS47C'
};

@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    SecretAuthComponent,
    StraightPoolComponent,
    NineBallComponent,
    MatchHistoryComponent,
    HelpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    StorageServiceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }





