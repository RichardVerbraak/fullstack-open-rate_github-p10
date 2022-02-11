import { gql } from '@apollo/client';

// CREATED_AT or RATING_AVERAGE
// ASC or DESC
// repositories(orderBy: $orderBy, orderDirection: $orderDirection)

const GET_REPOSITORIES = gql`
	query getRepositories(
		$orderBy: AllRepositoriesOrderBy
		$orderDirection: OrderDirection
	) {
		repositories(orderBy: $orderBy, orderDirection: $orderDirection) {
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
			id
			url
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
			reviews {
				edges {
					node {
						id
						text
						rating
						createdAt
						user {
							id
							username
						}
					}
				}
			}
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
