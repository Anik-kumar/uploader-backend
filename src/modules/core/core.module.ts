import { Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { LoggingInterceptor } from '../../common/interceptors/logging.interceptor';
//import { TransformInterceptor } from '../../common/interceptors/transform.interceptor';

@Module({
    providers: [
        //{ provide: APP_INTERCEPTOR, useClass: TransformInterceptor },
        { provide: APP_INTERCEPTOR, useClass: LoggingInterceptor },
    ],
})
export class CoreModule {}