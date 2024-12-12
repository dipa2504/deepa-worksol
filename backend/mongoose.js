const mongoose = require('mongoose')

// mongoose.connect('mongodb://127.0.0.1:27017/worksol').then(() => console.log('mongodb connected'))

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch((error) => console.error('MongoDB connection error:', error));