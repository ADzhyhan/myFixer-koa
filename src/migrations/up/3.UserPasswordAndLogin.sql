START TRANSACTION; 
  ALTER TABLE "user" ADD "password" CHARACTER VARYING NOT NULL;
  ALTER TABLE "user" ADD "email" CHARACTER VARYING NOT NULL;
  ALTER TABLE "user" ADD CONSTRAINT user_email UNIQUE (email); 
COMMIT;