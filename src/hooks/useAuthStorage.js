import { useContext } from 'react';
import AuthStorageContext from '../contexts/AuthStorageContext';

const useAuthStorage = () => {
	const authStorage = useContext(AuthStorageContext);

	return authStorage;
};

export default useAuthStorage;
