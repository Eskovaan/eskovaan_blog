# Eskovaan Blog

Eskovaan Blog is a simple web-based blog platform built using Node.js, Express, and EJS for templating. Users can add, view, and delete messages, or add random message. The page is built to be responsive and works from +300px in the width direction. The project demonstrates basic CRUD (Create, Read, Update, Delete) operations using a server-side JavaScript framework.

## Features

- **Add Message**: Users can add new messages with a name, header, and content.
- **View Messages**: Messages are displayed with their respective author and timestamp. Each message's content is initially hidden and can be toggled by clicking the "Show Message" button.
- **Delete Message**: Users can delete messages, and the view updates without reloading the page.
- **Random Message**: Adds a random message from a predefined list created by ChatGPT.

## How to start the project

1. Run `npm install` to install all necessary dependencies.
2. Start the server by running `node index.js`.
3. Open your browser and navigate to `http://localhost:3000`.