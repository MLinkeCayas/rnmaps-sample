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

  useMemo(() => {
    if (!superchargers.data) return superchargers;
    return (
      superchargers.data?.filter(
        (supercharger: SuperchargerData) =>
          supercharger.latitude >= latitude - latitudeDelta &&
          supercharger.latitude <= latitude + latitudeDelta &&
          supercharger.longitude >= longitude - longitudeDelta &&
          supercharger.longitude <= longitude + longitudeDelta,
      ) ?? []
    );
  }, [superchargers, latitude, latitudeDelta, longitude, longitudeDelta]);

  if (!superchargers.data) return superchargers;

  return {
    ...superchargers,
    data:
      superchargers.data?.filter(
        (supercharger: SuperchargerData) =>
          supercharger.latitude >= latitude - latitudeDelta &&
          supercharger.latitude <= latitude + latitudeDelta &&
          supercharger.longitude >= longitude - longitudeDelta &&
          supercharger.longitude <= longitude + longitudeDelta,
      ) ?? [],
  };
};
