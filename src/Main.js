import React, {Component} from 'react';

import {
  PropTypes,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

export class Main extends Component {
  openDrawer111 = () => {
    console.log('-----------------------------------');
    this.props.openDrawer();
  };

  render() {
    const {openDrawer} = this.props;
    return (
      <ScrollView style={styles.container}>
        <Text>MAIN</Text>
        <TouchableOpacity style={styles.button} onPress={this.openDrawer111}>
          <Text>Open awadhesh</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#7699dd',
    padding: 20,
    flex: 1,
  },
  button: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
  },
});
