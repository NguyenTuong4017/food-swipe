import { Dimensions, StyleSheet, TouchableOpacity, View } from "react-native";
import Animated, {
  Easing,
  interpolateColor,
  ReduceMotion,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";

import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from "react-native-gesture-handler";

import Card from "./Template/Card";

export default function Body() {
  const progess = useSharedValue(0);
  const { width, height } = Dimensions.get("window");
  const deviceWidth = useSharedValue(width);
  const deviceHeight = useSharedValue(height);

  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const rotation = useSharedValue(0);

  const animatedStyles = useAnimatedStyle(() => ({
    backgroundColor: interpolateColor(progess.value, [0, 1], ["black", "red"]),
    width: deviceWidth.value * 0.9,
    height: deviceHeight.value * 0.65,
    transform: [
      { translateY: translateY.value },
      { translateX: translateX.value },
      { rotate: `${rotation.value}deg` },
    ],
    borderRadius: 10,
  }));

  const panGesture = Gesture.Pan()
    .onUpdate((event) => {
      rotation.value =
        (event.translationX / deviceWidth.value) * 15 +
        (event.translationY / deviceHeight.value) * 10;
      translateX.value = event.translationX;
      translateY.value = event.translationY;
    })
    .onEnd((event) => {
      console.log(event);
      translateX.value = withTiming(0, {
        duration: 500,
        easing: Easing.elastic(1.7),
      });
      translateY.value = withTiming(0, {
        duration: 500,
        easing: Easing.elastic(1.7),
      });
      rotation.value = withTiming(0);
    });
  return (
    <GestureHandlerRootView>
      <GestureDetector gesture={panGesture}>
        <Animated.View style={animatedStyles}>
          <Card />
        </Animated.View>
      </GestureDetector>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  example: {
    width: 300,
    height: 300,
  },
});
