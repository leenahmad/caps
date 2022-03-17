'use strict';

const events = require('./lib/events');

require('./module/vendor.js');
require('./module/driver.js');

events.on('pickup' , (payload) => {
    let event = {
        event: 'pickup',
        time: new Date(),
        payload : payload,
    };
    console.log('event' , event);
})

events.on('in-transit' , (payload) => {
    let event = {
        event : 'in-transit',
        time : new Date(),
        payload : payload
    }
    console.log(event);
})

events.on('delivered' , (payload) => {
    let event = {
        event : 'delivered',
        time : new Date(),
        payload : payload
    }
    console.log(event);
})