

module.exports = (sequelize, DataTypes) => {
  const permissions = sequelize.define("permissions", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    method: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    action_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    base_url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    path: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    deleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
  
    timestamps : true,
    paranoid : true
}
);

  

  return permissions;
};
