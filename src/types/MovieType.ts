export interface MovieType {
  id: number;
  nameRU: string;
  description: string;
  director: string;
  year: string;
  country: string;
  image: {
    url: string;
  };
  duration: number;
}
