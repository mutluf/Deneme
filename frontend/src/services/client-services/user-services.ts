import { LoginType, UserType } from "../../types/types";

const baseUrl: string = "http://localhost:3001";

export const getUsers = async () => {
  try {
    const res = await fetch(baseUrl + '/users');

    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
    return await res.json();
  } catch (error) {
    console.error(error);
  }
};

export const createUser = async (user: any) => {
  return await fetch(baseUrl + '/users', {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  }).then(data => {
    return data;
  })
};

export const deleteUser = async (id: number) => {
  return await fetch(baseUrl + '/users/' + id, {
    method: "delete",

  }).then(data => {
    return data;
  })
};

export const login = async (loginData: LoginType) => {
  return await fetch(baseUrl + '/auth/login', {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(loginData),
  }).then(data => {
    return data;
  })
};
