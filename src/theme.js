// Our "Global styles" to pull from (think Sass Variables)

import { Platform } from 'react-native';

// ### Base Typography
const theme = {
	colors: {
		textPrimary: '#24292e',
		textSecondary: '#586069',
		primary: '#24292e',
		secondary: '#0366d6',
	},
	fontSizes: {
		body: 14,
		subheading: 16,
	},
	fonts: {
		main: Platform.select({
			android: 'Roboto',
			ios: 'Arial',
			default: 'System',
		}),
	},
	fontWeights: {
		normal: '400',
		bold: '700',
	},
};

// ### Form Styles
const formStyles = {
	formContainer: {
		display: 'flex',
		justifyContent: 'space-around',

		backgroundColor: '#fff',

		height: 500,
		width: '100%',

		marginLeft: 'auto',
		marginRight: 'auto',
		padding: 30,
	},

	input: {
		paddingHorizontal: 20,
		paddingVertical: 10,

		borderColor: theme.colors.textSecondary,
		borderStyle: 'solid',
		borderWidth: 0.5,
		borderRadius: 5,
	},

	button: {
		backgroundColor: theme.colors.secondary,
		color: '#fff',
		fontWeight: theme.fontWeights.bold,
		textAlign: 'center',

		marginTop: 10,

		paddingVertical: 20,

		borderRadius: 5,
	},
};

export { theme, formStyles };
