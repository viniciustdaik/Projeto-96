import BottomTabNavigator from './BottomTabNavigator';
import CreateTrade from '../screens/CreateTrade';

import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();
const StackNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="Home" component={BottomTabNavigator} />
            <Stack.Screen name="CreateTrade" component={CreateTrade} />
        </Stack.Navigator>
    );
};

export default StackNavigator;