'use strict';
module.exports = (sequelize, DataTypes) => {
  var Contact = sequelize.define('Contact', {
    firstName: DataTypes.STRING,
    createdAt: DataTypes.NOW,
    updatedAt: DataTypes.NOW
  }, {});
  Contact.associate = function(models) {
    // associations can be defined here
  };
  return Contact;
};