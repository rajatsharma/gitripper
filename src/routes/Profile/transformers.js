import _ from 'lodash'

export const basicProfileTransformer = profile => ({
  login: profile.login,
  name: profile.name,
  company: profile.company || '',
  bio: profile.bio || '',
  avatar: profile.avatar_url,
  repos: profile.public_repos,
  followers: profile.followers,
  following: profile.following,
  url: profile.html_url
})

export const languageMiner = repos => {
  let languagesCount = _.countBy(repos, (x) => x.language)
  return Object.keys(languagesCount).map(x => ({ language: x, count: languagesCount[x] }))
  .sort((a, b) => b.count - a.count).shift().language
}
