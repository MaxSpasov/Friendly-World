const mongoose = require('mongoose');

const photoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
    },
    image: {
        type: String,
        required: [true, 'ImageUrl is required'],
    },
    age: {
        type: Number,
        required: [true, 'Age is required'],
    },
    description: {
        type: String,
        required: [true, 'Description is required'],
    },
    kind: {
        type: String,
        required: [true, 'Kind is required'],
    },
    location: {
        type: String,
        required: [true, 'Location is required'],
    },
    needsOf: {
        type: String,
        required: [true, 'Needs are required']
    },
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
    }

});
const Photo = mongoose.model('Photo', photoSchema);

module.exports = Photo;