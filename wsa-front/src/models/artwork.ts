import { Location } from "./location";

export interface Artwork {
  dateAdded: string;
  id: string;
  likes: number;
  location: Location;
  image: string;
  artist: string;
  title: string;
  thumbnail: string;
  distance?: number;
  description: string;
}
