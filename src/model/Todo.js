const mongoose = require('mongoose')

const TodoSchema = mongoose.Schema(
  { //fields
    title: {
      type: String,
      required: true,
      trim: true
    },
    done: {
      type: Boolean,
      default: false
    }
  }, { //options
    collection: 'todo',
    versionKey: false,
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
    toJSON: { virtuals: true } //allow returning id virtual getter
  }
)

module.exports = mongoose.model("Todo", TodoSchema)