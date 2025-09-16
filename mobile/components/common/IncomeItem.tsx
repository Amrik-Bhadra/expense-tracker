import { Ionicons } from "@expo/vector-icons";
import { View, Text, StyleSheet } from "react-native";
import { FC } from "react";

type IoniconsName = React.ComponentProps<typeof Ionicons>["name"];

interface Income {
  icon: IoniconsName;
  color: string;
  source: string;
  amount: string;
  date: string;
}

const IncomeItem: FC<{ income: Income }> = ({ income }) => {
  return (
    <View style={styles.incomeItem}>
      <View style={styles.iconAndTextContainer}>
        <View style={styles.incomeIconCircle}>
          <Ionicons name={income.icon} size={24} color={income.color} />
        </View>
        <View style={styles.incomeTextContainer}>
          <Text style={styles.incomeSource}>{income.source}</Text>
          <Text style={styles.incomeDate}>{income.date}</Text>
        </View>
      </View>
      <View style={styles.amountBox}>
        <Text style={styles.incomeAmount}>+ ${income.amount}</Text>
        <Ionicons name="arrow-up-sharp" size={16} color="#4CAF50" />
      </View>
    </View>
  );
};

export default IncomeItem;

const styles = StyleSheet.create({
  incomeItem: {
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
  incomeIconCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#f5f5f5",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  incomeTextContainer: {
    flexDirection: "column",
  },
  incomeSource: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
  },
  incomeDate: {
    fontSize: 14,
    color: "gray",
    marginTop: 2,
  },
  amountBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E8F5E9",
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 5,
    gap: 5,
  },
  incomeAmount: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#4CAF50",
  },
});