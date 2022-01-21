// Our "Global styles" to pull from (think Sass Variables)

import { Platform } from 'react-native';

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

export default theme;
