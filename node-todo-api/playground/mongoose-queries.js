const { ObjectID } = require("mongodb");

const { mongoose } = require("./../server/db/mongoose");
const { Todo } = require("./../server/models/todo");
const { User } = require("./../server/models/user");

// var id = "5c4ebe919ff8f98f3a2f5d6a";

// if (!ObjectID.isValid(id)) {
//     console.log("ID not valid");
// }

// Todo.find({
//     _id: id
// }).then(todos => {
//     console.log("Todos", todos);
// });

// Todo.findOne({
//     _id: id
// }).then(todo => {
//     console.log("Todos", todo);
// });

// Todo.findById(id).then(todo => {
//     if (!todo) {
//         return console.log("Id not found");
//     }
//     console.log("Todo By Id", todo);
// }).catch(e => { console.log(e) });

User.findById("5c4d5fac067c2e20153dec70").then(user => {
    if (!user) {
        return console.log("Unable to find user");
    }
    console.log(JSON.stringify(user, undefined, 2));
}, e => {
    console.log(e);
});