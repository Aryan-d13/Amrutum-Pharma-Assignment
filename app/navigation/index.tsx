// app/navigation/index.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Screens (we'll create these soon)
import CreateRoutineScreen from '../screens/Admin/CreateRoutineScreen';
import RoutineAnalyticsScreen from '../screens/Admin/RoutineAnalyticsScreen';

import RoutineListScreen from '../screens/Consumer/RoutineListScreen';
import RoutineDetailsScreen from '../screens/Consumer/RoutineDetailsScreen';

const Tab = createBottomTabNavigator();

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        {/* Admin / Brand Side */}
        <Tab.Screen 
          name="AdminCreate" 
          component={CreateRoutineScreen} 
          options={{ title: 'Create Routine' }}
        />
        <Tab.Screen 
          name="AdminAnalytics" 
          component={RoutineAnalyticsScreen} 
          options={{ title: 'Analytics' }}
        />

        {/* Consumer Side */}
        <Tab.Screen 
          name="RoutineList" 
          component={RoutineListScreen} 
          options={{ title: 'Routines' }}
        />
        <Tab.Screen 
          name="RoutineDetails" 
          component={RoutineDetailsScreen}
          options={{ title: 'Routine Details' }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
