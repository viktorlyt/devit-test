import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: '500',
    color: "#1F1D1D",
  },
});
