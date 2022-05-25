export interface LoginData{
  correo: string;
  password: string;
}

export interface RegisterData{
  correo: string;
  password: string;
  nombre: string;
  tipousuario: string;
}

export interface LoginResponse{
    usuario: Usuario;
    token: string;
}

export interface Usuario{
    tipousuario: String;
    rol: String;
    estado: boolean;
    google:boolean;
    nombre:string;
    correo: string;
    uid:string;
    img?: string;
}
