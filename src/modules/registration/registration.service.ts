import { Injectable } from '@nestjs/common';
import {RegistrationDto} from "./registration.dto";

@Injectable()
export class RegistrationService {

    public registerNewUser(resgistrationForm: RegistrationDto): any {
        return resgistrationForm
    }
}
