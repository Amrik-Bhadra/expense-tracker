import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  Alert,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link } from "expo-router";

// data validation schema
const loginSchema = yup.object().shape({
  email: yup.string().email("Invalid Email").required("Email is required"),
  password: yup.string().required("Password is required"),
});

export default function LoginScreen() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
    defaultValues: { email: "", password: "" },
  });

  const onSubmit = (data: any) => {
    console.log("Login Data:", data);
    Alert.alert("Login Successful!");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Log In</Text>
      <Controller
        control={control}
        name="email"
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Email"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        )}
      />
      {errors.email && (
        <Text style={styles.errorText}>{errors.email.message}</Text>
      )}

      <Controller
        control={control}
        name="password"
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Password"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            secureTextEntry
          />
        )}
      />
      {errors.password && (
        <Text style={styles.errorText}>{errors.password.message}</Text>
      )}

      <Pressable style={styles.button} onPress={handleSubmit(onSubmit)}>
        <Text style={styles.buttonText}>Log In</Text>
      </Pressable>

      <Link href="/(auth)/register" asChild>
        <Pressable style={styles.linkButton}>
          <Text style={styles.linkText}>Dont have an account? Register</Text>
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  input: {
    width: "100%",
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  button: {
    width: "100%",
    height: 50,
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: { color: "white", fontSize: 18 },
  errorText: {
    color: "red",
    alignSelf: "flex-start",
    marginLeft: 20,
    marginBottom: 5,
  },
  linkButton: { marginTop: 20 },
  linkText: { color: "blue", textDecorationLine: "underline" },
});
