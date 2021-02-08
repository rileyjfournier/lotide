# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @rileyjfournier/lotide`

**Require it:**

`const _ = require('@rileyjfournier/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `_.assertArraysEqual`:  returns true if arr1 and arr2 are equal, else false
* `_.assertEqual`:        returns true if element1 and element2 are equal, else false
* `_.assertObjectsEqual`: returns true if obj1 and obj2 are equal, else false
* `_.countLetters`:       returns an obj when given a string { letter1: 'times found', letter2: 'times found', ... }
* `_.countOnly`:          counts only the array elements given in the second argument
* `_.eqArrays`:           returns true if arr1 and arr2 are equal, else false
* `_.eqObjects`:          returns true if obj1 and obj2 are equal, else false
* `_.findKey`:            find key with callback function
* `_.findKeyByValue`:     find key with value
* `_.flatten`:            "flatten" nested arrays into 1 layer
* `_.head`:               return the "head" element of an array
* `_.letterPositions`:    when given a string, returns an object with characters as keys and their string[index] as values
* `_.map`:                performs a callback function on every element of an array
* `_.middle`:             when given an array, finds the middle index element (middle two if array.length is even)
* `_.tail`:               when given an array, returns all tail elements
* `_.takeUntil`:          when given an array, will return a new array, taking elements from the source until specified
* `_.without`:            function that removes stated items from the source