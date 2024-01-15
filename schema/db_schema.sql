CREATE  KEYSPACE IF NOT EXISTS cloud_storage_db
    WITH REPLICATION = {
        'class' : 'SimpleStrategy',
        'replication_factor' : 1
    };


-- Query to list Keyspace
SELECT * FROM system_schema.keyspaces;

-- Query to list tables in Keyspace
SELECT table_name FROM system_schema.tables WHERE keyspace_name = 'cloud_storage_db';

-- Query to get list of columns
SELECT * FROM system_schema.columns WHERE keyspace_name = 'cloud_storage_db' AND table_name = 'table_name';



--
-- Features:
--      1. Check if email is already taken or user
--      2. Login, get record by email and match the stored hash password with hash of input password
--      3. Update password by email
--      4. Update password
CREATE TABLE IF NOT EXISTS cloud_storage_db.users (
    email text,
    id uuid,
    password text,
    first_name text,
    last_name text,
    phone text,
    cloud_provider text,
    email_verified boolean,
    hashing_salt text,
    generated_salt text,
    is_active boolean,
    create_time timestamp,
    last_updated timestamp,
    PRIMARY KEY (email, is_active, cloud_provider, email_verified)
);




--- email, text_pass  -> email, hash(text_pass) -> email, hash_pass | DB
--
-- db(emil) -> hash_pass (db) == hash(text_pass) | backend

-- It will be combination of user defined salt + system generated salt

-- Features:
--      1. Total Users count
--      2. Total users in GCP and AWS
--      3. Total Free users, paid users
--
CREATE TABLE IF NOT EXISTS cloud_storage_db.counters (
    counter_name text PRIMARY KEY,
    count counter
);

-- System Salts
-- User salts
CREATE TABLE IF NOT EXISTS cloud_storage_db.hashing_salts (
    counter_name text PRIMARY KEY,
    count counter
);


