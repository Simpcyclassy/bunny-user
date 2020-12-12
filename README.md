# bunny-users
A set of rest endpoints for bunny users


## Table of Content

 * [Usage](#usage)

 * [Link to Base URL](#link-to-base-url)

 * [Built With](#built-with)
 
 * [Project setup](#project-setup)

 * [API Documentation](#api-documentation)
 
 * [Author](#author)
## Usage
#### Exposed endpoints:
| Endpoint                                         | Purpose                                                             |
|--------------------------------------------------|---------------------------------------------------------------------|
| POST `/users`                                    | Creates a user with a unique id                                     |
| GET `/users`                                     | Fetches a list of all users                                         |
| PATCH `/users/:id`                               | Updates a user by its id                                            |
| DELETE `/users/:id`                              | Deletes a user by its id                                            |
| GET `/users/:id`                                 | Gets a user by its id                                               |

## Link to Base URL
 * [link](https://bunny-user.herokuapp.com/)


## Built With
 * [Express.js](https://expressjs.com/)

 * [Typescript](https://www.typescriptlang.org/)

 * [Node.js](https://nodejs.org/en/)

 * [MongoDB](https://www.mongodb.com/)

 * [Postman](https://www.postman.com/)


## Project Setup
### Installing dependencies
```
yarn install
```
### Compiles and minifies for production
```
yarn build
```

### Start server
To lint the code run:

```
yarn start:dev
```

## API Documentation
*  [documentation](https://www.getpostman.com/collections/01c954f64112385eddfd)

## Author
*  [Chioma Onyekpere](https://www.linkedin.com/in/chioma-onyekpere)