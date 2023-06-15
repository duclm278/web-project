import decodeJwt from "jwt-decode";

const VITE_APP_BASE_URL =
  import.meta.env.VITE_APP_BASE_URL || "http://localhost:3001/api";

export default {
  login: async ({ username, password }) => {
    const request = new Request(`${VITE_APP_BASE_URL}/admins/login`, {
      method: "POST",
      body: JSON.stringify({ email: username, password }),
      headers: new Headers({ "Content-Type": "application/json" }),
    });
    const response = await fetch(request);
    console.log(response);
    if (response.status < 200 || response.status >= 300) {
      throw new Error(response.statusText);
    }
    const { token } = await response.json();
    const decodedToken = decodeJwt(token);
    localStorage.setItem("token", token);
    localStorage.setItem("permissions", decodedToken.isAdmin);
  },
  checkError: (error) => {
    console.log(error);
    const status = error.status;
    if (status === 401 || status === 403) {
      localStorage.removeItem("token");
      localStorage.removeItem("permissions");
      return Promise.reject();
    }
    return Promise.resolve();
  },
  checkAuth: () => {
    return localStorage.getItem("token") ? Promise.resolve() : Promise.reject();
  },
  logout: () => {
    localStorage.removeItem("token");
    localStorage.removeItem("permissions");
    return Promise.resolve();
  },
  getIdentity: () => {
    try {
      const { _id } = decodeJwt(localStorage.getItem("token"));
      return Promise.resolve({ _id });
    } catch (error) {
      return Promise.reject(error);
    }
  },
  getPermissions: () => {
    const role = localStorage.getItem("permissions");
    return role ? Promise.resolve(role) : Promise.reject();
  },
};
