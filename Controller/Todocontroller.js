const todomodel = require('../Models/Todomodel')

module.exports.gettodo = async (req, res)=>{
    const todo = await todomodel.find()
    res.send(todo)
}


module.exports.savetodo = async (req, res) => {
    try {
        const { text } = req.body;

        // Use await to handle the async operation
        const data = await todomodel.create({ text });

        console.log("Added successfully...");
        console.log(data);

        // Send the created todo data back to the client
        res.status(201).send(data); // 201 status code indicates a resource was created
    } catch (err) {
        console.error("Error saving todo:", err);

        // Send an error response back to the client
        res.status(500).send("An error occurred while saving the todo.");
    }
};

module.exports.updatetodo = async (req, res) => {
    try {
        const { _id, text } = req.body;

        // Correctly update the todo item by passing an object with the field(s) to update
        await todomodel.findByIdAndUpdate(_id, { text });

        console.log("Updated successfully...");
        res.send("Updated successfully...");
    } catch (err) {
        console.error("Error updating todo:", err);

        // Send an error response back to the client
        res.status(500).send("An error occurred while updating the todo.");
    }
}


module.exports.deletedtodo = async (req, res)=>{
    const {_id} = req.body
    todomodel.findByIdAndDelete(_id)
    .then(()=>{
        console.log("deleted successfully...");
       
        res.send("deleted successfully...")
    }).catch((err)=>{
      console.log(err)
    })
   
}