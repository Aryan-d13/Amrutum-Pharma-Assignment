// App.tsx
import React, { useEffect } from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from './app/redux/store';
import RootNavigator from './app/navigation';
import { Provider as PaperProvider } from 'react-native-paper';
import { registerForPushNotificationsAsync } from './app/services/notificationService';

export default function App() {
  useEffect(() => {
    (async () => {
      await registerForPushNotificationsAsync();
    })();
  }, []);

  return (
    <ReduxProvider store={store}>
      <PaperProvider>
        <RootNavigator />
      </PaperProvider>
    </ReduxProvider>
  );
}
