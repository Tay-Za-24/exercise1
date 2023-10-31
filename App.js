import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, TextInput, View, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function App() {
  const [text, setText] = React.useState('');
  const [searchText, setSearchText] = React.useState('');

  const handleTextChange = (newText) => {
    setText(newText);
    setSearchText(newText);
  };

  const clearSearchText = () => {
    setText('');
    setSearchText('');
  };

  return (
    <View style={styles.container}>
      {/* Text Input */}
      <View style={styles.search_bar}>
        <TextInput 
          style={styles.input} 
          value={text}
          onChangeText={handleTextChange}
          placeholder="Search..."
        />
        {searchText.length > 0 && (
          <Ionicons
            style={styles.icon}
            name='close-outline'
            size={25}
            onPress={clearSearchText}
          />
        )}
      </View>

      {/* Categories */}
      <Text>Categories</Text>
      <View style={styles.box_container}>
        <ScrollView horizontal={true}>
          <View style={[styles.box, { backgroundColor: '#f4f1de' }]}>
            <Text>Category</Text>
          </View>
          <View style={[styles.box, { backgroundColor: '#e07a5f' }]}>
            <Text>Category</Text>
          </View>
          <View style={[styles.box, { backgroundColor: '#81b29a' }]}>
            <Text>Category</Text>
          </View>
          <View style={[styles.box, { backgroundColor: '#f2cc8f' }]}>
            <Text>Category</Text>
          </View>
        </ScrollView>
      </View>

      {/* posts */}
      <Text>Posts</Text>
      <ScrollView>
      <View style={[styles.post, { backgroundColor: '#a8dadc' }]}>
        <Image style={styles.image} source={require('./assets/images/light-blue.png')}/>
        <Text>Post 1</Text>
      </View>
        <View style={[styles.post, { backgroundColor: '#f4f1de' }]}>
          <Image style={styles.image} source={require('./assets/images/gold.png')}/>
          <Text>Post 2</Text>
        </View>
        <View style={[styles.post, { backgroundColor: '#457b9d' }]}>
          <Image style={styles.image} source={require('./assets/images/purple.png')}/>
          <Text>Post 3</Text>
        </View>
        <View style={[styles.post, { backgroundColor: '#F27EAC' }]}>
          <Image style={styles.image} source={require('./assets/images/pink.png')}/>
          <Text>Post 4</Text>
        </View>
        <View style={[styles.post, { backgroundColor: '#F05D5D' }]}>
          <Image style={styles.image} source={require('./assets/images/red.png')}/>
          <Text>Post 5</Text>
        </View>
        <View style={[styles.post, { backgroundColor: '#8DD9F9' }]}>
          <Image style={styles.image} source={require('./assets/images/blue.png')}/>
          <Text>Post 6</Text>
        </View>
      </ScrollView>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingLeft: 30,
  },

  search_bar: {
    flexDirection: 'row',
  },

  icon: {
    position: 'absolute',
    right: 70,
    top: 5,
    color: '#0d1321',
  },

  input: {
    height: 40,
    width: 300,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },

  box: {
    width: 100,
    height: 50,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'center',
    paddingLeft: 10,
    marginTop: 10,
    marginRight: 10,
  },

  box_container: {
    flexDirection: 'row',
    marginBottom: 10,
  },

  post: {
    height: 180,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
    marginRight: 10,
  },

  image:{
    width:340,
    height:130,
    borderRadius:5,
    marginTop:5,
    marginBottom: 5,

  }
});
