// import React from "react";
// import { Redirect, Tabs } from "expo-router";
// import { Ionicons } from "@expo/vector-icons";
// import { ActivityIndicator, View } from "react-native";

// const TabBarIcon = ({
//   name,
//   color,
// }: {
//   name: React.ComponentProps<typeof Ionicons>["name"];
//   color: string;
// }) => {
//   return (
//     <Ionicons
//       size={24}
//       style={{ marginBottom: -1 }}
//       name={name}
//       color={color}
//     />
//   );
// };

// export default function AppLayout() {

//   // // While the authentication state is loading, show a spinner.
//   // if (isLoading) {
//   //   return (
//   //     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//   //       <ActivityIndicator size="large" color="#5a67d8" />
//   //     </View>
//   //   );
//   // }

//   // // If the user is not logged in, redirect them to the login screen.
//   // if (!user) {
//   //   return <Redirect href="/login" />;
//   // }

//   // If the user is authenticated, render the main tab navigator.
//   return (
//     <Tabs
//       screenOptions={{
//         tabBarActiveTintColor: "#1E90FF",
//         headerShown: true,
//         headerStyle: {
//           backgroundColor: "#1E90FF",
//         },
//         headerTitleStyle: {
//           fontWeight: "bold",
//         },
//         headerTintColor: "#fff",
//       }}
//     >
//       <Tabs.Screen
//         name="dashboard"
//         options={{
//           title: "Dashboard",
//           headerShown: false,
//           tabBarIcon: ({ color }) => (
//             <TabBarIcon name="home-sharp" color={color} />
//           ),
//         }}
//       />
//       <Tabs.Screen
//         name="income"
//         options={{
//           title: "Income",
//           headerShown: false,
//           tabBarIcon: ({ color }) => (
//             <TabBarIcon name="cash-sharp" color={color} />
//           ),
//         }}
//       />
//       <Tabs.Screen
//         name="expenses"
//         options={{
//           title: "Expenses",
//           headerShown: false,
//           tabBarIcon: ({ color }) => (
//             <TabBarIcon name="card-outline" color={color} />
//           ),
//         }}
//       />
//       <Tabs.Screen
//         name="profile"
//         options={{
//           title: "Profile",
//           headerShown: false,
//           tabBarIcon: ({ color }) => (
//             <TabBarIcon name="person-sharp" color={color} />
//           ),
//         }}
//       />
//     </Tabs>
//   );
// }


import React from "react";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { ActivityIndicator, View } from "react-native";

// TabBarIcon component remains unchanged
const TabBarIcon = ({
  name,
  color,
}: {
  name: React.ComponentProps<typeof Ionicons>["name"];
  color: string;
}) => {
  return (
    <Ionicons
      size={24}
      style={{ marginBottom: -1 }}
      name={name}
      color={color}
    />
  );
};

export default function AppLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#1E90FF",
        // headerStyle and headerTitleStyle are not needed here
        // as you're hiding the header with headerShown: false below
      }}
    >
      <Tabs.Screen
        name="dashboard"
        options={{
          title: "Dashboard",
          headerShown: false, // Correctly hides the header for the dashboard
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="home-sharp" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="income"
        options={{
          title: "Income",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="cash-sharp" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="expenses"
        options={{
          title: "Expenses",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="card-outline" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="person-sharp" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}