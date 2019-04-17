const emailExists = require('email-exists')
const onMessage = async (msg) => {
        if (!msg.payload || !msg.payload.includes('@')) {
                return 'INVALID_SYNTAX';
        }
        try {
                var status = await emailExists({
                        sender: msg.sender ? msg.sender : 'contact@example.com',
                        recipient: msg.payload
                });
                return status;
        } catch (err) {
                return `ERROR: ${err.toString()}`;
        }
}
module.exports = {
        onMessage: onMessage
}