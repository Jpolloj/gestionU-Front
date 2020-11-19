import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpRequestService } from '../http-request/http-request.service';

@Injectable({
  providedIn: 'root'
})
export class GetCollageListService {


  constructor(private readonly httpRequest: HttpRequestService<GetCollageListService>) { }

  public getStudentList(): Observable<any> {
    const url = 'http://localhost:9000/gestionU/list-collage';
    return this.httpRequest.request(url, 'get');
  }
}
