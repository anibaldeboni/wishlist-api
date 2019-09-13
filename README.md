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
createdb -h localhost -p 5432 -U root -w wishlist
NODE_ENV=local sequelize db:migrate
```

## Testing
To run the tests in live-mode, type:
```
npm run test:live
```

To run all tests at once:
```
npm run test:once
```
# Usage

## Registering a new user

## Authentication

## Erasing an account

## Adding item to wishlist
