const mongoose = require('mongoose')

const DB = process.env.DATABASE

const conn = mongoose.connect(DB) .then(() => {
    console.log(`connection sucessful`);
    return DB;
}) .catch((err) => console.log(`no connection`))

module.exports = conn;
