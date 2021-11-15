const EventEmiter = require('events');

const emiter = new EventEmiter();

class School extends EventEmiter {
    startPeriod() {
        console.log('Class started');

        // raise and event when bell rings
        setTimeout(() => {
            this.emit('belring', {
                period: 'second',
                text: 'ended',
            });
        }, 2000);
    }
}

module.exports = School;
