DROP DATABASE IF EXISTS stocks_db;

CREATE DATABASE stocks_db;

USE stocks_db;

CREATE TABLE user_owned (
  shareName varchar(30) not null,
  purchasedPrice decimal(30,5) not null,
  volume integer(30) not null,
  purchaseDate varchar(150) not null,
  primary key(shareName)
);
select * from user_owned;