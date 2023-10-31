import axios from "axios";

const BASE_URL = "http://15.164.220.227:8080";

const univList = async () =>
  await axios.get(`${BASE_URL}/api/v1/assets/universities`);

const classList = async (univName) =>
  await axios.get(`${BASE_URL}/api/v1/assets/majors/large-class/${univName}`);

const majorList = async (univName, className) =>
  await axios.get(
    `${BASE_URL}/api/v1/assets/majors?universityName=${univName}&largeClass=${className}`
  );

const univEmail = async (univName) =>
  await axios.get(`${BASE_URL}/api/v1/assets/email/${univName}`);

const login = async (providerName, token) =>
  await axios.post(
    `${BASE_URL}/api/v1/auth/login/${providerName}`,
    {},
    {
      headers: {
        authorization: `Bearer ${token}`,
      },
    }
  );

const register = async (
  providerName,
  token,
  serviceUsingAgree,
  personalInformationAgree,
  marketingAgree
) =>
  await axios.post(
    `${BASE_URL}/api/v1/auth/register`,
    {
      body: {
        providerName: { providerName },
        serviceUsingAgree: { serviceUsingAgree },
        personalInformationAgree: { personalInformationAgree },
        marketingAgree: { marketingAgree },
      },
    },
    {
      headers: {
        authorization: `Bearer ${token}`,
      },
    }
  );

const renew = async (refreshToken) =>
  await axios.post(
    `${BASE_URL}/api/v1/auth/renew`,
    {},
    {
      headers: {
        authorization: `Bearer ${refreshToken}`,
      },
    }
  );

const generalBoardList = async () =>
  await axios.get(`${BASE_URL}/api/v1/boards/general`);

const majorBoardList = async () =>
  await axios.get(`${BASE_URL}/api/v1/boards/major`);

const majorUpperList = async () =>
  await axios.get(`${BASE_URL}/api/v1/boards/major/uppers`);

const majorUpperMajorList = async (upperMajorId) =>
  await axios.get(`${BASE_URL}/api/v1/boards/major/uppers/${upperMajorId}`);

export const assetAPI = { univList, classList, majorList, univEmail };
export const authAPI = { login, register, renew };
export const communityAPI = {
  generalBoardList,
  majorBoardList,
  majorUpperList,
  majorUpperMajorList,
};
