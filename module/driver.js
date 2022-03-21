'use strict';

const events = require('../lib/events');

require('./vendor.js')

events.on('pickup' , (payload) => {
    let event = {
        event: 'pickup',
        time: new Date(),
        payload : payload,
    };
    console.log('event' , event);

    console.log(`DRIVER: pickedup2 ${payload.orderId}`);

    events.emit('in-transit' , payload);

    console.log(`DRIVER: delivered up ${payload.orderId}`);

    events.emit('delivered' , payload);
})

