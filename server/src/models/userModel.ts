import bcrypt from "bcryptjs";
import crypto from "crypto";
import { DataTypes, Model, Optional } from "sequelize";
import { db } from "../db.js";
import { EUserRoles, IUser, userRolesArr } from "../definitions/IUser.js"; // Import your Sequelize instance
import { createHashedToken } from "../utils/crypto.js";

export interface UserCreationAttributes extends Optional<IUser, "id"> {}
class User extends Model<IUser, UserCreationAttributes> implements IUser {
  public id!: number;
  public email!: string;
  public password!: string;
  public role!: EUserRoles;
  public passwordResetToken?: string | null;
  public passwordResetExpires?: Date | null;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  public correctPassword = async (
    candidatePassword: string,
    userPassword: string
  ) => {
    return await bcrypt.compare(candidatePassword, userPassword);
  };

  public createPasswordResetToken = () => {
    const resetToken = crypto.randomBytes(32).toString("hex");

    return createHashedToken(resetToken);
  };
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.ENUM(...userRolesArr),
      allowNull: false,
      defaultValue: EUserRoles.admin,
    },
    passwordResetToken: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    passwordResetExpires: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    sequelize: db,
    tableName: "users",
    timestamps: false,
    hooks: {
      beforeSave: async (user, options) => {
        if (!user.password) return;
        user.password = await bcrypt.hash(user.password, 10);
      },
    },
  }
);

export default User;
