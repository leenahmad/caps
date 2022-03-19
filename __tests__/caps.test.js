'use strict';

const {faker} = require('@faker-js/faker');

const events = require('../lib/events');

let order = {
    store: faker.company.companyName(),
    orderId: faker.datatype.uuid(),
    customer: `${faker.name.firstName()} ${faker.name.lastName()}`,
    address: `${faker.address.city()} , ${faker.address.stateAbbr()}`
}

describe('test for caps', () => {

    it('pickup' , () => {
        events.emit('pickup' , order);
    })

    it('in-transit' , () => {
        events.emit('in-transit' , order);
    })

    it('delivered' , () => {
        events.emit('delivered' , order);
    })
})