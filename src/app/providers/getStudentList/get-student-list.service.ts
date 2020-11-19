
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpRequestService } from '../http-request/http-request.service';

@Injectable({
  providedIn: 'root'
})
export class GetStudentListService {

  constructor(private readonly httpRequest: HttpRequestService<GetStudentListService>) { }

  public getStudentList(): Observable<any> {
    const url = 'http://localhost:9000/gestionU/list-students';
    return this.httpRequest.request(url, 'get');
  }
}
