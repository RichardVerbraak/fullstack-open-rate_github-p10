import { StyleSheet, Text, Pressable } from 'react-native';
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

const RepositorySortMenu = ({ refetch }) => {
	const [sortOption, setSortOption] = useState('Latest repositories');
	const [visible, setVisible] = useState(false);

	const openMenu = () => {
		setVisible(true);
	};

	const closeMenu = () => {
		setVisible(false);
	};

	// Anchor should show the current menu option
	return (
		<Pressable style={styles.menuContainer}>
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
				<Menu.Item title='Select an item...' disabled />
				<Menu.Item
					title='Latest repositories'
					onPress={() => {
						setSortOption('Latest repositories');
						// Close menu after picking?
						refetch({ orderBy: 'CREATED_AT', orderDirection: 'ASC' });
					}}
				/>
				<Menu.Item
					title='Highest rated repositories'
					onPress={() => {
						setSortOption('Highest rated repositories');
						refetch({
							orderBy: 'RATING_AVERAGE',
							orderDirection: 'DESC',
						});
					}}
				/>
				<Menu.Item
					title='Lowest rated repositories'
					onPress={() => {
						setSortOption('Lowest rated repositories');
						refetch({
							orderBy: 'RATING_AVERAGE',
							orderDirection: 'ASC',
						});
					}}
				/>
			</Menu>
		</Pressable>
	);
};

export default RepositorySortMenu;
