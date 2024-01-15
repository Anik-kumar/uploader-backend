export class User {
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
  create_time: bigint;
  last_updated: bigint;
}
