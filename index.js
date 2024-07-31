import express from "express";
import bodyParser from "body-parser";
import methodOverride from "method-override";
import { addMessage, getMessages, deletePostById, randomMessage, updateMessageById } from "./utils/messages.js";

const app = express();
const port = 3000;

// Middleware to serve static files from the "public" directory
app.use(express.static("public"));
// Middleware for parsing URL-encoded bodies (as sent by HTML forms)
app.use(bodyParser.urlencoded({ extended: true }));
// Middleware to support method overrides (e.g., PUT/PATCH methods)
app.use(methodOverride('_method'));

// Set EJS as the view engine and specify views directory
app.set('view engine', 'ejs');
app.set('views', './views');

// Display all messages
app.get("/", (req, res) => {
    const messages = getMessages();
    res.render('index.ejs', { messages });
});

// Display new post page
app.get("/message", (req, res) => {
    res.render('newmessage.ejs');
});

// Process the form data and add a new message
app.post("/message", (req, res) => {
    const person = req.body.name;
    const header = req.body.header;
    const message = req.body.text;
    
    addMessage(person, header, message);
    res.redirect("/#new-post"); // Redirect to the home page with an anchor to the new post
});

// Deleting a post
app.post("/delete-post", (req, res) => {
    const id = parseInt(req.body.id);
    deletePostById(id);
    res.json({ success: true, id: id }); // Respond with JSON indicating success
});

// Route to add a random message
app.post("/random-message", async (req, res) => {
    try {
        await randomMessage(); 
        res.redirect("/#new-post"); // Redirect to the home page with an anchor to the new post
    } catch (error) {
        console.error("Error adding random message:", error);
        res.status(500).send("Error adding random message");
    }
});

// Display an edit page that contains a message based on the id number
app.get("/edit-message", (req, res) => {
    const id = parseInt(req.query.id);
    const message = getMessages().find(msg => msg.id === id);
    if (message) {
        res.render('editmessage.ejs', { message });
    } else {
        res.status(404).send('Message not found');
    }
});

// Update the message based on the ID and redirect to the home page
app.patch("/edit-message/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const { name, header, text } = req.body;

    const success = updateMessageById(id, name, header, text);
    if (success) {
        res.redirect("/#new-post");
    } else {
        res.status(500).send('Error updating message');
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
