import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Text } from 'react-native-paper';

const AdminAnalyticsScreen = () => {
  // Mock Analytics Data
  const analytics = {
    topRoutines: [
      { name: 'Skincare Routine', completions: 120 },
      { name: 'Mindfulness Routine', completions: 85 },
    ],
    completionRates: {
      'Skincare Routine': '75%',
      'Mindfulness Routine': '60%',
    },
    engagementMetrics: {
      activeUsers: 45,
      weeklyCompletions: 30,
    },
  };

  return (
    <View style={styles.container}>
      {/* Top Completed Routines */}
      <Card style={styles.card}>
        <Card.Title title="Top Completed Routines" />
        <Card.Content>
          {analytics.topRoutines.map((routine) => (
            <Text key={routine.name}>
              {routine.name}: {routine.completions} completions
            </Text>
          ))}
        </Card.Content>
      </Card>

      {/* Completion Rates */}
      <Card style={styles.card}>
        <Card.Title title="Completion Rates" />
        <Card.Content>
          {Object.entries(analytics.completionRates).map(([name, rate]) => (
            <Text key={name}>
              {name}: {rate}
            </Text>
          ))}
        </Card.Content>
      </Card>

      {/* Engagement Metrics */}
      <Card style={styles.card}>
        <Card.Title title="Engagement Metrics" />
        <Card.Content>
          <Text>Active Users: {analytics.engagementMetrics.activeUsers}</Text>
          <Text>Weekly Completions: {analytics.engagementMetrics.weeklyCompletions}</Text>
        </Card.Content>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  card: { marginBottom: 16, elevation: 4, borderRadius: 8 },
});

export default AdminAnalyticsScreen;
