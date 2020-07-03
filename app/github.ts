import { Octokit } from '@octokit/rest';

const github = new Octokit({ auth: process.env.GITHUB_ACCESS_TOKEN });

/**
 * Fetch the given list of GitHub repositories.
 *
 * @param repositories - A list of reposiories ['owner/name', ...]
 */
export async function getRepositories(repositories: string[]) {
  return Promise.all(repositories.map(getRepository));
}

/**
 * Fetch the given GitHub repository.
 *
 * @param repository - e.g. 'owner/name'
 */
export async function getRepository(repository) {
  const [owner, repo] = repository.split('/');

  return github.repos.get({ owner, repo });
}
