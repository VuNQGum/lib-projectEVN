import { Injectable } from '@angular/core';
import {
    HttpErrorResponse,
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
} from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, filter, switchMap, take } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
    providedIn: 'root',
})
export class AuthInterceptor implements HttpInterceptor {
    private isRefreshing = false;
    private refreshTokenSubject: BehaviorSubject<any> =
        new BehaviorSubject<any>(null);
    /**
     * Constructor
     */
    constructor(private _cookie: CookieService) { }

    /**
     * Intercept
     *
     * @param req
     * @param next
     */
    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        // Clone the request object
        let newReq = req.clone({
            headers: req.headers.set(
                'Authorization-type', 'Header'
            ),
            //withCredentials: true
        });
        newReq = this.addTokenHeader(newReq, this.accessToken);


        return next.handle(newReq).pipe(
            catchError((error) => {
                return throwError(error);
            })
        );
    }
    get accessToken(): string {
        return this._cookie.get('accessToken' ?? '');
    }

    private addTokenHeader(request: HttpRequest<any>, token: string) {
        /* for Spring Boot back-end */
        return request.clone({
            headers: request.headers.set(
                'Authorization', 'Bearer ' + token,
                // 'Content-Type', 'application/json'
            ),
        });
    }
}
