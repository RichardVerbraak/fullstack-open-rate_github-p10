import { gql } from '@apollo/client';

const GET_REPOSITORIES = gql`
	query getRepositories {
		repositories {
			edges {
				node {
					id
					name
					fullName
					reviewCount
					ratingAverage
					stargazersCount
					forksCount
					language
					description
					ownerAvatarUrl
				}
			}
		}
	}
`;

const GET_SINGLE_REPO = gql`
	query getSingleRepo($repositoryId: ID!) {
		repository(id: $repositoryId) {
			fullName
			name
			fullName
			reviewCount
			ratingAverage
			stargazersCount
			forksCount
			language
			description
			ownerAvatarUrl
		}
	}
`;

// Query to check if the user is authenticated, will return null for both fields if there is no token
const GET_USER = gql`
	query getUser {
		me {
			id
			username
		}
	}
`;

export { GET_REPOSITORIES, GET_SINGLE_REPO, GET_USER };
