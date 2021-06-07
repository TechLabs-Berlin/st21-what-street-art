import {
  useFirestoreDocData,
  useFirestore,
  useFirestoreCollectionData,
} from "reactfire";
import { Artwork } from "../models/artwork";
import { FilteringCriteria, FirebaseCollection } from "../models/firebase";

export const useArtworks = () => {
  const artworksRef = useFirestore().collection(FirebaseCollection.artworks);

  const data = useFirestoreCollectionData(artworksRef);

  return data;
};

export const usePopularArtworks = (criteria: FilteringCriteria<Artwork>) => {
  const artworksRef = useFirestore()
    .collection(FirebaseCollection.artworks)
    .orderBy(criteria.property, "desc")
    .limit(criteria.limit);

  const data = useFirestoreCollectionData<Artwork>(artworksRef);

  return data;
};

export const useArtwork = (id: string) => {
  const artworkRef = useFirestore()
    .collection(FirebaseCollection.artworks)
    .doc(id);

  const data = useFirestoreDocData(artworkRef);

  return data;
};
