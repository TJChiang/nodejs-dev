const fs = require("fs");

var fetchNotes = () => {
  // try catch prevent from reading file without the file
  try {
    var notesString = fs.readFileSync("notes-data.json");
    return JSON.parse(notesString);
  } catch (e) {
    return [];
  }
};

var saveNotes = notes => {
  fs.writeFileSync("notes-data.json", JSON.stringify(notes));
};

var addnote = (title, body) => {
  var notes = fetchNotes();
  var note = {
    title,
    body
  };

  // filter the duplicate notes
  var duplicateNotes = notes.filter(note => {
    return note.title === title;
  });

  // if no duplicate notes then write the notes to the file
  if (duplicateNotes.length === 0) {
    notes.push(note);
    saveNotes(notes);
    return note;
  }
};

var getall = () => {
  return fetchNotes();
};

var getnote = title => {
  var notes = fetchNotes();
  var filteredNotes = notes.filter(note => {
    return note.title === title;
  });
  return filteredNotes[0];
};

var removenote = title => {
  // fetch notes
  var notes = fetchNotes();

  // filter notes, removing the one with title of argument
  // filter other notes
  var filteredNotes = notes.filter(note => {
    return note.title !== title;
  });

  // save new notes array
  // write other notes = removing the one with title of argument
  saveNotes(filteredNotes);

  return notes.length !== filteredNotes.length;
};

var logNote = note => {
  debugger;
  // Break on this line and use repl to output note
  // Use read command with --title
  console.log("__");
  console.log(`Title: ${note.title}`);
  console.log(`Body: ${note.body}`);
};

module.exports = {
  addNote: addnote,
  getAll: getall,
  getNote: getnote,
  removeNote: removenote,
  logNote
};
