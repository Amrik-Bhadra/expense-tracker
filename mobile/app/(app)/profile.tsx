import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

// A reusable component for each setting item
const SettingsItem = ({ icon, title, onPress }) => (
  <TouchableOpacity style={styles.settingsItem} onPress={onPress}>
    <View style={styles.itemLeft}>
      <Ionicons name={icon} size={24} color="#888" />
      <Text style={styles.itemTitle}>{title}</Text>
    </View>
    <Ionicons name="chevron-forward-outline" size={20} color="#888" />
  </TouchableOpacity>
);

export default function ProfileScreen() {
  const onLogout = () => {
    console.log("Logout pressed");
    // This is where you would handle the user logging out and redirecting them to the login screen.
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* User Profile Section */}
        <View style={styles.profileSection}>
          <Image
            source={{ uri: "https://placehold.co/150x150/png" }}
            style={styles.profileImage}
          />
          <Text style={styles.userName}>Amrik Bhadra</Text>
          <Text style={styles.userEmail}>amrik.bhadra@example.com</Text>
        </View>

        {/* Account Settings Section */}
        <View style={styles.settingsSection}>
          <Text style={styles.sectionTitle}>Account</Text>
          <SettingsItem
            icon="person-outline"
            title="Edit Profile"
            onPress={() => console.log("Edit Profile pressed")}
          />
          <SettingsItem
            icon="lock-closed-outline"
            title="Change Password"
            onPress={() => console.log("Change Password pressed")}
          />
        </View>

        {/* App Settings Section */}
        <View style={styles.settingsSection}>
          <Text style={styles.sectionTitle}>General</Text>
          <SettingsItem
            icon="notifications-outline"
            title="Notifications"
            onPress={() => console.log("Notifications pressed")}
          />
          <SettingsItem
            icon="settings-outline"
            title="App Settings"
            onPress={() => console.log("App Settings pressed")}
          />
        </View>

        {/* Support & About Section */}
        <View style={styles.settingsSection}>
          <Text style={styles.sectionTitle}>More</Text>
          <SettingsItem
            icon="help-circle-outline"
            title="Help & Support"
            onPress={() => console.log("Help & Support pressed")}
          />
          <SettingsItem
            icon="information-circle-outline"
            title="About App"
            onPress={() => console.log("About App pressed")}
          />
        </View>

        {/* Logout Button */}
        <TouchableOpacity style={styles.logoutButton} onPress={onLogout}>
          <Text style={styles.logoutText}>Log Out</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 40,
  },
  profileSection: {
    alignItems: "center",
    marginBottom: 30,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: "#1E90FF",
  },
  userName: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 15,
  },
  userEmail: {
    fontSize: 16,
    color: "gray",
    marginTop: 5,
  },
  settingsSection: {
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#4a4a4a",
    marginBottom: 10,
  },
  settingsItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: "600",
  },
  logoutButton: {
    backgroundColor: "#FF6347",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  logoutText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});