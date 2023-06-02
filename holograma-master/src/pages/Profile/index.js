
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ProfileStackRoutes } from '../../routes/profileStack.routes';

export default function Profile({navigation}) {
  React.useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);
  
  return (
    <NavigationContainer independent={true}>
      <ProfileStackRoutes/>
    </NavigationContainer>
  );
}
