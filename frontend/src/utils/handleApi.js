import axios from "axios";

const baseUrl = "http://localhost:3001";

const getAll = (setTodo) => {
  axios.get(baseUrl).then(({ data }) => {
    console.log("data ---> ", data);
    setTodo(data);
  });
};

export { getAll };
