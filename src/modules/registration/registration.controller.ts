import {Body, Controller, Post, Req, Res} from '@nestjs/common';
import {RegistrationService} from "./registration.service";
import {RegistrationDto} from "./registration.dto";

@Controller('v1/registration')
export class RegistrationController {
    constructor(private readonly registrationService: RegistrationService) {
    }

    @Post()
    register(@Body() resgistrationForm: RegistrationDto): any {
        console.log(resgistrationForm)
        console.log("===============")
        return this.registrationService.registerNewUser(resgistrationForm);
    }
}
