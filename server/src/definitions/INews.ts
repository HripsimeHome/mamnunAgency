export interface INews {
  id: number;
  title: string;
  description: string;
  imagePath: string;
  date: Date;
  activeDayNews?: boolean;
}
