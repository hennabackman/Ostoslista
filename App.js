import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';

const App = () => {
  const [items, setItems] = useState([]);
  const [text, setText] = useState('');

  const addItem = () => {
    setItems([...items, { key: items.length.toString(), value: text }]);
    setText('');
  };

  const clearList = () => {
    setItems([]);
  };
  const Header = () => {
    return (
        <Text style={styles.headerText}>Shopping List</Text>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Add item"
          onChangeText={text => setText(text)}
          value={text}
          style={styles.input}
        />
        </View>
        <View style={styles.buttonContainer}>
        <Button style={styles.button}
        title="Add" 
        onPress={addItem} 
        />
        <Button style={styles.button}
        title="Clear" 
        onPress={clearList} 
        />
        </View>
      <FlatList style={styles.headertext}
        ListHeaderComponent={<Header/>}
        data={items}
        renderItem={({ item }) => <Text style={styles.item}>{item.value}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    flex: 1,
    padding: 20
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    marginRight: 10
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44
  },
  buttonContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 10
  },
  button: {
    margin: 10,
    width: '50%',
    alignSelf: 'center'
  },
  headertext: {
    margin: 20,
    fontSize: 20,
    alignSelf:'center'
  },
});
export default App;
