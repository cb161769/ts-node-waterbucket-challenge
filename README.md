# ts-node-waterbucket-challenge
## Table of contents
* [Description](#description)
* [Features](#features)
* [Technologies Used](#technologies)
* [Project Composition](#projectcomposition)
* [Run Locally](#installationguide)
* [Run Dockerfile](#rundockerfile)
* [API Reference](#APIReference)
---
## Description

* A RESTFul API to solve the classic water jug riddle. 
---
## Features
* Messages that are not understood or any exceptions raised within the API are handled.
* Compute any possible solutions from the water-jug-riddle, if there's no solutions the response will be `unsolved`.
* Logs requests and trace possible exceptions.
---
## Technologies
The project is created with or uses:

* [NestJs](https://nestjs.com/) 
* [Redis](https://redis.io/)
* [Jest](https://jestjs.io/)
* [TypeScript](https://www.typescriptlang.org/)
* [Visual Studio Code IDE](https://code.visualstudio.com/)
* [GIT](https://git-scm.com/)
* [Docker](https://www.docker.com/)
---
## Project Composition

```
├── src
├── app.module.ts
├── main.ts
├── modules
|  ├── bucket
|  |  ├── bucket.module.ts
|  |  ├── controllers
|  |  ├── dto
|  |  ├── enums
|  |  ├── models
|  |  ├── services
|  |  └── utils
|  └── common
|     ├── cache
|     ├── common.module.ts
|     ├── config
|     ├── exceptions
|     ├── logger
|     ├── swagger
|     └── transformers
```

---

## Run Locally
1. Clone the project
```bash
git clone https://github.com/cb161769/ts-node-waterbucket-challenge.git
```
2. Go to the project directory using the following command : 
```bash
cd ts-node-waterbucket-challenge
```
3. Install the project dependencies
```bash
npm run install
```
4. Build the project
```bash
npm run build
```
5. Add the following enviroment variables (.env) file: 
```bash
NODE_ENV=production
DEBUG=true
PORT=8080
```
6. Start the server
```bash
npm run start
```
---
## Run Dockerfile
1. Go to this path inside the project **ts-node-waterbucket-challenge** and run on the terminal  the following commands:
```bash
  docker build -t ts-node-waterbucket-challenge:latest
  docker run -d --name waterbucket-challenge ts-node-waterbucket-challenge:latest
```

2. Now you can run the application in the following URL: http://localhost:8080
---
## API Reference

#### Compute

```http
  POST /api/v1/waterbucket/compute
```
##### Request Body
```json
{
  "amountWanted": 1000,
  "bucket": {
    "first": 1000,
    "second": 1000
  }
}

```
###### Description of the Request Body

| Property | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `amountWanted` | `number` | **Required**. the amount wanted of gallons |
| `bucket.first` | `number` | **Required**. first jug water capacity |
| `bucket.second` | `number` | **Required**. second jug water capacity |
---
###### Responses

* sucessful response

```json
{
  "code": 201,
  "data": {
    "status": "Solved",
    "solution": [
      {
        "step": 0,
        "action": "start with     ",
        "bucketOne": 0,
        "bucketTwo": 0
      },
      {
        "step": 1,
        "action": "fill jug Two **",
        "bucketOne": 0,
        "bucketTwo": 1000
      }
    ]
  },
  "path": "/api/v1/waterbucket/compute"
}

```
* sucessful response (unsolved)

```json
{
  "code": 201,
  "data": {
    "status": "Unsolved",
    "solution": null
  },
  "path": "/api/v1/waterbucket/compute"
}
```

* an error occured 

```json
{
  "code": 400,
  "path": "/api/v1/waterbucket/compute",
  "error": {
    "message": [
      "amountWanted must not be greater than 1000",
      "amountWanted must be a positive number",
      "amountWanted should not be empty",
      "amountWanted must be a number conforming to the specified constraints"
    ],
    "error": "Bad Request",
    "statusCode": 400
  },
  "data": null
}

```