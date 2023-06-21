import userService from "../services/user";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
  const { dispatch } = useAuthContext();

  const signup = async (data) => {
    const response = await userService.signup(data);
    // Save user to local storage
    localStorage.setItem("user", JSON.stringify(response));

    // Update auth context
    dispatch({ type: "LOGIN", payload: response });
  };

  return signup;
};
