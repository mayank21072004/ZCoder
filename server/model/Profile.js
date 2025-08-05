import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const profileSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  institution: {
    type: String,
    required: false
  },
  bio: {
    type: String,
    required: false
  },
  birthdate: {
    type: String,
    required: false
  },
  country: {
    type: String,
    required: true
  },
  codeforces: {
    type: String,
    required: false
  },
  codechef: {
    type: String,
    required: false
  },
  atcoder: {
    type: String,
    required: false
  },
  linkedin: {
    type: String,
    required: false
  },
  sub: {
    type: String,
    required: true,
    unique: true
  }
});

const profile = mongoose.model('profile', profileSchema);

export default profile;
