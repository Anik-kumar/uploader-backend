const { v4: uuidv4 } = require("uuid");
import { generateRandomString } from "../../../common/utils/keywordGenerator"

export class NewUser {
    email: string;
    id: string;
    password: string;
    first_name: string;
    last_name: string;
    phone: string;
    cloud_provider: string;
    email_verified: boolean;
    hashing_salt: string;
    generated_salt: string;
    is_active: boolean;
    create_time: number;
    last_updated: number;

    constructor(
        email: string,
        hash_password: string,
        cloud_provider: string,
        hashing_salt: string,
        first_name: string,
        last_name: string,
        phone: string = null,
        is_active: boolean = false,
        email_verified: boolean = false,
    ) {
        this.email = email;
        this.id = uuidv4();
        this.password = hash_password;
        this.cloud_provider = cloud_provider;
        this.first_name = first_name;
        this.last_name = last_name;
        this.phone = phone;
        this.email_verified = email_verified;
        this.hashing_salt = hashing_salt + generateRandomString(16);
        this.is_active = is_active;
        this.create_time = Date.now();
        this.last_updated = Date.now();
    }
}
