import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { Menu, Button } from 'react-native-paper';

const styles = StyleSheet.create({});

const RepositorySortMenu = () => {
	const [visible, setVisible] = useState(false);

	const openMenu = () => {
		setVisible(true);
	};

	const closeMenu = () => {
		setVisible(false);
	};

	return (
		<View>
			<Menu
				visible={visible}
				onDismiss={closeMenu}
				anchor={<Button onPress={openMenu}>Show Menu</Button>}
			>
				<Menu.Item title='test' />
			</Menu>
		</View>
	);
};

export default RepositorySortMenu;
