# Image Processing API

1. Description
2. Usage
3. Install & Run
4. Other Scripts

---

## 1. Description

This is the Udacity Project from "Backend Developement with Node.js"-Course

The API resizes Images that are given in the directory 'root/images/full', saves the resized Images in 'root/images/thumb' and send them to the Browser. The resize process dont start if a resized version of an Image with the same dimensions exist. In this case the resized Image will called from the root directory.

## 2. Usage

### How it works?

After the server runs you can call the Endpoint of the API.

> Example:<br>
>
> _localhost:3000/api/image?filename=bridge&width=500&height=500_

### filename

In the root directory where five Images given. Select one and provide the name as filename to the API.

- bridge
- haybales
- motorcycle
- winter
- wheat

### width and height

In addition provide a width and height which should the resized Image have. The width and height should be positiv numerical values.

## 3. Install & Run

### Install

Open the Project-Directory in your Termianl and run `npm install`

### Run

Build a build with `npm run build`and start the server with `npm run start`

## 4. Other Scripts

- `npm run prettier` style code with Prettier
- `npm run lint` lint with ESLint
- `npm run test` test with Jasmine
- `npm run dev` start Server with Nodemon
