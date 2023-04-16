import axios from "./customize-axios";

const fetchFoodHistory = (id, date, title, image) => {
  return axios.get(`/food-history`, { id, date, title, image });
};

const fetchComponentRecord = (id, title, button, image) => {
  return axios.get(`/component-record`, { id, title, button, image });
};

const fetchMyDiary = (id, date, time, title, description) => {
  return axios.get(`/my-diary`, { id, date, time, title, description });
};

const fetchMyExercise = (id, title, kcal, time) => {
  return axios.get(`/my-exercise`, { id, title, kcal, time });
};

const fetchBodyRecord = (name, body_record_1, body_record_2) => {
  return axios.get(`/body-record`, { name, body_record_1, body_record_2 });
};

const fetchRecommended = (title, classify) => {
  return axios.get(`/recommended-group`, { title, classify });
};

const fetchComponentColumn = (id, date, time, title, classify, image) => {
  return axios.get(`/component-column`, {
    id,
    date,
    time,
    title,
    classify,
    image,
  });
};

export {
  fetchFoodHistory,
  fetchComponentRecord,
  fetchMyDiary,
  fetchMyExercise,
  fetchBodyRecord,
  fetchRecommended,
  fetchComponentColumn,
};
