import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

const DisplayComponent = ({ value1, value2 }) => {
  return (
    <View>
      <Text>Value 1: {value1}</Text>
      <Text>Value 2: {value2}</Text>
    </View>
  );
};

const mapStateToProps = (state) => ({
  value1: state.value1,
  value2: state.value2,
});

export default connect(mapStateToProps)(DisplayComponent);
