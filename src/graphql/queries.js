import { gql } from '@apollo/client';

const GET_REPOSITORIES = gql`
	query getRepositories {
		repositories {
			edges {
				node {
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

export { GET_REPOSITORIES };
