export interface INews {
  id: number;
  title: string;
  description: string;
  image: string;
  date: Date;
  activeDayNews?: boolean;
}
