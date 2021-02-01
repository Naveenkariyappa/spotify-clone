import makeRequest from '../api/makeRequest'

export async function fetchAllDAta() {;
  try {
      let [newReleases, playlists, categories] = await Promise.all([getNewReleases(), getPlaylists(), getCategories()]);
      return {newReleases, playlists, categories}
  } catch (err) {
      console.log('Fail >>', err);
  }
}

export const getNewReleases = () => {
 return makeRequest('new-releases')
}

export const getPlaylists = () => {
  return makeRequest('featured-playlists')
}

export const getCategories = () => {
  return makeRequest('categories')
}