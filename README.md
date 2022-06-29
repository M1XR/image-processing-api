# Image Processing API

1. Description
2. Install & Run
3. Usage
4. Other Scripts

---

## 1. Description

This is the Udacity Project from the "Backend Developement with Node.js"-Course

This Project is a API to resize Images. With a request with filename, width and height parameters to the Endpoint you get a resized Image in Browser Window and saved to local disc. Repeating the same request will not process a new Image, instead the Image is pulled from local disc.

## 2. Install & Run

### Install

`npm install` in the root directory

### Run

`npm run build` and then `npm run start` will start the server on _localhost:3000_

## 3. Usage

### How it works?

After the server runs you can call the Endpoint of the API.

> Example:<br>
>
> _localhost:3000/api/image?filename=bridge&width=500&height=500_

It is necessary to provide all three URL parameter: filename, width and height.

### URL Parameters

The following images ca be choosed as _filename_
(provided in _'root/assets/images/full/'_):

- bridge
- haybales
- motorcycle
- winter
- wheat

_width_ and _height_ can be choosed individually.

## 4. Other Scripts

- `npm run prettier` style code with Prettier
- `npm run lint` lint with ESLint
- `npm run test` run build and test with Jasmine
- `npm run dev` start server with nodemon for developing
