
import { catchError, map } from 'rxjs/operators';

import { throwError as observableThrowError } from 'rxjs';
import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class RequestrService {
  private http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  /**
   * @param url: url is the URL required to make the HTTP Get request
   * @param header: optional JSON object containing the header key and value required for the request
   * @param param: optional JSON object containing key value pairs for the URL in order to have query params*
   * @return: Return a promise containing the response object with observer enabled
   */
  public get(url: string, header?: any, param?: any): Promise<any> {
    if (!header && !param) {
      return this.http.get(url, { observe: 'response' }).pipe(map(response => {
        return response || { success: false, message: 'No response from server', status: response.status };
      }), catchError((error: Response | any) => {
        return observableThrowError(error);
      })).toPromise();
    } else if (header && !param) {
      return this.http.get(url, { observe: 'response', headers: new HttpHeaders(header) }).pipe(map(response => {
        return response || { success: false, message: 'No response from server' };
      }), catchError((error: Response | any) => {
        return observableThrowError(error);
      })).toPromise();
    } else if (!header && param) {
      return this.http.get(url, { observe: 'response', params: param }).pipe(map(response => {
        return response || { success: false, message: 'No response from server' };
      }), catchError((error: Response | any) => {
        return observableThrowError(error);
      })).toPromise();
    } else {
      return this.http.get(url, { observe: 'response', headers: new HttpHeaders(header), params: param }).pipe(map(response => {
        return response || { success: false, message: 'No response from server' };
      }), catchError((error: Response | any) => {
        return observableThrowError(error);
      })).toPromise();
    }
  }

  /**
   * @param url: url is the URL required to make the HTTP POST request
   * @param body: body is a JSON object containing the content to send to the endpoint
   * @param header: optional JSON object containing the header key and value required for the request
   * @param param: optional JSON object containing key value pairs for the URL in order to have query params
   * @return: Return a promise containing the response object with oberserver enabled
   */
  public post(url: string, body: any, header?: any, param?: any): Promise<any> {
    if (!header && !param) {
      return this.http.post(url, body, { observe: 'response' }).pipe(map(response => {
        return response || { success: false, message: 'No response from server' };
      }), catchError((error: Response | any) => {
        return observableThrowError(error);
      })).toPromise();
    } else if (header && !param) {
      return this.http.post(url, body, { observe: 'response', headers: new HttpHeaders(header) }).pipe(map(response => {
        return response || { success: false, message: 'No response from server' };
      }), catchError((error: Response | any) => {
        return observableThrowError(error);
      })).toPromise();
    } else if (!header && param) {
      return this.http.post(url, body, { observe: 'response', params: param }).pipe(map(response => {
        return response || { success: false, message: 'No response from server' };
      }), catchError((error: Response | any) => {
        return observableThrowError(error);
      })).toPromise();
    } else {
      return this.http.post(url, body, { observe: 'response', headers: new HttpHeaders(header), params: param }).pipe(map(response => {
        return response || { success: false, message: 'No response from server' };
      }), catchError((error: Response | any) => {
        return observableThrowError(error);
      })).toPromise();
    }
  }

  /**
   * @param url: url is the URL required to make the HTTP PUT request
   * @param body: body is a JSON object containing the content to send to the endpoint
   * @param header: optional JSON object containing the header key and value required for the request
   * @param param: optional JSON object containing key value pairs for the URL in order to have query params
   * @return: Return a promise containing the response object with oberserver enabled
   */
  public put(url: string, body: any, header?: any, param?: any): Promise<any> {
    if (!header && !param) {
      return this.http.put(url, body, { observe: 'response' }).pipe(map(response => {
        return response || { success: false, message: 'No response from server' };
      }), catchError((error: Response | any) => {
        return observableThrowError(error);
      })).toPromise();
    } else if (header && !param) {
      return this.http.put(url, body, { observe: 'response', headers: new HttpHeaders(header) }).pipe(map(response => {
        return response || { success: false, message: 'No response from server' };
      }), catchError((error: Response | any) => {
        return observableThrowError(error);
      })).toPromise();
    } else if (!header && param) {
      return this.http.put(url, body, { observe: 'response', params: param }).pipe(map(response => {
        return response || { success: false, message: 'No response from server' };
      }), catchError((error: Response | any) => {
        return observableThrowError(error);
      })).toPromise();
    } else {
      return this.http.put(url, body, { observe: 'response', headers: new HttpHeaders(header), params: param }).pipe(map(response => {
        return response || { success: false, message: 'No response from server' };
      }), catchError((error: Response | any) => {
        return observableThrowError(error);
      })).toPromise();
    }
  }

  /**
   * @param url: url is the URL required to make the HTTP DELETE request
   * @param param: body is a JSON object containing the content to send to the endpoint
   * @param header: optional JSON object containing the header key and value required for the request
   * @return: Return a promise containing the response object with oberserver enabled
   */
  public delete(url: string, param: any, header?: any): Promise<any> {
    if (!header && param) {
      return this.http.delete(url, { observe: 'response', params: param }).pipe(map(response => {
        return response || { success: false, message: 'No response from server' };
      }), catchError((error: Response | any) => {
        return observableThrowError(error);
      })).toPromise();
    } else {
      return this.http.delete(url, { observe: 'response', headers: new HttpHeaders(header), params: param }).pipe(map(response => {
        return response || { success: false, message: 'No response from server' };
      }), catchError((error: Response | any) => {
        return observableThrowError(error);
      })).toPromise();
    }
  }
}
