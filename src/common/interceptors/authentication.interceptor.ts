import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class AuthenticationInterceptor implements NestInterceptor {
    private headers: any;
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        console.log('==== AuthenticationInterceptor ====');
        let request = context.switchToHttp().getRequest()
        const token = request.headers['authorization'];
        console.log(token)
        // @TODO
        // 1. decrypt jwt token
        // 2. Check if the token is valid
        // 3. check if on expired
        //
        console.log(request.headers)
        return next.handle()
    }
}