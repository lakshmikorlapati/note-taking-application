const mongoose = require('mongoose');
autoIncrement = require('mongoose-auto-increment');

const NoteSchema = mongoose.Schema({
    _id: Number,
    title: String,
    content: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Note', NoteSchema);