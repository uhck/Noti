import React from 'react';
import { StyleSheet, Text } from 'react-native';
import Reanimated, {
  SharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';

const styles = StyleSheet.create({
    rightAction: { width: 50, height: 50, backgroundColor: 'purple' },
  });

function RightAction(prog: SharedValue<number>, drag: SharedValue<number>) {
  const styleAnimation = useAnimatedStyle(() => {
    console.log('[R] showRightProgress:', prog.value);
    console.log('[R] appliedTranslation:', drag.value);
    return {
      transform: [{ translateX: drag.value + 50 }],
    };
  });

  return (
    <Reanimated.View style={styleAnimation}>
    <Text style={styles.rightAction}>Text</Text>
    </Reanimated.View>
  );
}

export { RightAction };
