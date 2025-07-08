module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "user",
    {
      username: {
        //TODO - validate userName - Sachin4968@
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
          name: "username",
          msg: "username should be unique",
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          validatePassword(value) {
            const hasLower = /[A-Z]/.test(value);
            const hasUpper = /[a-z]/.test(value);
            const hasNumber = /\d/.test(value);
            const hasSymbol = /[\W_]/.test(value);
            if (
              value.length < 8 ||
              !hasLower ||
              !hasUpper ||
              !hasNumber ||
              !hasSymbol
            ) {
              throw new Error(
                "Password must be strong(min 8 chars,include lower/upper case,number,symbol"
              );
            }
          },
        },
      },
      email: {
        //TODO - email validate @.com
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
          name: "email",
          msg: "Email should be unique",
        },
        validate: {
          isEmail: true,
          notNull: { msg: "email is required!" },
          emailHandler(value) {
            if (!value.endsWith("@gmail.com")) {
              throw new Error("Invalid email address!");
            }
          },
        },
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "first_name",
      },
      lastName: {
        type: DataTypes.STRING,
        field: "last_name",
      },
      fullName: {
        type: DataTypes.VIRTUAL, //this field not storing in memory just giving value on get call create , getAll , getbyId
        get() {
          return `${this.firstName} ${this.lastName}`;
        },
        set(value) {
          throw new Error("cannot set fullName");
        },
      },
      mobileNumber: {
        type: DataTypes.STRING,
        // validate  :{
        //     isMobilePhone : "en-IN"
        // },
        allowNull: false,
      },
      role: {
        //TODO  -- ADMIN ,SUPER ADMIN
        type: DataTypes.INTEGER,
      },
    },

    {
      tableName: "user",
      paranoid: true,
      // defaultScope : {  --means it like filtering only return matching with this scope condtion it just like filtering
      //     where : {"role" : "Admin"}
      // },
      hooks: {
        beforeCreate: async (user) => {
          console.log("before created called")
          user.password = "latestPASSWORD";
        },
        afterCreate: async (user) => {
          console.log("after create!");
          ("user created successfully");
        },
        afterUpdate: async (user) => {
          console.log(user.previous("password"));
          if (user.changed("password")) {
            console.log("User password changed!");
          }
          console.log("updated sucesdljdljld");
        },
      },
    }
  );
  // User.associate = (models)=>{
  //     User.hasOne(models.Product, {foreignKey : "userId" , as : "product"})
  // }

//   User.associate = (models) => {
//     User.hasMany(models.Product, { foreignKey: "userId", as: "product" });
//   };

// User.associate = (models)=>{
//     //on delete will delete his referece data also
//     //on cascade  will update will change userId if users id is changed in users table!
//     User.hasMany(models.Product, { foreignKey : 'userId', as :"product" ,onDelete : "CASCADE" , onUpdate:"CASCADE"})
// }

  return User;
};
