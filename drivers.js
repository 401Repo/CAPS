'use strict';

// call chalk
const chalk = require('chalk');
const events = require('./events.js');
const io = require('socket.io-client');
let serverHost = 'http://localhost:5000';
const hostConnection = io.connect(serverHost);
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
    hostConnection.on('delivered', payload);
  }, 3000);
}

function inTransit(payload) {
  setTimeout(() => {
    if(payload.event == 'Pickup') {
      setTimeout(() => {
        console.log('Picking Up Order#:', payload.payload.order_ID);
      },1000)
      payload.event = 'In Transit';
      console.log('EVENT:',payload );
    }

  },1000);
}


