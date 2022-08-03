export const getGifs = async ( category ) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=9hauxEaTOpp7NWbgMaoqaV1uOzxHn1YA&q=${category}&limit=5`;

  const response = await fetch(url);

  const { data } = await response.json();

  return data;
}