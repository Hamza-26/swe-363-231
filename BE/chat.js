const readline = require('readline');

// Define predefined questions and answers
const chatData = {
  'What is your name?': 'I am a simple chatbot.',
  'How are you?': 'I am doing well, thank you!',
  'What is the weather like today?': 'I am sorry, I do not have real-time information.',
  'exit': 'Goodbye! Exiting chatbot.',
};

// Create a readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Function to handle user input and respond
function handleUserInput(userInput) {
  userInput = userInput.trim().toLowerCase();

  // Check if the user wants to exit
  if (userInput === 'exit' || userInput === 'quit') {
    console.log(chatData['exit']);
    rl.close(); // Terminate the program by closing the readline interface
    return;
  }

  // Check if there is a predefined answer for the user's input
  const response = chatData[userInput];

  // Provide the response or inform the user that the question is not recognized
  if (response) {
    console.log(response);
  } else {
    console.log('I am sorry, I do not understand that question.');
  }

  // Continue prompting for user input
  promptUser();
}

// Function to prompt the user for input
function promptUser() {
  rl.question('You: ', handleUserInput);
}

// Start the chatbot by prompting the user for input
console.log('Simple Chatbot: Hello! Type "exit" to end the conversation.');
promptUser();
