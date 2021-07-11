export enum FirebaseCollection {
  users = "users",
  artworks = "artworks",
}

export interface FilteringCriteria<T> {
  property: keyof T;
  limit: number;
}
