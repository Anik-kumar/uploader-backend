import { Injectable } from '@nestjs/common';
import {RegistrationDto} from './dto/registration.dto'
import {NewUser} from './dto/newuser.dto'
import {UserRepository} from './user.repository'

@Injectable()
export class UserService {
    constructor(private userRepository: UserRepository) {}

    async registerNewUser(
        registrationDto: RegistrationDto,
    ){
        // const myPromise: Promise<any> = new Promise(
        //     (resolve, reject) => {
        //
        //     },
        // );
        // return myPromise;

        try {
            let user = new NewUser(
                registrationDto.email,
                registrationDto.password,
                registrationDto.cloudProvider,
                registrationDto.salt,
                registrationDto.firstName,
                registrationDto.lastName,
                registrationDto.phone,
            );

            let resp = await this.userRepository.createUser(user);
            console.log("===== resp ======")
            console.log(resp)
            // resolve(resp);
        } catch (ex) {
            console.log(ex)
            // reject(ex)
        }
    }


}
