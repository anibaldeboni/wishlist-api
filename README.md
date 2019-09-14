# Wishlist API

A simple NodeJS API build using
- Express
- Sequelize
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

If it's the first time you run the application, you must run the migrations
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
## [POST] /session/signup
Registering a new user, return 201 if user was created or 422 is user already exists
```sh
curl -X POST \
  http://localhost:3000/session/signup \
  -H 'Content-Type: application/json' \
  -d '{
	"name": "usuario",
	"email": "usuario@email.com",
	"password": "senha"
}'
```
## [POST] /session/auth
User login. Returns 201 if authentication is successful or 401 if email/password is incorrect
```sh
curl -X POST \
  http://localhost:3000/session/auth \
  -H 'Content-Type: application/json' \
  -d '{
	"email": "usuario@email.com",
	"password": "senha"
}'
```
## [DELETE] /users
User deletion. Returns 200 if user was deleted or 500 if some error ocurred
```sh
curl -X DELETE \
  http://localhost:3000/user \
  -H 'Authorization: Bearer <auth token>' \
  -H 'Content-Type: application/json'
```
## [PUT] /users
Updates user information. Returns 201 if user was successfully updated or 500 if some error occured.
You may inform at least one field (name or email) to update or 400 error will be returned
```sh
curl -X PUT \
  http://localhost:3000/users \
  -H 'Authorization: Bearer <auth token>' \
  -H 'Content-Type: application/json' \
  -d '{
	"name": "novo nome usuario",
    "email": "novousuario@email.com"
}'
```

## Adding item to wishlist
```
[POST] /wishlist/:userid
[GET] /wishlist/:userid
```