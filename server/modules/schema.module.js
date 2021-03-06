const mongoose = require('mongoose');

let employeeSchema = new mongoose.Schema(
    {
        firstName: {type: String, required: true},
        lastName: {type: String, required: true},
        employeeId: {type: Number, required: true, unique: true},
        salary: {type: Number, required: true},
        jobTitle: {type: String, required: true},
        hireDate: {type: Date, required: true},
        company: {type: String, default: 'Company'}
    }   
)

module.exports = employeeSchema;