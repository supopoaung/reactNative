import React, {Component} from 'react';
import { Text, View, StyleSheet, FlatList, Image } from 'react-native';
import Constants from 'expo-constants';


export default class Test extends Component{
  constructor (){
    super()
    this.state = {
      dataSource: []
    }
  }
  renderItem = ({item}) => {
    return (
       <View style = {{flex:1, flexDirection: 'row'}} >
      <Image style={{width: 100, height: 100}}
      source={{uri: item.url}}
      />
      <View style={{flex:1, justifyContent: 'center'}}>
        <Text>
          {item.weight}
        </Text>
      </View>
    </View>
    )
   
  }
  
 componentDidMount(){
   fetch("https://api.thedogapi.com/v1/images/search?limit=10")
   .then (response => response.json())
   .then (responseJson => {
       this.setState({
          dataSource: responseJson.breeds
        })
    })
    .catch(err=> {
        throw Error(err.message)
      });
 } 


  render(){
    return (
      <View style={styles.container}>
        <FlatList
          data = {this.state.dataSource}
          renderItem = {this.renderItem}
        />
      </View>
    );
  
  }

}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  
});
