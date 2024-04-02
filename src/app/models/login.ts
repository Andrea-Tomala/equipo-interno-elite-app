export interface LoginRequest{
  contrasena: string,
  email: string
}

export interface LoginResponse{
    code: number,
    message: string
}
