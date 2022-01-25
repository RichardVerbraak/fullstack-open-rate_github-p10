import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import theme from '../theme.js';
import AppBarTab from './AppBarTab.jsx';
import { ScrollView } from 'react-native';

const styles = StyleSheet.create({
	container: {
		paddingTop: Constants.statusBarHeight,
		backgroundColor: theme.colors.primary,

		opacity: 0.95,
	},

	contentContainer: {
		display: 'flex',
		flexDirection: 'row',

		paddingVertical: 17.5,
		paddingHorizontal: 7.5,
	},
	text: {
		fontWeight: 'bold',
		fontSize: theme.fontSizes.subheading,
		color: '#fff',

		padding: 12.5,
	},
});

const AppBar = () => {
	return (
		<View style={styles.container}>
			<ScrollView
				contentContainerStyle={styles.contentContainer}
				horizontal={true}
			>
				<AppBarTab title={'Repositories'} url={'/'} text={styles.text} />
				<AppBarTab title={'Sign In'} url={'/login'} text={styles.text} />
			</ScrollView>
		</View>
	);
};

export default AppBar;
