import { gql } from '@apollo/client';

// @desc		Login user
// @access		Public
const SIGN_IN = gql`
	mutation SignIn($credentials: AuthenticateInput) {
		authenticate(credentials: $credentials) {
			accessToken
		}
	}
`;

// @desc		Register user
// @access		Public
const SIGN_UP = gql`
	mutation CreateUser($user: CreateUserInput) {
		createUser(user: $user) {
			id
		}
	}
`;

// @desc		Create review
// @access		Private
const CREATE_REVIEW = gql`
	mutation CreateReview($review: CreateReviewInput) {
		createReview(review: $review) {
			repositoryId
		}
	}
`;

// @desc		Delete Review
// @access		Private
const DELETE_REVIEW = gql`
	mutation DeleteReview($deleteReviewId: ID!) {
		deleteReview(id: $deleteReviewId)
	}
`;

export { SIGN_IN, SIGN_UP, CREATE_REVIEW, DELETE_REVIEW };
