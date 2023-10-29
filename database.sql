create database if not exists logindb;
use logindb;

create table users(
email varchar(100) primary key not null , 
password VARCHAR(255) NOT NULL ,
cedula varchar(100)
);
