// app/screens/Admin/RoutineAnalyticsScreen.tsx
import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

export default function RoutineAnalyticsScreen() {
  const routines = useSelector((state: RootState) => state.routines.routines);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Routine Analytics</Text>
      <FlatList
        data={routines}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.routineItem}>
            <Text style={styles.title}>{item.name}</Text>
            <Text>Duration: {item.duration} weeks</Text>
            <Text>Milestones: {item.milestones.length}</Text>
            <Text>Steps: {item.steps.length}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  heading: { fontSize: 20, marginBottom: 12 },
  routineItem: {
    padding: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
    borderRadius: 4,
  },
  title: { fontWeight: 'bold', fontSize: 16, marginBottom: 4 },
});
