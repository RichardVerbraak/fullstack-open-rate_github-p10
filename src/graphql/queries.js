import { gql } from '@apollo/client';

// CREATED_AT or RATING_AVERAGE
// ASC or DESC
// repositories(orderBy: $orderBy, orderDirection: $orderDirection)

const GET_REPOSITORIES = gql`
	query getRepositories(
		$orderBy: AllRepositoriesOrderBy
		$orderDirection: OrderDirection
		$searchKeyword: String
		$first: Int
		$after: String
	) {
		repositories(
			orderBy: $orderBy
			orderDirection: $orderDirection
			searchKeyword: $searchKeyword
			first: $first
			after: $after
		) {
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
				cursor
			}
			pageInfo {
				endCursor
				startCursor
				hasNextPage
			}
		}
	}
`;

const GET_SINGLE_REPO = gql`
	query getSingleRepo($repositoryId: ID!, $first: Int, $after: String) {
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
			reviews(first: $first, after: $after) {
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
					cursor
				}
				pageInfo {
					endCursor
					startCursor
					hasNextPage
				}
			}
		}
	}
`;

// Query to check if the user is authenticated, will return null for both fields if there is no token
// The includes directive is there to only query for the review data if asked for (when visiting the logged in users reviews page)
const GET_USER = gql`
	query getUser($includeReviews: Boolean = false) {
		me {
			id
			username
			reviews @include(if: $includeReviews) {
				edges {
					node {
						id
						text
						rating
						createdAt
					}
				}
			}
		}
	}
`;

export { GET_REPOSITORIES, GET_SINGLE_REPO, GET_USER };
