export const fetchUser = async () => {
  const res = await fetch("https://randomuser.me/api/?results=1&nat=us");
  const data = await res.json();
  return data;
};
