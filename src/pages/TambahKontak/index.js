import { Text, StyleSheet, View, TextInput } from 'react-native'
import React, { Component } from 'react'
import { InputData } from '../../components'

export default class TambahKontak extends Component {
  render() {
    return (
      <View style={styles.pages}>
        <InputData label="Nama" placeholder="Masukkan Nama" />

        <InputData label="No. HP" placeholder="Masukkan No. HP" keyboardType="number-pad"/>
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