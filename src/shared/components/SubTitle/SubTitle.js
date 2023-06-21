import { Text } from "react-native";

export default function SubTitle({ text, styles }) {
  return (
    <Text
      style={
        styles
          ? styles
          : {
              // fontFamily: "Roboto",
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: 18,

              lineHeight: 35,
              letterSpacing: 0.02,

              color: '#153759',
            }
      }
    >
      {text}
    </Text>
  );
}
