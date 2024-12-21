// app/services/notificationService.ts
import * as Notifications from 'expo-notifications';
import * as Device from 'expo-device';
import { Platform } from 'react-native';

// Configure how notifications are handled (foreground)
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

// Ask for permissions
export async function registerForPushNotificationsAsync(): Promise<string | undefined> {
  let token;
  if (Platform.OS === 'android') {
    await Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
    });
  }

  if (Device.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      console.log('Failed to get push token for push notification!');
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log('Notification Token: ', token);
  } else {
    console.log('Must use physical device for Push Notifications');
  }

  return token;
}

// Schedule a local notification (example for daily reminders)
export async function scheduleLocalNotification() {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: 'Routine Reminder',
      body: 'Remember to complete today’s routine!',
    },
    trigger: {
      hour: 9, // 9 AM every day
      minute: 0,
      repeats: true,
    },
  });
}
