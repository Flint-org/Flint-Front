import axios from "axios";

const BASE_URL = "http://15.164.220.227:8080";

export const univList = async () =>
  await axios.get(`${BASE_URL}/api/v1/assets/universities`);
