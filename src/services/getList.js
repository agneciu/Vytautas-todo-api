export const getList = () => {
  return fetch(
    "https://codeacademy-todo.vercel.app/api/list?user=agneciu"
  ).then((response) => response.json());
};
