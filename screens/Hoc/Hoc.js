import React from 'react';
import {View, StyleSheet, Platform} from 'react-native';
import { StatusBar } from 'expo-status-bar';

const Hoc  = (WrappedComponent) => {
  class HigherComponent extends React.Component {
      
    render() {
      return (
          <View style={styles.container} >
            <WrappedComponent {...this.props}/>
            <StatusBar style="auto" />
          </View>
      )
    }
  }
  return HigherComponent
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 20,
      backgroundColor: 'rgba(255, 255, 255, .7)'
    },
  });

export default Hoc;