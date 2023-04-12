// Copyright (c) 2023 Osamah Hasan All rights reserved
//
// Created by: Osamah Hasan
// Created on: Mar 2023
// This file contains the JS functions for index.html

'use strict'
/**
 * This function calculates the volume of a pyramid
 */
function calculate () {
  // input
  const f = parseInt(document.getElementById('Fahrenheit').value)

  // process
  const c = (f - 32) * 5 / 9

  // output
  document.getElementById('Celsius').innerHTML = `The Temperature is: ${c.toFixed(2)} °C`
}
