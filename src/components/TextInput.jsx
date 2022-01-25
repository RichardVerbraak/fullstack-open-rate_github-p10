import React from 'react';
import { StyleSheet, TextInput as NativeTextInput } from 'react-native';

// For styling later
const styles = StyleSheet.create({
	errorinput: {
		borderColor: '#d73a4a',
	},
});

// Add in the Error prop to conditionally render the input to a red background

const TextInput = ({ style, error, ...props }) => {
	const textInputStyle = [style, error && styles.errorinput];

	return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;
