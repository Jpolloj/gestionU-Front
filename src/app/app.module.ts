import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetStudentListComponent } from './components/getStudenList/get-student-list/get-student-list.component';
import { HttpRequestService } from './providers/http-request/http-request.service';
import { GetStudentListService } from './providers/getStudentList/get-student-list.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    GetStudentListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HttpRequestService, GetStudentListService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
