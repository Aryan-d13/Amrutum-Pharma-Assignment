// app/screens/Consumer/RoutineListScreen.tsx
import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/store';
import { selectRoutine } from '../../redux/slices/routinesSlice';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export default function RoutineListScreen() {
  const routines = useSelector((state: RootState) => state.routines.routines);
  const dispatch = useDispatch();
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const handlePress = (id: string) => {
    dispatch(selectRoutine(id));
    navigation.navigate('RoutineDetails');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Available Routines</Text>
      <FlatList
        data={routines}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.routineItem}
            onPress={() => handlePress(item.id)}
          >
            <Text style={styles.routineName}>{item.name}</Text>
            <Text>{item.duration} weeks</Text>
          </TouchableOpacity>
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
  routineName: { fontWeight: 'bold', fontSize: 16 },
});
