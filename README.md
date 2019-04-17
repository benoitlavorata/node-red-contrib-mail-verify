# node-red-contrib-mail-verify
Check if email exists using STMP port 25.

IMPORTANT The port 25 MUST be open/authorized on the host server, otherwise the requests will show as timeout.

## Input
Provide the email address in msg.payload
Provide the sender email (used to query) in msg.sender : some email sever require this address to be valid.

## Output
The output will return a status MAY_EXIST, INVALID_SYNTAX, NOT_FOUND or ERROR: ...