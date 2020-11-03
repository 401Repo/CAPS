'use strict';

// Declare your store name
//Every 3 seconds, simulate a new customer order:
//Create a fake order, as an object {storeName, orderId, customerName, address}

//dependancies
const chalk = require('chalk');
const faker = require('faker');
const events = require('./events.js');

// faker handles all the fake store info every 5 secs

// https://www.npmjs.com/package/faker

setInterval( () => {
  let payload = {
    storeName: faker.company.companyName(),
    orderID: faker.random.uuid(),
    customerName: faker.name.findName(),
    address: faker.address.streetAddress(),
  };
  events.emit('pickup', payload);
}, 3000);

events.on('delivered', deliveryConfirmation);

function deliveryConfirmation(payload){

  console.log(
    chalk.inverse.magentaBright('VENDOR:'), 
    `Thank you for delivering order # ${payload.orderID}`
  );

}

