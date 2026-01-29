import { useSuperchargerRegion } from "@/hooks/use-supercharger";
import { default as debounce } from "lodash.debounce";
import React, { useState } from "react";
import { Text } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TabTwoScreen() {
  const [region, setRegion] = useState({
    latitude: 52,
    longitude: 8,
    latitudeDelta: 3,
    longitudeDelta: 3,
  });

  const {
    isLoading,
    error,
    data: superchargers,
  } = useSuperchargerRegion(
    region.latitude,
    region.longitude,
    region.latitudeDelta,
    region.longitudeDelta,
  );

  if (isLoading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error.message}</Text>;

  console.log(superchargers);

  return (
    <SafeAreaView edges={["top"]} style={{ flex: 1 }}>
      <MapView
        style={{ flex: 1 }}
        region={region}
        onRegionChange={(region) => debounce(() => setRegion(region), 1000)}
      />
      {superchargers?.map((supercharger) => (
        <Marker
          key={supercharger.id}
          coordinate={{
            latitude: supercharger.latitude,
            longitude: supercharger.longitude,
          }}
          pinColor="red"
          title={supercharger.name}
        />
      ))}
    </SafeAreaView>
  );
}
