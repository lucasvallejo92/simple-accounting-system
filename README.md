# Simple Accounting System

Hi! That's a very first **Simple Accounting System**. It was build with ReactJS and ExpressJS. 


# Files

Back-end API is located in **./api** with a 5000 port by default. Front-end or client files are located in **./client**.

## How to run ExpressJS API

To test you must first initialize the server before running the client. To do that you'll need to move to the **./api** and run the next commands:

### 1. Install all the dependencies
```
npm install
```

### 2. Generate the dist files
```
tsc -w
```

### 3. Run the server
```
node ./dist/app.js
```

## How to run ReactJS app

In the case of the client we can run locally with the following commands:

### 1. Install all the dependencies
```
npm install
```

### 2. To run locally
```
npm start
```
or
```
yarn start
```