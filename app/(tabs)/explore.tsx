import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TabTwoScreen() {
  return (
    <SafeAreaView edges={["top"]}>
      <ThemedView>
        <ThemedText type="title">Explore</ThemedText>
      </ThemedView>
    </SafeAreaView>
  );
}
