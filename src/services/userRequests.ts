import { IUser } from "../contexts/UserContext";
import api from "./api";

interface IUserResponse {
  user: IUser;
  token: string;
}

export const registerUserRequest = async (
  userData: IUser
): Promise<IUserResponse> => {
  const { data } = await api.post<IUserResponse>("/users", userData);

  return data;
};

export const loginUserRequest = async (
  userData: IUser
): Promise<IUserResponse> => {
  const { data } = await api.post<IUserResponse>("/sessions", userData);

  return data;
};
