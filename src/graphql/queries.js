import { gql } from '@apollo/client';

const GET_REPOSITORIES = gql`
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
    `;

export { GET_REPOSITORIES };
