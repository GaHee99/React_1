import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Pressable,
  TextInput,
} from 'react-native'

import { theme } from './colors'

export default function App() {
  const [working, setWorking] = useState(true)
  const [text, setText] = useState('')
  const work = () => setWorking(true)
  const travel = () => setWorking(false)
  const onChangeText = (payload) => setText(payload)
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={work}>
          <Text
            style={{ ...styles.btnText, color: working ? 'white' : theme.gray }}
          >
            Work
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={travel}>
          <Text
            style={{
              ...styles.btnText,
              color: !working ? 'white' : theme.gray,
            }}
          >
            Travel
          </Text>
        </TouchableOpacity>
      </View>
      <TextInput
        onChangeText={onChangeText}
        value={text}
        style={styles.input}
        placeholder={working ? 'Add a To do' : ' Where you want to go?'}
        returnKeyType="send"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.bg,
    paddingHorizontal: 20,
  },
  header: {
    marginTop: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btnText: {
    color: 'white',
    fontSize: 38,
    fontWeight: '600',
  },

  input: {
    //height 쓰면 안된다.
    //글씨가 안먹힘..ㅅㅂ..
    backgroundColor: 'white',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 30,
    marginTop: 20,
    fontSize: 18,
  },
  //heght 떄문에 작동 x
  Enput: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
})
