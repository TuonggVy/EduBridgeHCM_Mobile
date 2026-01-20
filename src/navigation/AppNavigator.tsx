import {
  Home,
  Search,
  Bot,
  MessageCircleMore,
  User,
} from 'lucide-react-native';
import React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RootStackParamList, BottomTabParamList } from '../types';

// Screens
import { HomeScreen } from '../screens/HomeScreen';
import { SearchScreen } from '../screens/SearchScreen';
import { AIRecommendationScreen } from '../screens/AIRecommendationScreen';
import { CounselingScreen } from '../screens/CounselingScreen';
import { ProfileScreen } from '../screens/ProfileScreen';
import { SchoolDetailScreen } from '../screens/SchoolDetailScreen';
import { ChatScreen } from '../screens/ChatScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<BottomTabParamList>();

// Bottom Tab Navigator
function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#2563eb',
        tabBarInactiveTintColor: '#94a3b8',
        tabBarStyle: {
          backgroundColor: '#fff',
          borderTopWidth: 1,
          borderTopColor: '#e2e8f0',
          paddingTop: 8,
          paddingBottom: 8,
          height: 60,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
          marginTop: 4,
        },
      }}
    >
      {/* Home */}
    <Tab.Screen
      name="Home"
      component={HomeScreen}
      options={{
        tabBarLabel: 'Trang chủ',
        tabBarIcon: ({ color, focused }) => (
        <TabIcon Icon={Home} color={color} focused={focused} />
      ),
      }}
    />
    {/* Search */}
    <Tab.Screen
    name="Search"
    component={SearchScreen}
    options={{
    tabBarLabel: 'Tìm kiếm',
    tabBarIcon: ({ color, focused }) => (
    <TabIcon Icon={Search} color={color} focused={focused} />
    ),
  }}
    />

<Tab.Screen
  name="AIRecommendation"
  component={AIRecommendationScreen}
  options={{
    tabBarLabel: 'AI',
    tabBarIcon: ({ color, focused }) => (
      <TabIcon Icon={Bot} color={color} focused={focused} />
    ),
  }}
/>
<Tab.Screen
  name="Counseling"
  component={CounselingScreen}
  options={{
    tabBarLabel: 'Tư vấn',
    tabBarIcon: ({ color, focused }) => (
      <TabIcon Icon={MessageCircleMore} color={color} focused={focused} />
    ),
  }}
/>
<Tab.Screen
  name="Profile"
  component={ProfileScreen}
  options={{
    tabBarLabel: 'Cá nhân',
    tabBarIcon: ({ color, focused }) => (
      <TabIcon Icon={User} color={color} focused={focused} />
    ),
  }}
/>
    </Tab.Navigator>
  );
}

const TabIcon = ({
  Icon,
  color,
  focused,
}: {
  Icon: any;
  color: string;
  focused: boolean;
}) => {
  return (
    <Icon
      size={24}
      color={color}
      strokeWidth={focused ? 2.5 : 2}
    />
  );
};


// Main App Navigator
export function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Main" component={BottomTabs} />
        <Stack.Screen name="SchoolDetail" component={SchoolDetailScreen} />
        <Stack.Screen name="Chat" component={ChatScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
