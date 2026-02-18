import * as AC from "@bacons/apple-colors";
import { ScrollView, Text, View } from "react-native";

export default function IndexRoute() {
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      contentContainerStyle={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 32,
      }}
    >
      <View
        style={{
          alignItems: "center",
          gap: 12,
        }}
      >
        <Text
          style={{
            fontSize: 48,
            fontWeight: "700",
            color: AC.label,
            letterSpacing: -1,
          }}
        >
          Hello, World!
        </Text>
        <Text
          style={{
            fontSize: 17,
            color: AC.secondaryLabel,
            textAlign: "center",
          }}
        >
          Welcome to your new Expo app.
        </Text>
      </View>
    </ScrollView>
  );
}
