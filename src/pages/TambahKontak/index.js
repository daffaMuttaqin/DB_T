import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'

export default class TambahKontak extends Component {
  render() {
    return (
      <View style={styles.pages}>
        <Text>TambahKontak</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    pages: {
        flex: 1,
        padding: 30
    }
})