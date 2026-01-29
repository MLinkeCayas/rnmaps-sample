import {
    getSuperchargerData,
    SuperchargerData,
} from "@/services/supercharger-api";
import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";

export const useSupercharger = () => {
  return useQuery({
    queryKey: ["supercharger"],
    queryFn: getSuperchargerData,
  });
};

export const useSuperchargerRegion = (
  latitude: number,
  longitude: number,
  latitudeDelta: number,
  longitudeDelta: number,
) => {
  const superchargers = useSupercharger();

  const filteredData = useMemo(() => {
    if (!superchargers.data) return undefined;

    return superchargers.data.filter(
      (supercharger: SuperchargerData) =>
        supercharger.latitude >= latitude - latitudeDelta / 2 &&
        supercharger.latitude <= latitude + latitudeDelta / 2 &&
        supercharger.longitude >= longitude - longitudeDelta / 2 &&
        supercharger.longitude <= longitude + longitudeDelta / 2,
    );
  }, [superchargers.data, latitude, latitudeDelta, longitude, longitudeDelta]);

  if (!superchargers.data) return superchargers;

  return {
    ...superchargers,
    data: filteredData ?? [],
  };
};
