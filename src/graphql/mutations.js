import { gql } from '@apollo/client';

const SIGN_IN = gql`
	mutation SignIn($credentials: AuthenticateInput) {
		authenticate(credentials: $credentials) {
			accessToken
		}
	}
`;

const CREATE_REVIEW = gql`
	mutation CreateReview($review: CreateReviewInput) {
		createReview(review: $review) {
			repositoryId
		}
	}
`;

export { SIGN_IN, CREATE_REVIEW };
