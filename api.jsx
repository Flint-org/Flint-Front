import axios from "axios";

const BASE_URL = "http://15.164.220.227:8080";

export const univList = async () =>
  await axios.get(`${BASE_URL}/api/v1/assets/universities`);

export const classList = async (univName) =>
  await axios.get(`${BASE_URL}/api/v1/assets/majors/large-class/${univName}`);

export const majorList = async (univName, className) =>
  await axios.get(
    `${BASE_URL}/api/v1/assets/majors?universityName=${univName}&largeClass=${className}`
  );

export const univEmail = async (univName) =>
  await axios.get(`${BASE_URL}/api/v1/assets/email/${univName}`);
