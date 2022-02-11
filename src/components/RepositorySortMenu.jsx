import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { Menu, Button } from 'react-native-paper';

const styles = StyleSheet.create({
	menuContainer: {
		paddingVertical: 30,
		flexDirection: 'row',
		justifyContent: 'center',
	},
});

const RepositorySortMenu = () => {
	const [visible, setVisible] = useState(false);
	const [sortOption, setSortOpion] = useState('Latest repositories');

	const openMenu = () => {
		setVisible(true);
	};

	const closeMenu = () => {
		setVisible(false);
	};

	// Anchor should show the current menu option
	return (
		<View style={styles.menuContainer}>
			<Menu
				visible={visible}
				onDismiss={closeMenu}
				anchor={<Button onPress={openMenu}>{sortOption}</Button>}
			>
				<Menu.Item title='test' />
			</Menu>
		</View>
	);
};

export default RepositorySortMenu;
