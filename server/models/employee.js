const mongoose = require('mongoose');

// Define schema
const Schema = mongoose.Schema;
const employeeSchema = new Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    salary: {
        type: Number,
        required: true
    }
});

// Create model
const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;
