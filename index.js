import express from "express";
import bodyParser from "body-parser";
import { getFormattedDateTime } from "./utils/time.js";
import { addMessage, getMessages, deletePostById, randomMessage } from "./utils/messages.js";

const app = express();
const port = 3000;

// Serve static files from the "public" directory
app.use(express.static("public"));
// Middleware for parsing URL-encoded bodies (as sent by HTML forms)
app.use(bodyParser.urlencoded({ extended: true }));

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
    const formattedDate = getFormattedDateTime();

    addMessage(person, header, message, formattedDate);
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

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
