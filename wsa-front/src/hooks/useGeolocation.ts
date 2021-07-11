import useSWR from "swr";
import { getCurrentPosition } from "../utils/geolocation";

const useGeolocation = () => {
  const { data } = useSWR<GeolocationPosition>(
    "useGeolocation",
    getCurrentPosition,
    {
      suspense: true,
    }
  );
  const result = { lat: data?.coords.latitude, lng: data?.coords.longitude };

  return result;
};

export default useGeolocation;
