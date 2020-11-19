import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class HttpRequestService <T> {

  constructor(private readonly http: HttpClient) {
  }

  public request(url: string, method?, params?: any, headers?): Observable<any> {
    if (!params) {
      params = {};
    }
    let result;
    let headersChecksum;
    if ( headers !== undefined) {
      headersChecksum = headers.headers;
    }
    switch (method) {
      case 'post':
        const options = {
          headers: headers
        };
        result = this.http.post<T>(url, params, options);
        break;
      case 'get':
      default:
        result = this.http.get<T>(url, params);
        break;
    }
    return result;
  }
}
