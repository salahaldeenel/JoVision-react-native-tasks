import React from 'react';
import { TouchableOpacity, Text, Alert } from 'react-native';

const MyButton = ({onPress}) => {
  
  return (
    <TouchableOpacity onPress={onPress} style={{ width: 15, height: 15, backgroundColor: 'red', position:'absolute' ,right:-5,top:-1 }}>
      <Text>x</Text>
    </TouchableOpacity>
  );
};

export default MyButton;