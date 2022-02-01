import React from 'react';
import { render } from '@testing-library/react-native';
import { within } from '@testing-library/react-native';

import RepositoryListContainer from '../components/RepositoryListContainer';

describe('RepositoryList', () => {
	describe('RepositoryListContainer', () => {
		it('renders repository information correctly', () => {
			const repositories = {
				totalCount: 8,
				pageInfo: {
					hasNextPage: true,
					endCursor:
						'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
					startCursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
				},
				edges: [
					{
						node: {
							id: 'jaredpalmer.formik',
							fullName: 'jaredpalmer/formik',
							description: 'Build forms in React, without the tears',
							language: 'TypeScript',
							forksCount: 1619,
							stargazersCount: 21856,
							ratingAverage: 88,
							reviewCount: 3,
							ownerAvatarUrl:
								'https://avatars2.githubusercontent.com/u/4060187?v=4',
						},
						cursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
					},
					{
						node: {
							id: 'async-library.react-async',
							fullName: 'async-library/react-async',
							description: 'Flexible promise-based React data loader',
							language: 'JavaScript',
							forksCount: 69,
							stargazersCount: 1760,
							ratingAverage: 72,
							reviewCount: 3,
							ownerAvatarUrl:
								'https://avatars1.githubusercontent.com/u/54310907?v=4',
						},
						cursor:
							'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
					},
				],
			};

			const { getAllByTestId } = render(
				<RepositoryListContainer repositories={repositories} />
			);

			// Get the repo items now marked with a test id
			const repositoryItems = getAllByTestId('repositoryItem');
			const [firstItem, secondItem] = repositoryItems;

			///// Check values in both repo's

			// Check full name
			expect(within(firstItem).getByTestId('repositoryName')).toHaveTextContent(
				'jaredpalmer/formik'
			);

			expect(
				within(secondItem).getByTestId('repositoryName')
			).toHaveTextContent('async-library/react-async');

			// Check description
			expect(
				within(firstItem).getByTestId('repositoryDescription')
			).toHaveTextContent('Build forms in React, without the tears');

			expect(
				within(secondItem).getByTestId('repositoryDescription')
			).toHaveTextContent('Flexible promise-based React data loader');

			// Check language
			expect(
				within(firstItem).getByTestId('repositoryLanguage')
			).toHaveTextContent('TypeScript');

			expect(
				within(secondItem).getByTestId('repositoryLanguage')
			).toHaveTextContent('JavaScript');

			// Check forks count
			expect(
				within(firstItem).getByTestId('repositoryForks')
			).toHaveTextContent('1.6k');

			expect(
				within(secondItem).getByTestId('repositoryForks')
			).toHaveTextContent('69');

			// Check stargazers count
			expect(
				within(firstItem).getByTestId('repositoryStars')
			).toHaveTextContent('21.9k');

			expect(
				within(secondItem).getByTestId('repositoryStars')
			).toHaveTextContent('1.8k');

			// Check rating
			expect(
				within(firstItem).getByTestId('repositoryRating')
			).toHaveTextContent('88');

			expect(
				within(secondItem).getByTestId('repositoryRating')
			).toHaveTextContent('72');

			// Check review count
			expect(
				within(firstItem).getByTestId('repositoryReviews')
			).toHaveTextContent('3');

			expect(
				within(secondItem).getByTestId('repositoryReviews')
			).toHaveTextContent('3');
		});
	});
});
