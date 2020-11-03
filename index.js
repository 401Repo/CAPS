'use strict';

/*
Everything lands here event wise:
 Manages the state of every package (ready for pickup, in transit, delivered, etc)
Logs every event to the console with a timestamp and the event payload
*/

// dependancies
const chalk = require('chalk');

// modules
const events = require('./events.js');
require('./vendors.js');
require('./drivers.js');

// logger: pickup
events.on('pickup', (payload) => {
  logger('pickup', payload);
});

// logger: in transit
events.on('in-transit', (payload) => {
  logger('in-transit', payload);
});

// logger: delivered
events.on('delivered', (payload) => {
  logger('delivered', payload);
});

// logger function
function logger(event, payload){

  let date = new Date().toISOString();

  console.log(
    chalk.inverse.blueBright('EVENT'), {
      event, 
      date, 
      payload
    });

}
