# Crash Course PERN

https://www.youtube.com/watch?v=ldYcgPKEZC8

## Intro

- We are gonna build a simple PERN To Do List

## Overview Diagram

![Diagram](image.png)

- Just remembering that the Restful API is responsible for **instructing** the database about what CRUD operations should be done

## Bulding the Server

- npm install express pg cors
- npm install --save-dev nodemon

### Observations and new things learned:

- cors package

  - cors package middleware abstracts the configuration of the headers

- app.use(express.json()); // Gives us access to the req body
  - Since express 4.16, there's no need to install body-parser
