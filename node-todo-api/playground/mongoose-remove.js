const { ObjectID } = require("mongodb");

const { mongoose } = require("./../server/db/mongoose");
const { Todo } = require("./../server/models/todo");
const { User } = require("./../server/models/user");

// Todo.remove({}).then(result => {
//     console.log(result);
// });

// Todo.findOneAndRemove({ _id: "5c4eff7eb9b9cb65f597205c"})

// Todo.findOneAndRemove("5c4eff7eb9b9cb65f597205c").then(todo => {
//     console.log(todo);
// });