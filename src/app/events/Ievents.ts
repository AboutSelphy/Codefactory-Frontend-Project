export interface IEvents {
  name: string;
  image: string;
  description: string;
  date: string;
  location: string;
  registrationOpen: boolean;
  speakers: {
      name: string;
      topic: string;
  }[];
}
