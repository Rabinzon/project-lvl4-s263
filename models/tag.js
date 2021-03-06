module.exports = (sequelize, DataTypes) => {
  const Tag = sequelize.define('Tag', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    color: {
      type: DataTypes.STRING,
      default: 'primary',
    },
  }, {});

  Tag.associate = (models) => {
    models.Tag.belongsToMany(models.Task, { through: 'TaskTags', foreignKey: 'tagId', otherKey: 'taskId' });
  };
  return Tag;
};
