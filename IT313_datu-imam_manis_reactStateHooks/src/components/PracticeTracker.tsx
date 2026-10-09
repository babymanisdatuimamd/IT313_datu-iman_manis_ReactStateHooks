
import { View, Text, Button, StyleSheet } from 'react-native';

type PracticeTrackerProps = {
  solved: number;
  onSolve: () => void;
  onReset: () => void;
};

export default function PracticeTracker({
  solved,
  onSolve,
  onReset,
}: PracticeTrackerProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Practice Tracker</Text>

      <Text style={styles.counter}>Solved: {solved}</Text>

      {solved >= 5 && <Text>Great job!</Text>}

      <Button title="Solve +1" onPress={onSolve} />
      <Button title="Reset" onPress={onReset} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 12,
    marginVertical: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  counter: {
    fontSize: 18,
  },
});