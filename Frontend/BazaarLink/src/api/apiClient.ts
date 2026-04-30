// API utility file with JWT token handling
const API_BASE_URL = "http://localhost:5000";

export const apiCall = async (
  endpoint: string,
  method: string = "GET",
  body?: any
) => {
  const headers: HeadersInit = {
    "Content-Type": "application/json",
  };

  const token = localStorage.getItem("token");
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const options: RequestInit = {
    method,
    headers,
  };

  if (body) {
    options.body = JSON.stringify(body);
  }

  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, options);
    const data = await response.json();

    if (!response.ok) {
      // If token is invalid/expired, clear it
      if (response.status === 401) {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        window.location.href = "/login";
      }
      throw new Error(data.message || "API request failed");
    }

    return data;
  } catch (error) {
    throw error;
  }
};

export const login = async (email: string, password: string) => {
  return apiCall("/login", "POST", { email, password });
};

export const signup = async (username: string, email: string, password: string) => {
  return apiCall("/signup", "POST", { username, email, password });
};

export const getProfile = async () => {
  return apiCall("/profile", "GET");
};

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  window.location.href = "/login";
};
