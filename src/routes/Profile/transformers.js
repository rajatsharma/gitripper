export const basicProfileTransformer = profile => ({
  login: profile.login,
  name: profile.name,
  company: profile.company || '',
  bio: profile.bio || '',
  avatar:profile.avatar_url,
  repos:profile.public_repos,
  followers:profile.followers,
  following:profile.following,
  url:profile.html_url
})
