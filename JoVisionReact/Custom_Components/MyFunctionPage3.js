import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MyFunctionPage3 = (props, ref) => {
  const [name, setName] = useState("name will change here");

  // Use useImperativeHandle to define the methods that can be called on the ref
  useImperativeHandle(ref, () => ({
    openText: (text) => setName(text),
  }));

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
});

// Export the component with forwardRef to allow ref forwarding
export default forwardRef(MyFunctionPage3);
