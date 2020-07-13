

// "scripts": {
//     "start": "if-env NODE_ENV=production && npm run start:prod || npm run start:dev",
//     "start:prod": "node server.js",
//     "start:dev": "concurrently \"node --ignore 'client/*'\" \"npm run client\"",
//     "client": "cd client && npm run start",
//     "seed": "node scripts/seedDB.js",
//     "install": "cd client && npm install",
//     "build": "cd client && npm run build",
//     "heroku-postbuild": "cd client && npm install && npm run build ",
//     "concurrently": "^5.2.0"
//   },