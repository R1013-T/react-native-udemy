import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import Home from './screens/HomeScreen';
import ArticleScreen from './screens/ArticleScreen';
import ClipScreen from './screens/ClipScreen';
import Ionicons from '@expo/vector-icons/Ionicons';
import { store, persistor } from './store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { Text } from 'react-native';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={Home}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Article"
      component={ArticleScreen}
    />
  </Stack.Navigator>
);

const ClipStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Clip"
      component={ClipScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Article"
      component={ArticleScreen}
    />
  </Stack.Navigator>
);

const screenOptions = ({ route }) => ({
  tabBarIcon: ({ focused, color, size }) => {
    let iconName;

    if (route.name === 'HomeTab') {
      iconName = focused
        ? 'home'
        : 'home-outline';
    } else if (route.name === 'ClipTab') {
      iconName = focused
        ? 'bookmark-sharp'
        : 'bookmark-outline';
    }
    return <Ionicons name={iconName} size={size} color={color} />;
  },
});

export default function App() {

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={screenOptions}
          >
            <Tab.Screen name="HomeTab" component={HomeStack} options={{ headerShown: false, title: "Home" }} />
            <Tab.Screen name="ClipTab" component={ClipStack} options={{ headerShown: false, title: "Clip" }} />
          </Tab.Navigator>
          <StatusBar
            animated={true}
          />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}