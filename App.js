import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Platform} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons'
import Tasks from './components/Tasks';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './Screens/HomeScreen';
import SettingsScreen from './Screens/SettingsScreen';

const Tab = createBottomTabNavigator();



export default function App({navigation}) {
  return (
    <NavigationContainer>
     <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarStyle: {
          backgroundColor: '#54BAB9',
        },
        tabBarLabelStyle: {
          marginBottom: 1,
          fontWeight: 'bold',
        },
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === 'Home') {
              return (
                <Ionicons
                  name={
                    focused
                      ? 'sunny-sharp'
                      : 'sunny-outline'
                  }
                  size={size}
                  color={color}
                />
              );
            } else if (route.name === 'Settings') {
              return (
                <Ionicons
                  name={focused ? 'settings' : 'settings-outline'}
                  size={size}
                  color={color}
                />
              );
            }
          },
          tabBarInactiveTintColor: '#40514E',
          tabBarActiveTintColor: '#40514E',
        })}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
        />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
main:{
  flex: 1,
  backgroundColor: '#f2f2f2',
},
  container: {
    paddingTop: Platform.OS === 'android' ? 24 : 0,
  },
  tasksWrapper: {
paddingHorizontal: 20,
  },
  sectionTitle: {
fontSize: 24,
fontWeight: 'bold'
},
  items: {

  },
});
