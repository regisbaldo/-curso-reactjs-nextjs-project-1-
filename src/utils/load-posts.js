export const loadPosts = async () => {
  const postPromise = fetch('https://jsonplaceholder.typicode.com/posts');
  const photosPromise = fetch('https://jsonplaceholder.typicode.com/photos');

  let [posts, photos] = await Promise.all([postPromise, photosPromise]);
  posts = await posts.json();
  photos = await photos.json();

  posts = posts.map((post, index) => {
    return {
      ...post,
      url: photos[index].url,
    };
  });
  return posts;
};
