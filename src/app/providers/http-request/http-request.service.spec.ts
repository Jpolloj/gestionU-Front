import {TestBed} from '@angular/core/testing';

import {HttpRequestService} from './http-request.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {HttpMethod} from '../../enums/http-method.enum';
import {SessionStorageService} from 'ngx-webstorage';
import {HttpClient} from '@angular/common/http';

describe('HttpRequestService', () => {
  let service: HttpRequestService<any>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        HttpRequestService,
        HttpClientTestingModule,
        SessionStorageService,
        HttpClient
      ]
    });
    service = TestBed.inject(HttpRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call request', () => {
    const params = {};
    expect(service.request('/', params, HttpMethod.GET)).toBeDefined();
    expect(service.request('/', params, HttpMethod.POST)).toBeDefined();
    expect(service.request('/', params, HttpMethod.PUT)).toBeDefined();
    expect(service.request('/')).toBeDefined();
  });

  it('should call request with params', () => {
    const param = {};
    const options = {additionalHeaders: {'x-user-ip': '192.168.0.1'}};
    expect(service.request('/', param, HttpMethod.GET, options)).toBeDefined();
    expect(service.request('/', param, HttpMethod.POST, options)).toBeDefined();
    expect(service.request('/', param, HttpMethod.PUT, options)).toBeDefined();
  });
});
