const mongoose = require('mongoose');

module.exports = mongoose => {
  const schema = mongoose.Schema(
    {
      userName: String,
      phoneNumber: String
    },
    { timestamps: true }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const ContactDetails = mongoose.model("phones", schema);
  return ContactDetails;
};