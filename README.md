# Eskovaan Blog

Eskovaan Blog is a simple web-based blog platform built using Node.js, Express, and EJS for templating. Users can add, view, delete, and edit messages, or add random message. The page is built to be responsive and works from +300px in the width direction. The project demonstrates basic CRUD (Create, Read, Update, Delete) operations using a server-side JavaScript framework.

## Features and Instructions

- **Add Message**: Navigate to the "NewPost" page, fill out the form, and submit it. Users can add new messages with a name, header, and content. Each message includes an id number, name, header, message, formatted time, and a date object for sorting by time.
- **View Messages**: Messages are displayed on the homepage and sorted by time. The newest message is always at the bottom. Each message is shown with name, time, and header. The content of each message is initially hidden and can be toggled by clicking the "Show/Hide Message" button.
- **Delete Message**: Click the "Delete Post" button on a message to delete it. Messages can be deleted, and the view updates without reloading the page.
- **Edit Message**: Click the "Edit Post" button on a message to navigate to the edit page, make changes, and click "Update Post". Users can edit existing messages. Editing a message updates the existing message in the database without creating a new one.
- **Random Message**: Adds a random message from a predefined list created with the help of ChatGPT. Click the "RandomPost" button to generate a random message from the list.
- **Scroll to New Message**: After adding, editing, or generating a random message, the homepage opens and the page automatically scrolls to the new, updated, or random message. 

## How to start the project

1. Run `npm install` to install all necessary dependencies.
2. Start the server by running `node index.js`.
3. Open your browser and navigate to `http://localhost:3000`.