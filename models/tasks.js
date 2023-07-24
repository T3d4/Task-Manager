const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    name: {
        type: String, required: [true, "Name is required..."],
        maxlength: [15, "The name must not exceed 15 characters..."],
        trim: true
    },
    completed: {
        type: Boolean,
        default: false,
    }
});

module.exports = mongoose.model('Task', TaskSchema)