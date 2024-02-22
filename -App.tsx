import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import WorkoutEntryRow from './src/components/workout-entry-row';

export default function App() {
  return (
    <View style={styles.container}>

      <WorkoutEntryRow/>
      <WorkoutEntryRow/>
      <WorkoutEntryRow/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
