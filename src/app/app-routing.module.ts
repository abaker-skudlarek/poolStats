import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SecretAuthComponent } from './secret-auth/secret-auth.component';
import { AuthGuard } from './services/auth.guard';
import { AppComponent } from './app.component';
import { StraightPoolComponent } from './straight-pool/straight-pool.component';
import { NineBallComponent } from './nine-ball/nine-ball.component';
import { EightBallComponent } from './eight-ball/eight-ball.component';
import { MatchHistoryComponent } from './match-history/match-history.component';
import { HelpComponent } from './help/help.component';

const routes: Routes = [
  { path: 'secret', component: SecretAuthComponent, canActivate: [AuthGuard]},
  { path: 'straightPool', component: StraightPoolComponent },
  { path: 'nineBall', component: NineBallComponent },
  { path: 'eightBall', component: EightBallComponent },
  { path: 'matchHistory', component: MatchHistoryComponent },
  { path: 'help', component: HelpComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
