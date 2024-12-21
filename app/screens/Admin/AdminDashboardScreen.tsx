import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const AdminDashboardScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('CreateRoutine')}
        style={styles.button}
      >
        Create Routine
      </Button>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('Analytics')}
        style={styles.button}
      >
        View Analytics
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  button: { marginVertical: 10, width: '80%' },
});

export default AdminDashboardScreen;
