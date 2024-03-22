db = ()=>{
    const mongoose = require('mongoose');
    mongoose.connect('mongodb+srv://gkarthikeya011:3REqwN9km9YfIqzw@cluster0.hvelcyb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', { useNewUrlParser: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Error connecting to MongoDB:', err));
}

module.exports=db;