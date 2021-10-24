import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { routes } from '../constants/routeConstant';
const Stack = createNativeStackNavigator();

const MyNavigationContainer = () => {
    return ( 
       <NavigationContainer>
           <Stack.Navigator initialRouteName="Home" 
>
              {routes.map(({name, component, headerShown}) => (
                   <Stack.Screen options={{headerShown: headerShown}} key={name} name={name} component={component} />
              ))}
           </Stack.Navigator>
       </NavigationContainer>
     );
}
 
export default MyNavigationContainer;