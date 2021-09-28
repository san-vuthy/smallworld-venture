const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },

    phone: {
      type: String,
    },
    gender: {
      type: String,
    },
    interest: {
      type: Array,
      required: true,
    },
    cv: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);
const User = mongoose.model("users", UserSchema);
module.exports = User;
