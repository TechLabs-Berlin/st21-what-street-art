import { useEffect, useState } from "react";
import { Coordinates } from "../models/location";

interface LocationState {
  loaded?: boolean;
  error?: Error;
  coordinates?: Coordinates;
}

const useGeolocation = () => {
  const [location, setLocation] = useState<LocationState>({
    loaded: false,
    coordinates: { lat: "", lng: "" },
    error: null as unknown as Error,
  });

  const onSuccess = (location: any) => {
    setLocation({
      loaded: true,
      coordinates: {
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      },
    });
  };

  const onError = (error: any) => {
    setLocation({
      loaded: true,
      error,
    });
  };

  useEffect(() => {
    if (!("geolocation" in navigator)) {
      onError({
        code: 0,
        message: "Geolocation not supported",
      });
    }

    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }, []);

  return location;
};

export default useGeolocation;
