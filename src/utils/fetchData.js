export const fetchData = async (cmntId) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${cmntId}/comments`
  );

  return response.json();
};
