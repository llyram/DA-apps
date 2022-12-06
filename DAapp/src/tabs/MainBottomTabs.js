import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image} from 'react-native';
import {COLORS} from '../assets/style/colors';
import {DLDocumentScreen} from '../screens/documents/DLDocumentScreen';
import {DLHelpScreen} from '../screens/help/DLHelpScreen';
import {DLHomeScreen} from '../screens/home/DLHomeScreen';
import {DLRevenueScreen} from '../screens/revenue/DLRevenueScreen';
import {DLSettingsScreen} from '../screens/settings/DLSettingsScreen';
import {DLSignScreen} from '../screens/sign/DLSignScreen';
const Tab = createBottomTabNavigator();

export function MainBottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={{

        style:{borderTopWidth:0,},
        headerShown: false,
        tabBarItemStyle: {
          borderTopWidth:0,
          borderWidth:0,
          borderTopColor: COLORS.app_blue_light,
          borderColor: COLORS.app_blue_light,
          tabBarActiveBackgroundColor: COLORS.app_blue_light,
          
        },
        tabBarStyle: {
          borderTopWidth: 0,
          backgroundColor: COLORS.app_blue,
         },
        tabBarActiveBackgroundColor: COLORS.app_blue_light,
        tabBarInactiveBackgroundColor: COLORS.app_blue,
        tabBarActiveTintColor: COLORS.white,
      }}>
      <Tab.Screen
        name="DLSignScreen"
        component={DLSignScreen}
        options={{
          title: 'SIGN',
          tabBarIcon: ({size, focused, color}) => {
            return (
              <Image
                style={{width: size, height: size}}
                source={require('../assets/images/icon_sign.png')}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="DLDocumentScreen"
        component={DLDocumentScreen}
        options={{
          title: 'DOCUMENTS',
          tabBarIcon: ({size, focused, color}) => {
            return (
              <Image
                style={{width: size, height: size}}
                source={require('../assets/images/icon_documents.png')}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="DLRevenueScreen"
        component={DLRevenueScreen}
        options={{
          title: 'REVENUE',
          tabBarIcon: ({size, focused, color}) => {
            return (
              <Image
                style={{width: size, height: size}}
                source={require('../assets/images/icon_revenue.png')}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="DLHelpScreen"
        component={DLHelpScreen}
        options={{
          title: 'HELP',
          tabBarIcon: ({size, focused, color}) => {
            return (
              <Image
                style={{width: size, height: size}}
                source={require('../assets/images/icon_help.png')}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}
