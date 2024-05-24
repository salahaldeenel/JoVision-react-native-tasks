import React from 'react';
import { TouchableOpacity, Text, Alert } from 'react-native';

const RepeatButton = ({onPress}) => {
  
  return (
    <TouchableOpacity onPress={onPress} style={{ width: 15, height: 15, backgroundColor: 'blue', position:'absolute' ,left:-5,top:-1 }}>
      <Text>x</Text>
    </TouchableOpacity>
  );
};

export default RepeatButton;