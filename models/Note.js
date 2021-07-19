const mongoose = require('mongoose')

const NoteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: false
    },
    status: {
        type: String,
        default: 'public',
        enum: ['public', 'private']
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    link: {
        type: String,
        required: true
    },
    subjectCode: {
        type: String,
        required: true
    },
    imageKey: {
        type: String,
        required: false
    }
})

module.exports = mongoose.model('Note', NoteSchema)