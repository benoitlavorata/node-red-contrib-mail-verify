const logic = require('./logic.js');
(async () => {
    var data = await logic.onMessage({
        payload: 'lead@somewhere.com',
        sender: 'me@me.com'
    });
    console.log(data);
})().catch(err => console.error)