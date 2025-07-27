import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { catchError, throwError } from 'rxjs';

export const errorHandlingInterceptor: HttpInterceptorFn = (req, next) => {
  let toastr = inject(ToastrService)
  return next(req).pipe(catchError((err) => {
    toastr.error("Unexpected Error", "Error")
    return throwError(() => err)
  }));
};
