// all ideas
export const getAllIdeas = async (search = "", category = "") => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/ideas?search=${search}&category=${category}`,
  );
  const data = await res.json();
  return data;
};

// idea categories

export const getIdeaCategories = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/idea-categories`,
  );
  const data = await res.json();
  return data;
};
// get user ideas

export const getMyIdeas = async (userId) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/my-ideas/${userId}`,
  );
  const data = await res.json();
  return data;
};
// get single idea

export const getSingleIdea = async (id) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/ideas/${id}`, {
    headers: {
      authorization: "logged in",
    },
  });
  const data = await res.json();
  return data;
};

// get idea comments

export const getIdeaComments = async (ideaId) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/comments/idea/${ideaId}`,
  );
  const data = await res.json();
  return data;
};
// get user comments

export const getUserComments = async (userId) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/comments/user/${userId}`,
  );
  const data = await res.json();
  return data;
};
