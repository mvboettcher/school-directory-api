const fs = require('fs')
const mongoose = require('mongoose')
const colors = require('colors')
const dotenv = require('dotenv')

// Load env variables
dotenv.config({ path: './config/config.env' })

// Load models
const User = require('./models/User')

// Connect to db
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true
})

// Read JSON files
const users = JSON.parse(
  fs.readFileSync(`${__dirname}/_data/users.json`, 'utf-8')
)

// Import into db
const importData = async () => {
  try {
    await User.create(users)
    console.log('Data Imported...'.green.inverse)
    process.exit()
  } catch (err) {
    console.log(err)
  }
}

// Delete data
const deleteData = async () => {
  try {
    await User.deleteMany()
    console.log('Data Destroyed...'.red.inverse)
    process.exit()
  } catch (err) {
    console.log(err)
  }
}

// Check command flag
if (process.argv[2] === '-i') {
  importData()
} else if (process.argv[2] === '-d') {
  deleteData()
} else {
  console.log(`seeder flag '${process.argv[2]}' not recognized`.red)
  process.exit()
}

// $ node seeder -i (import)
// $ node seeder -d (delete)
