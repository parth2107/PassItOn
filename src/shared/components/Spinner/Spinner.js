import { View, ActivityIndicator } from "react-native";

export default function Spinner({ bool, size }) {

  return (
    <View
      style={{
        position: "absolute",
        zIndex: 3,

        top: 0,
        bottom: 0,

        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(255,255,255,0.5)",
        width: "100%",
      }}
    >
      <ActivityIndicator size={size} bool={bool} color='rgb(89, 87, 87)' />
    </View>
  );
}
