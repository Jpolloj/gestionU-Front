import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetStudentListComponent } from './components/getStudenList/get-student-list/get-student-list.component';


const routes: Routes = [{
  path: 'getStudentList', component: GetStudentListComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
