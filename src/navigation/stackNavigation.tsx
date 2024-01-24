import { NavigationContainer } from '@react-navigation/native';
import * as stack from '@react-navigation/stack';
import Splash from '../pages/splash';
import SignUp from '../pages/signUp';
import Login from '../pages/login';
import Home from '../pages/home';

const StackNavigation = () => {
    const Stack = stack.createStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
                initialRouteName="Splash">
                <Stack.Screen name="Splash" component={Splash} />
                <Stack.Screen name="SignUp" component={SignUp} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Home" component={Home} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default StackNavigation;