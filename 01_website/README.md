Step 1: cd reactweb
Step 2: npm start

Notes:
if update Node.js to version 19...:
In your package.json: change this line

"start": "react-scripts start"

to

"start": "react-scripts --openssl-legacy-provider start"
