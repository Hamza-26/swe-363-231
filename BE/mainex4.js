// mainProgram.js
const customEmitter = require('./eventEmitter');

let loggedInUsers = 0;

// Event listeners
customEmitter.on('userLoggedIn', (userId) => {
  loggedInUsers++;
  console.log(`Total users logged in: ${loggedInUsers}`);
});

customEmitter.on('userLoggedOut', (userId) => {
  loggedInUsers--;
  console.log(`Total users logged in: ${loggedInUsers}`);
});

// Simulate user events
for (let i = 1; i <= 5; i++) {
  simulateUserLogin(i);
}

setTimeout(() => {
  simulateUserLogout(1);
}, Math.random() * 2000);

function simulateUserLogin(userId) {
  const randomTime = Math.random() * (1.9) + 0.1; //between 0.1 and 2
  setTimeout(() => {
    const timestamp = new Date().toISOString();
    console.log(`${timestamp}: USER_${userId} logged in`);
    customEmitter.emit('userLoggedIn', userId);
  }, randomTime * 1000); // because setTimeout expects milliseconds
}

function simulateUserLogout(userId) {
  const timestamp = new Date().toISOString();
  console.log(`${timestamp}: USER_${userId} logged out`);
  customEmitter.emit('userLoggedOut', userId);
}
