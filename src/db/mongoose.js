const mongoose = require('mongoose')
//process.env.MONGODB_URL
mongoose.connect('mongodb+srv://taskapp:e1g@h365MA@cluster0-mdjws.mongodb.net/task-manager-api?retryWrites=true', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})

