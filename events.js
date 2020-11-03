

'use strict';

// the events for all modules
// for phase two what can i do here?....
const io = require('socket.io-client');
let serverHost = 'http://localhost:5000';
const hostConnection = io.connect(serverHost);


const Events = require('events');
const events = new Events();
module.exports = events;
