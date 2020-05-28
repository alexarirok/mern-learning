import express from 'express'
import devBundle from './devBundle' // comment out in production
import path from 'path'
import template from './../template'
import { MongoClient } from 'mongodb'

const app = express()
// devBundle.compile(app) // comment out in production

const CURRENT_WORKING_DIR = process.cwd()
app.use('/dist', express.static(path.join(CURRENT_WORKING_DIR, 'dist')))

app.get('/', (req, res) => {
    res.status(200).send(template())
})

let port = process.env.PORT || 3000
app.listen(port, function onStart(err) {
    if (err) {
        console.log(err)
    }
    console.info('Server started on port %s.', port)
})

// database connection url
const url = process.env.MONGODB_URI || 'mongodb://localhost:27017/mernLesson1'
MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, (err, db)=> {
    console.log("Connected successfully to mongodb server")
    db.close()
})