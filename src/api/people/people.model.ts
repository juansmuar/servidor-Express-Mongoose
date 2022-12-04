import { Schema, model } from 'mongoose';

const PeopleSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name'],
    uppercase: true,
  },
  phone: {
    type: String,
    required: [true, 'Please provide a phone'],
    min: 10,
    unique: true,
  },
  country: {
    type: String,
    enum: ['COLOMBIA', 'ARGENTINA', 'BRAZIL', 'PERU'],
    default: 'COLOMBIA',
  },
}, {
  timestamps: true,
  versionKey: false,
});

const People = model('People', PeopleSchema);

export default People;