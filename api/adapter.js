const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const Memory = require('lowdb/adapters/Memory')

const json = require('./db.json')

const isLocal = process.env.NODE_ENV === 'production'
const type = isLocal ? new FileSync('./db.json') : new Memory()

const db = low(type)
db.defaults(json).write()

module.exports = db
