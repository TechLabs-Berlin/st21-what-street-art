import { Location } from "./location";

export interface Artwork {
  dateAdded: string;
  id: string;
  likes: number;
  location: Location;
  href: string;
}
