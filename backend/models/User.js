const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    isAdmin: {
      type: Boolean,
      default: false,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    birthday: {
      type: Date,
    },
    joinedCourses: {
      type: [
        {
          courseId: String,
          currentLesson: String,
          completedLessons: {
            type: [String],
            default: [],
          },
        },
      ],
      default: [],
    },
  },
  { timestamps: true }
);

// Static signup method
userSchema.statics.signup = async function (data) {
  const { email, password } = data;

  // Validation
  if (!email || !password) {
    throw Error("All fields must be filled");
  }
  if (!validator.isEmail(email)) {
    throw Error("Email not valid");
  }
  if (!validator.isStrongPassword(password)) {
    throw Error("Password not strong enough");
  }

  const exists = await this.findOne({ email });

  if (exists) {
    throw Error("Email already in use");
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({ ...data, password: hash });

  return user;
};

// Static login method
userSchema.statics.login = async function (data) {
  const { email, password } = data;

  if (!email || !password) {
    throw Error("All fields must be filled");
  }

  const user = await this.findOne({ email });
  if (!user) {
    throw Error("Email not found");
  }

  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    throw Error("Incorrect password");
  }

  return user;
};

module.exports = mongoose.model("User", userSchema);
