export interface User {
  _id: string;
  name: string;
  email: string;
}

export interface AuthResponse {
  token: string;
}

export interface ErrorResponse {
  message: string;
}