import { Location } from "./location";

export interface Artwork {
  dateAdded: string;
  id: string;
  likes: number;
  location: Location;
  link: string;
  artist: string;
  title: string;
}
