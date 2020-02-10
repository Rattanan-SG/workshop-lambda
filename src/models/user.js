const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    uid: {
      type: String,
      index: true,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    role: { type: mongoose.Schema.Types.ObjectId, ref: 'Role' }
  },
  { timestamps: true }
);

// userSchema.pre('find', function() {
//   this.populate({
//     path: 'role',
//     populate: { path: 'children', model: 'children' }
//   });
// });

module.exports = mongoose.models.User || mongoose.model('User', userSchema);
