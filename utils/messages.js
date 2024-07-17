
import fs from 'fs';
import { getFormattedDateTime } from "./time.js";

let messages = [];
let index = 0;

// Add a new message
export function addMessage(person, header, message, time) {
    // Replace all newlines with HTML <br> tags
    const formattedMessage = message.replace(/\n/g, '<br>');
    messages.push({id: index, name: person, header: header, message: formattedMessage, time: time});
    index ++;
}

// Delete a message by its `id`
export function deletePostById(id) {
    messages = messages.filter(message => message.id !== id);
}

// Retrieve all messages
export function getMessages() {
    return messages;
}

// Add a random message from a JSON file
export function randomMessage() {
    // Return a new promise to handle asynchronous file reading
    return new Promise((resolve, reject) => {
        // Read the random messages from the JSON file
        fs.readFile("./public/random_message.json", "utf8", (err, rdata) => {
            if (err) {
                reject(err); // Reject the promise if an error occurs
                return;
            }

            // Parse the JSON data, pick a random message
            const data = JSON.parse(rdata);
            const randomMessageInd = Math.floor(Math.random() * data.length);
            const randomMessage = { 
                id: index,
                name: data[randomMessageInd].name,
                header: data[randomMessageInd].header,
                message: data[randomMessageInd].message,
                time: getFormattedDateTime()
            };
            
            index++;
            messages.push(randomMessage); // Add the random message to the list
            resolve(); // Resolve the promise successfully
        });
    });
}

