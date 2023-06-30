import userService from "../services/user";
import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
  const { dispatch } = useAuthContext();

  const login = async (email, password) => {
    const response = await userService.login(email, password);
    // Save user to local storage
    localStorage.setItem("user", JSON.stringify(response));

    // Update auth context
    dispatch({ type: "LOGIN", payload: response });
  };

  return login;
};
