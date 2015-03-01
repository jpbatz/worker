module.exports = function(sequelize, Sequelize) {
  var IncidentType = sequelize.define('IncidentType', {
    name: {
      type: Sequelize.STRING,
      unique: true
    },
    code: {
      type: Sequelize.STRING,
      unique: true,
    }
  });
  return IncidentType;
};
