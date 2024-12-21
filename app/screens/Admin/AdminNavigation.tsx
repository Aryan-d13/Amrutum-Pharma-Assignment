import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CreateRoutineScreen from './CreateRoutineScreen';
import AdminAnalyticsScreen from './AdminAnalyticsScreen';

const Stack = createStackNavigator();

const AdminNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="CreateRoutine"
        component={CreateRoutineScreen}
        options={{ title: 'Create Routine' }}
      />
      <Stack.Screen
        name="Analytics"
        component={AdminAnalyticsScreen}
        options={{ title: 'Analytics Dashboard' }}
      />
    </Stack.Navigator>
  );
};

export default AdminNavigation;
