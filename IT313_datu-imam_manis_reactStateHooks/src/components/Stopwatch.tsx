
import { View, Text, StyleSheet } from 'react-native';

type StopwatchProps = {
  seconds: number;
  isRunning: boolean;
};

export default function Stopwatch({
  seconds,
  isRunning,
}: StopwatchProps) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  const time =
    String(minutes).padStart(2, '0') +
    ':' +
    String(remainingSeconds).padStart(2, '0');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lab Stopwatch</Text>
      <Text style={styles.time}>{time}</Text>
      <Text>{isRunning ? 'Running…' : 'Paused'}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 20,
    gap: 8,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  time: {
    fontSize: 36,
    fontWeight: 'bold',
  },
});