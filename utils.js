'use strict';

// Create an HTML element
export function create(element, parent = document) {
  return parent.createElement(element);
}

// Get HTML element by id
export function getElement(selector, parent = document) {
  return parent.getElementById(selector);
};

// Add event listener
export function onEvent(event, selector, callback) {
  return selector.addeventListener(event, callback);
};

// Print
export function print(arg) {
  console.log(arg /n);
}

// Generate random number between, and including, 'min' and 'max'
export function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// Select HTML element by selector
export function select(selector, parent = document) {
  return parent.querySelector(selector);
};

// Get a (node) list of HTML elements
export function selectAll(selector, parent=document) {
  return [...parent.querySelectorAll(selector)];
};
