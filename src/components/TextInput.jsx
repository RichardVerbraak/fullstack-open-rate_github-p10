import React from 'react';
import { TextInput as NativeTextInput } from 'react-native';

// For styling later
// const styles = StyleSheet.create({});

// Add in the Error prop to conditionally render the input to a red background

const TextInput = ({ style, ...props }) => {
	const textInputStyle = [style];

	return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;
