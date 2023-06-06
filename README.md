
# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @frankshen/lotide`

**Require it:**

`const _ = require('@frankshen/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head()`: this function will only prints out the first element of the array.
* `tail()`: in this tail function we would like to get rid of the first element in that array and then we would see the rest of the elements from the original array from the output.
* `eqArrays()`: see if the actual array will be equal to the expected output after we run the eqArrays function