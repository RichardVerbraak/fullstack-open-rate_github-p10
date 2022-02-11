import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { Menu, Button } from 'react-native-paper';

const styles = StyleSheet.create({
	menuContainer: {
		display: 'flex',
		justifyContent: 'space-between',

		paddingVertical: 30,
		flexDirection: 'row',
	},

	button: {
		display: 'flex',
		justifyContent: 'space-around',
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
				anchor={
					<>
						<Button onPress={openMenu} style={styles.button}>
							{sortOption} <Text>&#9660;</Text>
						</Button>
					</>
				}
			>
				<Menu.Item title='test' />
			</Menu>
		</View>
	);
};

export default RepositorySortMenu;
