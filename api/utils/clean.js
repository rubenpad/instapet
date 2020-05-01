const fs = require('fs')

// Script to reset db when make E2E testing
fs.readFile('./db.json', { encoding: 'utf-8' }, (error, data) => {
  if (error) throw error

  const db = JSON.parse(data)
  db.users = []
  const output = JSON.stringify(db)

  fs.writeFile('./db.json', output, (error) => {
    if (error) throw error
    console.log('Success')
  })
})
