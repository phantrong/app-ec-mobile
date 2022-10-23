import React from 'react';
import { RecoilRoot } from 'recoil';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Root from './src';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';
import { Suspense } from 'react/cjs/react.production.min';
import { ActivityIndicator } from 'react-native';
import { Colors } from './src/assets';
const App = () => {
  console.reportErrorsAsExceptions = false;
  return (
    <Suspense
      fallback={<ActivityIndicator size="small" color={Colors.CS_DARK_RED} />}>
      <RecoilRoot>
        <SafeAreaProvider>
          <GestureHandlerRootView style={styles.flexRoot}>
            <Root />
          </GestureHandlerRootView>
        </SafeAreaProvider>
      </RecoilRoot>
    </Suspense>
  );
};
const styles = StyleSheet.create({
  flexRoot: { flex: 1 },
});
export default App;
