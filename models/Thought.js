const mongoose = require('mongoose');

const { Schema } = mongoose;

const thoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: true,
    maxlength: 280
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: timestamp => new Date(timestamp).toISOString()
  },
  username: {
    type: String,
    required: true
  },
  reactions: [{
    type: Schema.Types.ObjectId,
    ref: 'Reaction'
  }]
});

// Create virtual 'reactionCount' to retrieve the length of the thought's 'reactions' array
thoughtSchema.virtual('reactionCount').get(function() {
  return this.reactions.length;
});

const Thought = mongoose.model('Thought', thoughtSchema);

module.exports = Thought;
