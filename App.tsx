import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import ManageExpences from './src/screens/ManageExpences';
import CurrentExpences from './src/screens/CurrentExpences';
import AllExpences from './src/screens/AllExpences';
import CustomIcon from './src/assets/CustomIcon';
 
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Home() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerTitleAlign : 'center' ,
        headerStyle: {backgroundColor: '#0f2587ff' },
        headerTintColor: '#cbcddaff',
        tabBarStyle: {backgroundColor: '#0f2587ff'},
        tabBarActiveTintColor: '#4c9a20ff',
        tabBarInactiveTintColor : '#b85a16ff'
      }}>
      <Tab.Screen options={{
        tabBarIcon: ({color}) =>
          <CustomIcon name={"home"} size={24} color={color}  />
      }} name="CurrentExpences" component={CurrentExpences} />
      <Tab.Screen options={{ tabBarIcon: ({color}) =>
          <CustomIcon name={"bean"} size={24} color={color} />
      }} name="AllExpences" component={AllExpences} />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen name="ManageExpences" component={ManageExpences} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
