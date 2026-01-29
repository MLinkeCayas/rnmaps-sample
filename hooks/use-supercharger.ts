import {
  getSuperchargerData,
  SuperchargerData,
} from "@/services/supercharger-api";
import { useQuery } from "@tanstack/react-query";

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
  return useSupercharger().data?.filter(
    (supercharger: SuperchargerData) =>
      supercharger.latitude >= latitude - latitudeDelta &&
      supercharger.latitude <= latitude + latitudeDelta &&
      supercharger.longitude >= longitude - longitudeDelta &&
      supercharger.longitude <= longitude + longitudeDelta,
  );
};
