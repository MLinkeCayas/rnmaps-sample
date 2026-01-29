import React from "react";
import MapView from "react-native-maps";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TabTwoScreen() {
  return (
    <SafeAreaView edges={["top"]} style={{ flex: 1 }}>
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 52,
          longitude: 8,
          latitudeDelta: 3,
          longitudeDelta: 3,
        }}
      />
    </SafeAreaView>
  );
}
