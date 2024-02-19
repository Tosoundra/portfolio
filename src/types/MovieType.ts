export interface MovieType {
  id: number | null;
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
