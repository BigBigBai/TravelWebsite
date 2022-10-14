# React Socketio Chat App

## How to run

### Server side
1. Go to server folder
2. Enter "npm start" in cmd

### Client side
1. Go to client folder
2. Move src folder to somewhere else
3. Delete other folders in client
4. Enter "npx create-react-app ." in cmd
5. Replace the auto-generated src folder by our own src folder
6. Enter "npm install socket.io-client"
7. Enter "npm install react-scroll-to-bottom"
8. "npm start"

## Bug May Appear
Bug1:
The user may receive twice messages

Bug1 Fixed:
1. Go to client/src/index.js
2. Delete "React.StrictMode"
