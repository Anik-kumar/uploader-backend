import { Injectable } from '@nestjs/common';
import {RegistrationDto} from "./registration.dto";

@Injectable()
export class RegistrationService {


    async registerNewUser(resgistrationForm: RegistrationDto): Promise<RegistrationDto> {
        const myPromise: Promise<RegistrationDto> = new Promise((resolve, reject) => {
            resolve(resgistrationForm)
        });
        return myPromise
    }
}
