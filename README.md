# Crash Course PERN

https://www.youtube.com/watch?v=ldYcgPKEZC8

## Intro

- We are gonna build a simple PERN To Do List

## Overview Diagram

![Diagram](assets/image.png)

- Just remembering that the Restful API is responsible for **instructing** the database about what CRUD operations should be done

## Bulding the Server

- npm install express pg cors
- npm install --save-dev nodemon

### Observations and new things learned:

- cors package

  - cors package middleware abstracts the configuration of the headers

- app.use(express.json()); // Gives us access to the req body
  - Since express 4.16, there's no need to install body-parser

## Creating Postgres DB and Table

- Main commands:

  - \l => list all database in postgresql
  - \c => move inside a database
  - \dt => show table in database
  - CREATE DATABASE nameiwant; => create a database with the name I want
  - CREATE TABLE anynameiwant; => create the table called todo

- Steps:
  - Created the database.sql file with the query
  - Open terminal
    - psql -U postgres
    - Run the query in the terminal
