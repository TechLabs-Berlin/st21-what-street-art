import {
  useFirestoreDocData,
  useFirestore,
  useFirestoreCollectionData,
} from "reactfire";
import { Artwork } from "../models/artwork";
import { FilteringCriteria, FirebaseCollection } from "../models/firebase";
import useGeolocation from "./useGeolocation";
import useSWR from "swr";
import { Coordinates } from "../models/location";

export const useArtworks = () => {
  const artworksRef = useFirestore().collection(FirebaseCollection.artworks);

  const data = useFirestoreCollectionData<Artwork>(artworksRef);

  return data;
};

const fetcher = async (url: string, lat: number, lng: number) => {
  const rawResponse = await fetch(`${url}?lat=${lat}&lng=${lng}`);

  const response = rawResponse.json();

  return response;
};

export const useNearYou = () => {
  // TODO: Use queries to filter which IDs we want
  const artworks = useArtworks();
  // TODO: Update useGeolocation to use promises
  const currentLocation = useGeolocation();
  // TODO: Use Darina's API
  const { data } = useSWR<Artwork[]>(
    [
      "https://raw.githubusercontent.com/ythecombinator/wsa-server-mock/main/db.json",
      52.4973747,
      13.3304725,
    ],
    fetcher,
    {
      suspense: true,
    }
  );

  const ids = data?.map((item) => `${item.id}`);
  const result = artworks?.filter((artwork) => ids?.includes(artwork.id));

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

export const useArtwork = (id: string) => {
  const artworkRef = useFirestore()
    .collection(FirebaseCollection.artworks)
    .doc(id);

  const data = useFirestoreDocData(artworkRef);

  return data;
};
