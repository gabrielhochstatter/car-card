# Car Card

This is an animated React component for a fictional 'connected car' app similar to something like BMW/Mini's Connected app. Animations provided by the wonderful `react-spring` library.

## Demo:

Audi:

![El Giferino](https://i.imgur.com/q2vX9vV.gif)

The data in the card (including the color for the overlay bit) is passed in as props, and is store in a couple of `carData{n}.json` files. To swap between them simply change the file name in the `axios` request in MainCard that fetches the data.

## Basic Usage

- clone repo
- cd to the directory
- npm install
- npm start
- view it in the browser at `localhost:3000`