const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const celebritySchema = new Schema({
  name: String,
  occupation: String,
  catchPhrase: String
}, {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  });

//nombre del Model = Celebrity aconsejan mejor en MAYUSCULAS para diferenciarlo
const Celebrity = mongoose.model('celebrity', celebritySchema);

module.exports = Celebrity;