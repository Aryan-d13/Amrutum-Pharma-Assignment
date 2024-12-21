import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const RoutineDetailsScreen = ({ route }: any) => {
  const { routine } = route.params || {}; // Fallback to avoid errors

  if (!routine) {
    return (
      <View style={styles.container}>
        <Text>No routine data provided.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text>Routine Name: {routine.name}</Text>
      <Text>Duration: {routine.duration}</Text>
      <Text>Steps:</Text>
      {routine.steps.map((step: string, index: number) => (
        <Text key={index}>- {step}</Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
});

export default RoutineDetailsScreen;
