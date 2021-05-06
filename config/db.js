const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/Solulab', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}).then(() => {
    console.log('connected to mongo')
}).catch((err) => {
    console.log('error', err)
});

