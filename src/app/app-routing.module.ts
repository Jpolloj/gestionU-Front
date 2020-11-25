import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RaccoonGameComponent } from './components/raccoon-game/raccoon-game/raccoon-game.component';


const routes: Routes = [{
  path: 'raccoonGame', component: RaccoonGameComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
