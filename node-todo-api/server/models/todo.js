var mongoose = require("mongoose");

var Todo = mongoose.model("Todo", {
    text: {
        type: String,
        required: true,     // Validator
        minlength: 1,       // At least one word
        trim: true          // Cannot be empty
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    },
    _creator: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }
});

module.exports = { Todo };