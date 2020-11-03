'use strict';

// call chalk
const chalk = require('chalk');

// events
const events = require('./events.js');

// listen for pickup */
events.on('pickup', handlePickup);

function handlePickup(payload){

  setTimeout( () => {
    console.log(
      chalk.inverse.greenBright('DRIVER:'), 
      `picked up order # ${payload.orderID}`
    );
    events.emit('in-transit', payload);
  }, 1000);

  setTimeout( () => {
    console.log(
      chalk.inverse.greenBright('DRIVER:'), 
      `delivered up order # ${payload.orderID}`
    );
    events.emit('delivered', payload);
  }, 3000);
}


