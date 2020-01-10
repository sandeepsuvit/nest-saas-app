## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Test the dynamic subdomain setup
```bash
# Add your domain entry to your /etc/host file to test this setup in a local machine
127.0.0.1	yourdomain.com www.yourdomain.com app.yourdomain.com google.yourdomain.com facebook.yourdomain.com

# Navigate to any of these urls, would result in the default page
GET http://yourdomain.com:3000/
GET http://www.yourdomain.com:3000/
GET http://app.yourdomain.com:3000/

# Navigate to any of these urls, would result in the sudomain specific responses
GET http://google.yourdomain.com:3000/
GET http://facebook.yourdomain.com:3000/
```
