const mongoose = require('mongoose');

const roleSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    children: [{ _id: { type: mongoose.Schema.Types.ObjectId, ref: 'Role' }, name: String }],
    permissions: [String]
  },
  { timestamps: true }
);

module.exports = mongoose.models.Role || mongoose.model('Role', roleSchema);
