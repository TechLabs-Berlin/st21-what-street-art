import {
  useFirestore,
  useFirestoreCollectionData,
  useFirestoreDocData,
} from "reactfire";
import useSWR from "swr";

import { getNearYou } from "../api";
import { Artwork } from "../models/artwork";
import { FilteringCriteria, FirebaseCollection } from "../models/firebase";
import useGeolocation from "./useGeolocation";

export const useArtworks = () => {
  const artworksRef = useFirestore().collection(FirebaseCollection.artworks);

  const data = useFirestoreCollectionData<Artwork>(artworksRef);

  return data;
};

export const useNearYouArtworks = () => {
  // TODO: Use queries to filter which IDs we want
  const artworks = useArtworks();

  const currentLocation = useGeolocation();
  const { data } = useSWR<Artwork[]>(
    [currentLocation.lat, currentLocation.lng],
    getNearYou,
    {
      suspense: true,
    }
  );

  const ids = data?.map((item) => String(item.id));
  const result = artworks
    ?.filter((artwork) => ids?.includes(artwork.id))
    .map((artwork) => ({
      ...artwork,
      distance: data?.find((item) => String(item.id) === artwork.id)?.distance,
    }));

  return result;
};

export const usePopularArtworks = (criteria: FilteringCriteria<Artwork>) => {
  const artworksRef = useFirestore()
    .collection(FirebaseCollection.artworks)
    .orderBy(criteria.property, "desc")
    .limit(criteria.limit);

  const data = useFirestoreCollectionData<Artwork>(artworksRef);

  return data;
};


// Use to grab artwork ID for Art 
export const useArtwork = (id: string) => {
  const artworkRef = useFirestore()
    .collection(FirebaseCollection.artworks)
    .doc(id)
  //.limit(criteria.limit);

  const data = useFirestoreDocData(artworkRef);

  return data;
};
