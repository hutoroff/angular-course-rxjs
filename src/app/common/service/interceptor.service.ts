import { Injectable } from '@angular/core';
import {
  HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest,
  HttpResponse
} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class InterceptorService implements HttpInterceptor {

  public intercept<T extends { data: any }>(req: HttpRequest<T>, next: HttpHandler): Observable<HttpEvent<any>> {
    const headers: HttpHeaders = req.headers.append('Content-Type', 'application/json');
    const jsonReq: HttpRequest<T> = req.clone({ headers });

    return next.handle(jsonReq).filter((res: HttpResponse<T>) => res instanceof HttpResponse)
      .map((res: HttpResponse<T>) => {
        return Object.assign(
          res,
          { body: res.body && res.body.data }
        );
      })
      .catch((err: HttpErrorResponse) => {
        return Observable.throw(err);
      });
  }

}
