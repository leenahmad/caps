'use strict';

const events = require('../lib/events.js');

let {faker} = require('@faker-js/faker');


setInterval(() => {

    let order = {
        store: faker.company.companyName(),
        orderId: faker.datatype.uuid(),
        customer: `${faker.name.firstName()} ${faker.name.lastName()}`,
        address: `${faker.address.city()} , ${faker.address.stateAbbr()}`
    }
    
    events.emit('pickup' , order);
}, 5000);


events.on('delivered' , (payload) => {
    console.log(`vendor : thank you ${payload.customer}`);
})