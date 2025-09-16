import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { dummyIncomes } from "@/constants/dummyData";
import IncomeItem from "@/components/common/IncomeItem";

export default function IncomeScreen() {
  const onAddIncome = () => {
    console.log("Add new income button pressed!");
    // Later, this will navigate to a form screen
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>All Incomes</Text>
        </View>

        {dummyIncomes.map((income) => (
          <IncomeItem key={income.id} income={income} />
        ))}
      </ScrollView>

      {/* Floating Action Button */}
      <TouchableOpacity style={styles.addButton} onPress={onAddIncome}>
        <Ionicons name="add" size={30} color="white" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  scrollContent: {
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  // Style for Floating Action Button
  addButton: {
    position: "absolute",
    bottom: 30,
    right: 30,
    backgroundColor: "#1E90FF",
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});