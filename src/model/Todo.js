const mongoose = require('mongoose')
const timestamp = require('mongoose-timestamp')

const TodoSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  done: {
    type: Boolean,
    default: false
  }
}, { collection: 'todo', versionKey: false })

TodoSchema.plugin(timestamp, {
  createdAt: 'created_at',
  updatedAt: 'updated_at'
})

module.exports = mongoose.model("Todo", TodoSchema)