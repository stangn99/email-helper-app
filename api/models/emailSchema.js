// 1. Require mongoose
const mongoose = require('mongoose');

// 2. Create a schema for the email app
const emailSchema = new mongoose.Schema({
  mainStoryTeaser: {}
})

// 3. Connect the schema to our model
const Email = mongoose.model("Email", emailSchema);

// 4. Export it so that it's available elsewhere
module.exports = Email;

