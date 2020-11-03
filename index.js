'use strict';

const io = require('socket.io')(5000);

io.on('connection', (socket) => {
  console.log(socket.id, ' socket id: we are connected');
  socket.on('pickup', (payload) => {
    console.log('new Pickup', payload);
  });
});

// ok, lets change it for the demo socket tech

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
