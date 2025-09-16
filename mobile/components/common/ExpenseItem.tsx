import { Ionicons } from "@expo/vector-icons";
import { View, Text, StyleSheet } from "react-native";

interface Expense {
  icon: string;
  color: string;
  category: string;
  amount: string;
  date: string;
}

export default function ExpenseItem({ expense }: { expense: Expense }) {
  return (
    <View style={styles.expenseItem}>
      {/* Left side: Icon and text */}
      <View style={styles.iconAndTextContainer}>
        <View style={styles.expenseIconCircle}>
          <Ionicons name={expense.icon} size={24} color={expense.color} />
        </View>
        <View style={styles.expenseTextContainer}>
          <Text style={styles.expenseCategory}>{expense.category}</Text>
          <Text style={styles.expenseDate}>{expense.date}</Text>
        </View>
      </View>

      {/* Right side: Amount and icon in a box */}
      <View style={styles.amountBox}>
        <Text style={styles.expenseAmount}>- ${expense.amount}</Text>
        <Ionicons name="arrow-down-sharp" size={16} color="red" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  expenseItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between", 
    backgroundColor: "white",
    padding: 15,
    borderRadius: 15,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 3,
  },
  iconAndTextContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  expenseIconCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#f5f5f5", // Light gray background
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  expenseTextContainer: {
    flexDirection: "column",
  },
  expenseCategory: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
  },
  expenseDate: {
    fontSize: 14,
    color: "gray",
    marginTop: 2,
  },
  amountBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FCE7F3", // Light pink background
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 5,
    gap: 5,
  },
  expenseAmount: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#E53E3E", // Red color
  },
});
