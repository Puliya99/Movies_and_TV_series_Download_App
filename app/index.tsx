import { Link } from "expo-router";
import React, { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, TextInput, Image, TouchableOpacity, Button } from "react-native";

export default function LoginScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Image source={require("@/assets/images/baiscope.png")} style={styles.logo} />
      
      <Text style={styles.welcomeText}>Welcome back</Text>
      <Text style={styles.signInText}>Sign in to continue</Text>

      <SafeAreaView>
        <TextInput
          style={styles.input}
          placeholder="User Name"
          onChangeText={setUsername}
          value={username}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          onChangeText={setPassword}
          secureTextEntry
          value={password}
        />
      </SafeAreaView>

      <View style={styles.loginButton}>
        <Button
          onPress={() => alert('Login')}
          title="LOGIN"
          color="#841584"
        />
      </View>

      <Link href="/forget">
        <Text style={styles.forgotPasswordText}>Forget password?</Text>
      </Link>

      <TouchableOpacity onPress={() => alert('Register')}>
        <Text style={styles.registerText}>Don't have an account yet? Register</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#323232',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    width: 200,
    height: 124,
    alignSelf: 'center',
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: 'white',
  },
  signInText: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
    color: 'gray',
  },
  input: {
    height: 40,
    width: 270,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 30,
    padding: 10,
    borderRadius: 5,
    backgroundColor: 'white',
  },
  forgotPasswordText: {
    textAlign: 'center',
    color: '#00008b',
    marginTop: 10,
  },
  registerText: {
    textAlign: 'center',
    color: '#00008b',
    marginTop: 20,
  },
  loginButton: {
    marginTop: 10,
    marginBottom: 20,
    width: 100,
  },
});
