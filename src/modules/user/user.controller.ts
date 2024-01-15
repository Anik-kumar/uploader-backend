import {RolesGuard} from "../../common/guards/roles.guard";
import { Body, Controller, Post, Req, Res, UseGuards } from "@nestjs/common";
import {RegistrationDto} from "./dto/registration.dto";
import {UserService} from "./user.service";
// import {generateRandomString} from "../../../dist/common/utils/keywordGenerator";
import { generateRandomString } from "../../common/utils/keywordGenerator"

@UseGuards(RolesGuard)
@Controller('user')
export class UserController {

    constructor(private readonly userService: UserService) {}

    @Post("/register/v1")
    async register(@Body() registrationForm: RegistrationDto): Promise<any> {
        console.log(registrationForm);
        if (registrationForm.salt.length <=0) {
            registrationForm.salt = generateRandomString(15)
        }
        return this.userService.registerNewUser(registrationForm);
    }
}
