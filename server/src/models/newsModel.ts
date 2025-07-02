import { DataTypes, Model, Optional } from "sequelize";
import { db } from "../db.js";
import { INews } from "../definitions/INews.js"; // Import your Sequelize instance
import { deleteFiles } from "../utils/files.js";

export interface NewsCreationAttributes extends Optional<INews, "id"> {}
class News extends Model<INews, NewsCreationAttributes> implements INews {
  public id!: number;
  public title!: string;
  public description!: string;
  public image!: string;
  public date!: Date;
  public activeDayNews?: boolean;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

News.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    image: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        isTodayOrFuture(value: number) {
          const today = new Date();
          today.setHours(0, 0, 0, 0); // Set to start of day
          const inputDate = new Date(value);
          inputDate.setHours(0, 0, 0, 0);
          if (inputDate < today) {
            throw new Error("Date must be today or in the future");
          }
        },
      },
    },
    activeDayNews: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
    },
  },
  {
    sequelize: db,
    tableName: "news",
    timestamps: false,
    hooks: {
      beforeDestroy: async (news) => {
        deleteFiles([news.image]);
      },
    },
    // validate: {
    //   dateIsTodayOrFuture() {
    //     if (this.date) {
    //       const today = new Date();
    //       today.setHours(0, 0, 0, 0);
    //       const inputDate = new Date(this.date as number);
    //       inputDate.setHours(0, 0, 0, 0);
    //       if (inputDate < today) {
    //         throw new Error("Date must be today or in the future");
    //       }
    //     }
    //   },
    // },
  }
);

export default News;
