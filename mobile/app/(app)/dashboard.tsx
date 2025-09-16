import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { dummyExpenses } from "@/constants/dummyData";
import ExpenseItem from "@/components/common/ExpenseItem";

interface BalanceSummaryProps {
  iconName: string;
  type: string;
  amount: string;
}

export default function DashboardScreen() {
  const BalanceSummary = ({ iconName, type, amount }: BalanceSummaryProps) => (
    <View style={styles.balanceSummaryItem}>
      <View style={styles.summaryIconContainer}>
        <View style={styles.summaryIconCircle}>
          <Ionicons name={iconName} size={18} color="white" />
        </View>
        <Text style={styles.summaryType}>{type}</Text>
      </View>
      <Text style={styles.summaryAmount}>${amount}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Header Section */}
        <View style={styles.headerContainer}>
          <View style={styles.headerLeft}>
            <Image
              source={{ uri: "https://placehold.co/100x100/png" }}
              style={styles.profileImage}
            />
            <View style={styles.textContainer}>
              <Text style={styles.greetingText}>Good Morning</Text>
              <Text style={styles.nameText}>Amrik Bhadra</Text>
            </View>
          </View>
        </View>

        {/* Total Balance Card */}
        <View style={styles.balanceCard}>
          <View style={styles.balanceCardHeader}>
            <Text style={styles.balanceTitle}>Total Balance</Text>
            <Text style={styles.totalBalanceAmount}>$2,548.00</Text>
          </View>

          <View style={styles.balanceSummaryContainer}>
            <BalanceSummary
              iconName="arrow-down-sharp"
              type="Income"
              amount="10,840.00"
            />
            <BalanceSummary
              iconName="arrow-up-sharp"
              type="Expenses"
              amount="1,884.00"
            />
          </View>
        </View>

        {/* Recent Expenses Section */}
        <View style={styles.recentExpensesContainer}>
          <View style={styles.recentHeader}>
            <Text style={styles.recentTitle}>Recent Expenses</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>see all</Text>
            </TouchableOpacity>
          </View>

          {/* Expense List - Using dummy data */}
          {dummyExpenses.map((expense, index) => (
            <ExpenseItem key={index} expense={expense} />
          ))}
        </View>

        {/* Create pichart for category vise expnse */}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5", // Light gray background
  },
  scrollContent: {
    paddingBottom: 20,
  },
  headerContainer: {
    // backgroundColor: "#1E90FF", // The primary blue color
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between", // Pushes content to the sides
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  headerRight: {},
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: "#1E90FF",
  },
  textContainer: {
    flexDirection: "column",
  },
  greetingText: {
    fontSize: 16,
    color: "#464646",
  },
  nameText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333333",
  },
  periodButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 8,
    gap: 5,
  },
  periodText: {
    fontWeight: "600",
  },
  balanceCard: {
    backgroundColor: "#1E90FF",
    padding: 20,
    marginHorizontal: 16,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
    display: "flex",
    flexDirection: "column",
    gap: 8,
  },
  balanceCardHeader: {
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 2,
  },
  balanceTitle: {
    color: "#e0e0e0",
    fontSize: 16,
  },
  totalBalanceAmount: {
    fontSize: 36,
    fontWeight: "bold",
    color: "white",
  },
  balanceSummaryContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  balanceSummaryItem: {
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 10,
    // borderColor: 'white',
    // borderWidth: 1,
  },
  summaryIconContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 8,
  },
  summaryIconCircle: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderRadius: 20,
    padding: 8,
  },
  summaryType: {
    color: "#e0e0e0",
    fontSize: 15,
    fontWeight: "medium",
  },
  summaryAmount: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
  recentExpensesContainer: {
    marginTop: 25,
    paddingHorizontal: 15,
  },
  recentHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  recentTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  seeAllText: {
    color: "#5a67d8",
    fontWeight: "600",
  },
});
