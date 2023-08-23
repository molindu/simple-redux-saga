import React, { useState } from 'react';
import { TextInput, Button, View } from 'react-native';
import { connect } from 'react-redux';
import { setValue } from './actions';

const ValueInput = ({ setValue }) => {
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');

  const handleSave = () => {
    setValue(value1, value2);
    setValue1('');
    setValue2('');
  };

  return (
    <View>
      <TextInput
        placeholder="Enter Value 1"
        value={value1}
        onChangeText={setValue1}
      />
      <TextInput
        placeholder="Enter Value 2"
        value={value2}
        onChangeText={setValue2}
      />
      <Button title="Save" onPress={handleSave} />
    </View>
  );
};

const mapDispatchToProps = {
  setValue,
};

export default connect(null, mapDispatchToProps)(ValueInput);
