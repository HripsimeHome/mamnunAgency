import { DataTypes, Model, Optional } from "sequelize";
import { db } from "../db.js";
import { ICertificate } from "../definitions/ICertificate.js"; // Import your Sequelize instance
import { deleteFiles } from "../utils/files.js";

export interface CertificateCreationAttributes
  extends Optional<ICertificate, "id"> {}
class Certificate
  extends Model<ICertificate, CertificateCreationAttributes>
  implements ICertificate
{
  public id!: number;
  public imagePath!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Certificate.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },

    imagePath: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    tableName: "certificates",
    timestamps: true,
    hooks: {
      beforeDestroy: async (certificate) => {
        deleteFiles([certificate.imagePath]);
      },
    },
  }
);

export default Certificate;
