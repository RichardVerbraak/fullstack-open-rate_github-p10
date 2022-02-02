import { render, fireEvent, waitFor } from '@testing-library/react-native';
// ...

describe('SignIn', () => {
	describe('SignInContainer', () => {
		it('calls onSubmit function with correct arguments when a valid form is submitted', async () => {
			// render the SignInContainer component, fill the text inputs and press the submit button

			// fire the submit even
			// fireEvent(submitButton)

			await waitFor(() => {
				// expect the onSubmit function to have been called once and with a correct first argument
				// expect(submitButton).toHaveBeenCalled(1)
			});
		});
	});
});
