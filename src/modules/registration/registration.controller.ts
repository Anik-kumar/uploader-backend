import {Body, Controller, Post, Req, Res, UseGuards} from '@nestjs/common';
import {RegistrationService} from "./registration.service";
import {RegistrationDto} from "./registration.dto";
import {RolesGuard} from "../../common/guards/roles.guard";
import {Roles} from "../../common/decorators/roles.decorator";

@UseGuards(RolesGuard)
@Controller('registration')
export class RegistrationController {
    constructor(private readonly registrationService: RegistrationService) {
    }

    // @Post()
    // register(@Body() resgistrationForm: RegistrationDto): any {
    //     console.log(resgistrationForm)
    //     console.log("===============")
    //     return this.registrationService.registerNewUser(resgistrationForm);
    // }
    @Post("/v1")
    async register(@Body() registrationForm: RegistrationDto): Promise<any> {
        console.log(registrationForm)
        console.log("===============")
        return this.registrationService.registerNewUser(registrationForm);
    }

    @Post("/v2")
    @Roles('admin')
    async registerV2(@Body() registrationForm: RegistrationDto): Promise<any> {
        console.log(registrationForm)
        console.log("===============")
        return this.registrationService.registerNewUser(registrationForm);
    }

}
