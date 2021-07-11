export interface Coordinates {
  lat: string;
  lng: string;
}

export interface Location {
  address: string;
  city: string;
  coordinates: Coordinates;
}
