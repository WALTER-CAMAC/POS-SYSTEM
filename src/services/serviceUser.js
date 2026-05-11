import axios from "axios";

const URL = "http://localhost:3001/persons";

let token = null;

const setToken = (newToken) => {
  token = `Bearer ${newToken}`;
};

const getAll = () => {
  const request = axios.get(URL);
  return request.then((resp) => resp.data);
};

const getId = (id) => {
  const request = axios.get(`${URL}/${id}`);
  return request.then((response) => response.data);
};
const postUser = (newPerson) => {
  const config = {
    headers: { Authorization: token },
  };
  const request = axios.post(URL, newPerson, config);
  return request.then((response) => response.data);
};
const deleteUser = (id) => {
  const config = {
    headers: { Authorization: token },
  };
  const request = axios.delete(`${URL}/${id}`, config);
  return request.then((response) => response);
};
const putUser = (id, modify) => {
  const config = {
    headers: { Authorization: token },
  };
  const request = axios.put(`${URL}/${id}`, modify, config);
  return request.then((respon) => respon.data);
};
export default {
  getAll,
  postUser,
  deleteUser,
  putUser,
  getId,
  setToken,
};
