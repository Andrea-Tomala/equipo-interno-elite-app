export interface RegisterRequest{
  contrasena: string,
  email: string,
  nombre:string
}

export interface RegisterResponse{
    code: number,
    message: string
}
