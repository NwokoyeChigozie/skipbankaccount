
CREATE TABLE `users` ( `id` INT NOT NULL AUTO_INCREMENT , `name` VARCHAR(100) NOT NULL , `email` VARCHAR(100) NOT NULL , `phone` VARCHAR(100) NOT NULL , `password` VARCHAR(100) NOT NULL , `country` VARCHAR(100) NOT NULL , `username` VARCHAR(100) NOT NULL , `type` VARCHAR(100) NOT NULL , `currency` VARCHAR(100) NOT NULL , `trade_status` VARCHAR(100) NOT NULL , `account_status` VARCHAR(100) NOT NULL , `account_details` VARCHAR(1000) NOT NULL , `balance` FLOAT(10,8) NOT NULL , `invested` FLOAT(10,8) NOT NULL , `last_access` VARCHAR(100) NOT NULL , `current_access` VARCHAR(100) NOT NULL , `user_withdrawable` VARCHAR(100) NOT NULL, PRIMARY KEY (`id`)) ENGINE = InnoDB;

CREATE TABLE `admin` ( `id` INT NOT NULL AUTO_INCREMENT , `username` VARCHAR(100) NOT NULL , `password` VARCHAR(100) NOT NULL , `eth_address` VARCHAR(300) NOT NULL, `bitcoin_address` VARCHAR(300) NOT NULL,  PRIMARY KEY (`id`)) ENGINE = InnoDB;
INSERT INTO `admin` (`id`, `username`, `password`) VALUES ('1', 'arkadmin', 'f10989e679fd65a11000c01a9f2af534f9bf68780a1c24ea1093a7454d6a1ea2');



CREATE TABLE `users` ( `id` INT NOT NULL AUTO_INCREMENT , `name` VARCHAR(100) NOT NULL , `email` VARCHAR(100) NOT NULL , `phone` VARCHAR(100) NOT NULL ,`dob` VARCHAR(100) NOT NULL , `password` VARCHAR(100) NOT NULL , `login_code` VARCHAR(100) NOT NULL , `country` VARCHAR(100) NOT NULL, `zip_code` VARCHAR(100) NOT NULL, `home_address` VARCHAR(100) NOT NULL, `maiden_name` VARCHAR(100) NOT NULL, `next_of_kin` VARCHAR(100) NOT NULL, `next_of_kin_address` VARCHAR(100) NOT NULL, `gender` VARCHAR(100) NOT NULL , `username` VARCHAR(100) NOT NULL , `type` VARCHAR(100) NOT NULL , `currency` VARCHAR(100) NOT NULL , `account_details` VARCHAR(1000) NOT NULL , `savings_balance` VARCHAR(100) NOT NULL , `investment_balance` VARCHAR(100) NOT NULL , `last_access` VARCHAR(100) NOT NULL , `current_access` VARCHAR(100) NOT NULL , `user_withdrawable` VARCHAR(100) NOT NULL ,`benefits` VARCHAR(100) NOT NULL,`rio` VARCHAR(100) NOT NULL , `account_status` VARCHAR(100) NOT NULL , `ssn_nin` VARCHAR(100) NOT NULL , PRIMARY KEY (`id`)) ENGINE = InnoDB;

CREATE TABLE `admin` ( `id` INT NOT NULL AUTO_INCREMENT , `username` VARCHAR(100) NOT NULL , `password` VARCHAR(100) NOT NULL , `eth_address` VARCHAR(300) NOT NULL, `bitcoin_address` VARCHAR(300) NOT NULL, `support email` VARCHAR(300) NOT NULL, `support_phone` VARCHAR(300) NOT NULL, `our_users` VARCHAR(300) NOT NULL, `active_users` VARCHAR(300) NOT NULL, `news` VARCHAR(3000) NOT NULL,  PRIMARY KEY (`id`)) ENGINE = InnoDB;
INSERT INTO `admin` (`id`, `username`, `password`) VALUES ('1', 'mybankadmin', 'bc7ee50038a9b7b36252f93834bcb466e563e0a5ae7a6372ae8a22a0240d07af');

CREATE TABLE `wire_requests` ( `id` INT NOT NULL AUTO_INCREMENT ,`email` VARCHAR(100) NOT NULL , `account_type` VARCHAR(100) NOT NULL  , `duration` VARCHAR(100) NOT NULL  , `name` VARCHAR(100) NOT NULL  , `account_number` VARCHAR(100) NOT NULL  , `address` VARCHAR(2000) NOT NULL  , `bank_name` VARCHAR(200) NOT NULL  , `swift_code` VARCHAR(100) NOT NULL  , `routine_number` VARCHAR(100) NOT NULL  , `comment` VARCHAR(3000) NOT NULL  , `status` VARCHAR(100) NOT NULL  , PRIMARY KEY (`id`)) ENGINE = InnoDB;

CREATE TABLE `paymentproof` ( `id` INT NOT NULL AUTO_INCREMENT , `username` VARCHAR(100) NOT NULL , `email` VARCHAR(100) NOT NULL , `currency` VARCHAR(100) NOT NULL, `paid_amount` VARCHAR(100) NOT NULL , `hashcode` VARCHAR(3000) NOT NULL , `time` VARCHAR(100) NOT NULL  , `status` VARCHAR(100) NOT NULL  , PRIMARY KEY (`id`)) ENGINE = InnoDB;

CREATE TABLE `withdrawal` ( `id` INT NOT NULL AUTO_INCREMENT ,`email` VARCHAR(100) NOT NULL , `account_type` VARCHAR(1000) NOT NULL , `currency` VARCHAR(1000) NOT NULL , `withdrawal_amount` VARCHAR(100) NOT NULL, `btc_address` VARCHAR(100) NOT NULL , `full_name` VARCHAR(100) NOT NULL , `account_number` VARCHAR(100) NOT NULL , `address` VARCHAR(100) NOT NULL , `bank_name` VARCHAR(100) NOT NULL , `swift_code` VARCHAR(100) NOT NULL , `routine_number` VARCHAR(100) NOT NULL  , `time` VARCHAR(100) NOT NULL , `status` VARCHAR(100) NOT NULL    , PRIMARY KEY (`id`)) ENGINE = InnoDB;


CREATE TABLE `card_requests` ( `id` INT NOT NULL AUTO_INCREMENT ,`email` VARCHAR(100) NOT NULL,`card_type` VARCHAR(100) NOT NULL , `phone` VARCHAR(1000) NOT NULL , `home_address` VARCHAR(1000) NOT NULL , `postal_code` VARCHAR(100), `status` VARCHAR(100) NOT NULL,  PRIMARY KEY (`id`)) ENGINE = InnoDB;

CREATE TABLE `grants_loans` ( `id` INT NOT NULL AUTO_INCREMENT,`name` VARCHAR(100) NOT NULL,`address` VARCHAR(1000) NOT NULL ,`email` VARCHAR(100) NOT NULL,`type` VARCHAR(100) NOT NULL , `phone` VARCHAR(1000) NOT NULL , `amount` VARCHAR(1000) NOT NULL, `duration` VARCHAR(100) NOT NULL , `postal_code` VARCHAR(100), `ssn_nin` VARCHAR(100), `date` VARCHAR(100), `status` VARCHAR(100) NOT NULL,  PRIMARY KEY (`id`)) ENGINE = InnoDB;


CREATE TABLE `benefits` ( `id` INT NOT NULL AUTO_INCREMENT , `email` VARCHAR(100) NOT NULL , `amount` VARCHAR(100) NOT NULL , `status` VARCHAR(100) NOT NULL  , PRIMARY KEY (`id`)) ENGINE = InnoDB;

