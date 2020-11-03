'use strict';

// Declare your store name
//Every 3 seconds, simulate a new customer order:
//Create a fake order, as an object {storeName, orderId, customerName, address}

//dependancies
const faker = require('faker');
const io = require('socket.io-client');
// socket, not express!!!!
const chalk = require('chalk');
require('dotenv').config();
const events = require('./events.js');

// faker handles all the fake store info every 5 secs
let serverHost = 'http://localhost:5000';
const hostConnection = io.connect(serverHost);
// https://www.npmjs.com/package/faker

function pickup(payload) {
  console.log('EVENT:',payload);
}

setInterval( () => {
  let payload = {
    storeName:  faker.company.companyName() || process.env.STORE,
    orderID: faker.random.uuid(),
    customerName: faker.name.findName(),
    address: faker.address.streetAddress(),
  };
  events.emit('pickup', payload);
  hostConnection.on('pickup', payload);
}, 3000);

events.on('delivered', deliveryConfirmation);

function deliveryConfirmation(payload){

  console.log(
    chalk.inverse.magentaBright('VENDOR:'), 
    `Thank you for delivering order # ${payload.orderID}`
  );

}


