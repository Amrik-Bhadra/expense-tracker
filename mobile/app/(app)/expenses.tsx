// import {
//   View,
//   Text,
//   StyleSheet,
//   ScrollView,
//   TouchableOpacity,
// } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";
// import { Ionicons } from "@expo/vector-icons";
// import ExpenseItem from "@/components/common/ExpenseItem";
// import { dummyExpenses } from "@/constants/dummyData";

// export default function ExpensesScreen() {
//   const onAddExpense = () => {
//     console.log("Add new expense button pressed!");
//     // Later, this will navigate to a form screen
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <ScrollView contentContainerStyle={styles.scrollContent}>
//         <View style={styles.header}>
//           <Text style={styles.headerTitle}>All Expenses</Text>
//         </View>

//         {dummyExpenses.map((expense) => (
//           <ExpenseItem key={expense.id} expense={expense} />
//         ))}
//       </ScrollView>

//       {/* Floating Action Button */}
//       <TouchableOpacity style={styles.addButton} onPress={onAddExpense}>
//         <Ionicons name="add" size={30} color="white" />
//       </TouchableOpacity>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#f5f5f5",
//   },
//   scrollContent: {
//     paddingHorizontal: 15,
//     paddingVertical: 20,
//   },
//   header: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     marginBottom: 20,
//   },
//   headerTitle: {
//     fontSize: 24,
//     fontWeight: "bold",
//   },
//   // Style for Floating Action Button
//   addButton: {
//     position: "absolute",
//     bottom: 30,
//     right: 30,
//     backgroundColor: "#1E90FF",
//     width: 60,
//     height: 60,
//     borderRadius: 30,
//     justifyContent: "center",
//     alignItems: "center",
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     elevation: 5,
//   },
// });

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Modal,
  Dimensions,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import ExpenseItem from "@/components/common/ExpenseItem";
import { dummyExpenses } from "@/constants/dummyData";

// You'll need to define your category data
const categories = [
  { name: "Groceries", icon: "cart-outline" },
  { name: "Entertainment", icon: "film-outline" },
  { name: "Gas", icon: "gas-outline" },
  { name: "Shopping", icon: "bag-outline" },
  { name: "News Paper", icon: "newspaper-outline" },
  { name: "Transport", icon: "car-outline" },
  { name: "Rent", icon: "home-outline" },
];

export default function ExpensesScreen() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");

  const onSave = () => {
    // Here you would handle form submission
    console.log("Saving expense...");
    setIsModalVisible(false); // Close the modal
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>All Expenses</Text>
        </View>

        {dummyExpenses.map((expense) => (
          <ExpenseItem key={expense.id} expense={expense} />
        ))}
      </ScrollView>

      {/* Floating Action Button */}
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => setIsModalVisible(true)}
      >
        <Ionicons name="add" size={30} color="white" />
      </TouchableOpacity>

      {/* The Modal Component */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(false)}
      >
        <View style={modalStyles.modalContainer}>
          <View style={modalStyles.modalContent}>
            {/* Header with close button */}
            <View style={modalStyles.header}>
              <TouchableOpacity onPress={() => setIsModalVisible(false)}>
                <Ionicons name="close" size={24} color="#333" />
              </TouchableOpacity>
              <Text style={modalStyles.headerTitle}>Add Expense</Text>
              <View style={{ width: 24 }} /> {/* Spacer for centering */}
            </View>

            <ScrollView contentContainerStyle={modalStyles.scrollContent}>
              {/* Categories Section */}
              <Text style={modalStyles.sectionTitle}>Categories</Text>
              <View style={modalStyles.categoryPicker}>
                <Text style={modalStyles.pickerText}>
                  {selectedCategory || "Select Category"}
                </Text>
                <Ionicons name="caret-down-outline" size={20} color="gray" />
              </View>

              {/* Amount Input */}
              <Text style={modalStyles.sectionTitle}>Amount</Text>
              <TextInput
                style={modalStyles.input}
                placeholder="$0.00"
                keyboardType="numeric"
              />

              {/* Date Picker */}
              <Text style={modalStyles.sectionTitle}>Date</Text>
              <TouchableOpacity style={modalStyles.input}>
                <Text style={{ color: "gray" }}>02/01/24</Text>
                <Ionicons name="calendar-outline" size={24} color="gray" />
              </TouchableOpacity>

              {/* Attach Receipt */}
              <Text style={modalStyles.sectionTitle}>Attach Receipt</Text>
              <TouchableOpacity style={modalStyles.input}>
                <Text style={{ color: "gray" }}>Upload image</Text>
                <Ionicons name="scan-outline" size={24} color="gray" />
              </TouchableOpacity>

              {/* Category Icons */}
              <Text style={modalStyles.sectionTitle}>Categories</Text>
              <View style={modalStyles.categoriesGrid}>
                {categories.map((cat, index) => (
                  <TouchableOpacity
                    key={index}
                    style={[
                      modalStyles.categoryIcon,
                      selectedCategory === cat.name && modalStyles.selectedCategory,
                    ]}
                    onPress={() => setSelectedCategory(cat.name)}
                  >
                    <Ionicons
                      name={cat.icon as any}
                      size={30}
                      color={selectedCategory === cat.name ? "#fff" : "#1E90FF"}
                    />
                    <Text
                      style={[
                        modalStyles.categoryText,
                        selectedCategory === cat.name && modalStyles.selectedCategoryText,
                      ]}
                    >
                      {cat.name}
                    </Text>
                  </TouchableOpacity>
                ))}
                <TouchableOpacity style={modalStyles.addCategoryIcon}>
                  <Ionicons name="add" size={30} color="#1E90FF" />
                  <Text style={modalStyles.categoryText}>Add Category</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>

            {/* Save Button */}
            <TouchableOpacity
              style={modalStyles.saveButton}
              onPress={onSave}
            >
              <Text style={modalStyles.saveButtonText}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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

const modalStyles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    height: "90%",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    paddingBottom: 15,
    marginBottom: 10,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  scrollContent: {
    paddingBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 15,
    marginBottom: 5,
  },
  input: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    fontSize: 16,
  },
  categoryPicker: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
  },
  pickerText: {
    fontSize: 16,
    color: "gray",
  },
  categoriesGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  categoryIcon: {
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    borderRadius: 15,
    padding: 10,
    width: (Dimensions.get("window").width - 80) / 4,
    marginBottom: 15,
  },
  selectedCategory: {
    backgroundColor: "#1E90FF",
  },
  selectedCategoryText: {
    color: "#fff",
  },
  categoryText: {
    fontSize: 12,
    marginTop: 5,
    textAlign: "center",
  },
  addCategoryIcon: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
    borderRadius: 15,
    padding: 10,
    width: (Dimensions.get("window").width - 80) / 4,
    borderWidth: 2,
    borderColor: "#1E90FF",
    borderStyle: "dashed",
  },
  saveButton: {
    backgroundColor: "#1E90FF",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  saveButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});