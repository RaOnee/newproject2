// server.js

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors"); // Import the cors package

const app = express();
app.use(cors());

const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());

// Dummy data for contacts
let contacts = [
  { id: 1, name: "John Doe", email: "john@example.com" },
  { id: 2, name: "Jane Smith", email: "jane@example.com" },
];

// Routes
app.get("/api/contacts", (req, res) => {
  res.json(contacts);
});

app.post("/api/contacts", (req, res) => {
  const newContact = req.body;
  newContact.id = contacts.length + 1;
  contacts.push(newContact);
  res.json(newContact);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// server.js

// Update an existing contact
app.put("/api/contacts/:id", (req, res) => {
  const { id } = req.params;
  const updatedContact = req.body;

  const index = contacts.findIndex((contact) => contact.id === Number(id));

  if (index !== -1) {
    contacts[index] = { ...contacts[index], ...updatedContact };
    res.json(contacts[index]);
  } else {
    res.status(404).json({ message: "Contact not found" });
  }
});

// Delete a contact
app.delete("/api/contacts/:id", (req, res) => {
  const { id } = req.params;

  const index = contacts.findIndex((contact) => contact.id === Number(id));

  if (index !== -1) {
    const deletedContact = contacts.splice(index, 1);
    res.json(deletedContact[0]);
  } else {
    res.status(404).json({ message: "Contact not found" });
  }
});
