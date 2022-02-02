import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import SignInContainer from '../components/SignInContainer';
// ...

describe('SignIn', () => {
	describe('SignInContainer', () => {
		it('calls onSubmit function with correct arguments when a valid form is submitted', async () => {
			// 'Spy' on the onSubmit button by creating a mock
			const onSubmit = jest.fn();

			// Render the component with the mocked function
			const { getByText, getByPlaceholderText } = render(
				<SignInContainer onSubmit={onSubmit} />
			);

			// Change the text and press submit
			fireEvent.changeText(getByPlaceholderText('Username'), 'kalle');
			fireEvent.changeText(getByPlaceholderText('Password'), 'password');
			fireEvent.press(getByText('Sign In'));

			await waitFor(() => {
				// expect the onSubmit function to have been called once and with a correct first argument
				expect(onSubmit).toHaveBeenCalledTimes(1);

				// Formiks submission handler receives the forms values
				// and a 'FormikBag' which is an object with a bunch of methods and any props that were passed in
				// So to check if our values are passed in correctly we have to access the array [0] and then the first obj of that array [0]
				// [0][1] would be the FormikBag
				expect(onSubmit.mock.calls[0][0]).toEqual({
					username: 'kalle',
					password: 'password',
				});
			});
		});
	});
});
