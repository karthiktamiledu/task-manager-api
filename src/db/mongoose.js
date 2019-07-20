const mongoose = require('mongoose')
//process.env.MONGODB_URL
mongoose.connect('mongodb://taskapp:eigah365ta@cluster0-shard-00-00-mdjws.mongodb.net:27017,cluster0-shard-00-01-mdjws.mongodb.net:27017,cluster0-shard-00-02-mdjws.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})

