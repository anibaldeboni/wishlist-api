# Wishlist API

A simple NodeJS API build using
- Express
- PostegreSQL
- Docker

# Setup

## Installation
```
git clone  [...] wishlist-api
cd ./wishlist-api
npm install
```

## Running
To run the application type in terminal

```sh
docker-compose up
```

If it's the first time you run the application, you must create the database and run the migrations
```sh
NODE_ENV=local sequelize db:migrate
```

## Testing
To run the tests in live-mode, type:
```
npm run test:live
```

To run all tests once:
```
npm run test:once
```
# Usage
```
[POST] /session/signup
[POST] /session/auth

[GET] /users/:id
[PUT] /users/:id
[DELETE] /users/:id

[POST] /wishlist/:userid
[GET] /wishlist/:userid
```

## Registering a new user

## Authentication

## Erasing an account

## Adding item to wishlist
