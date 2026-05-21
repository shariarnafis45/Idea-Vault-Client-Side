// all ideas
export const getAllIdeas = async () => {
  const res = await fetch(`${process.env.SERVER_URL}/ideas`);
  const data = await res.json();
  return data;
};

// idea categories 

export const getIdeaCategories = async () => {
  const res = await fetch(`${process.env.SERVER_URL}/idea-categories`);
  const data = await res.json();
  return data;
};
