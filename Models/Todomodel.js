const mongoose = require('mongoose');

// Define the schema for the "Todo" model
const todoSchema = new mongoose.Schema({ // Change 'schema' to 'Schema' (uppercase 'S')
    text: {
        type: String, // Define the type of the 'text' field as String
        required: true // Change 'require' to 'required' (correct property name)
    }
});

// Export the model based on the schema
module.exports = mongoose.model('Todo', todoSchema);
// todo khud se bnega collection in database ye bnane ki need nhi hai 