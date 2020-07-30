import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'projects/login-get-create-pet-app/src/environments/environment';
import { ApiMethod } from '../../enums/endpoints';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  public methods: ApiMethod;
  public _headers: HttpHeaders = new HttpHeaders()
    .set("accept", "application/json");
  
  public _params: HttpParams;
  
  constructor(private http: HttpClient) { 
  }

  public setHeaders (key: string, value: string): void {
    this.headers = new HttpHeaders().set(key, value);
  }


  /**
  * This function is used to handle how to make api calls providing the method, the api and data is needed (put/post).
  * @params method
  * @params api
  * @params data
  */
  requestCall(method: ApiMethod, apiUrl:string = environment.apiUrl, api: string, data?: any, params?: HttpParams): Observable<any> {
    let body = {};
    let response: Observable<any>;
    switch (method) {
      case ApiMethod.GET:
        if (params) {
          response = this.http.get(`${apiUrl}${api}`, {params: params});      
        } else {
          response = this.http.get(`${apiUrl}${api}`);      
        }    
        break;
      case ApiMethod.POST:
        if (data) {
          body = data;
        }
        response = this.http.post(`${apiUrl}${api}`, body, {headers: this.headers});
        break;
      case ApiMethod.PUT:
        if (data) {
          body = data;
        }
        response = this.http.put(`${apiUrl}${api}`, body, {headers: this.headers});      
        break;
      case ApiMethod.DELETE:
        response = this.http.delete(`${apiUrl}${api}`, {headers: this.headers});        
        break;
      default:
        response = this.http.get(`${apiUrl}${api}`, {headers: this.headers});         
        break;
    }
    return response;
  }


  public get headers() {
    return this._headers;
  }

  public set headers(headers: HttpHeaders) {
    this._headers = headers;
  }

  public get params() {
    return this._params;
  }

  public set params(params: HttpParams) {
    this._params = params;
  }

}


