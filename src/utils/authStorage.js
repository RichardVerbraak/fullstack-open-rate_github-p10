import AsyncStorage from '@react-native-async-storage/async-storage';

// Note: AsyncStorage was also working without the use of async/await somehow
class AuthStorage {
	constructor(namespace = 'auth') {
		this.namespace = namespace;
	}

	async getAccessToken() {
		const token = await AsyncStorage.getItem(`${this.namespace}:token`);
		return JSON.parse(token);
	}

	async setAccessToken(accessToken) {
		await AsyncStorage.setItem(
			`${this.namespace}:token`,
			JSON.stringify(accessToken)
		);
	}

	async removeAccessToken() {
		await AsyncStorage.removeItem(`${this.namespace}:token`);
	}
}

export default AuthStorage;
