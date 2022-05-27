export interface LoginData{
  correo: string;
  password: string;
}

export interface RegisterData{
  /*correo: string;
  password: string;
  nombre: string;
  tipousuario: string;*/
  name: string;
  email: string;
  password: string;
  tipo_usuario: string;

}

export interface LoginResponse{
    usuarios: Usuarios;
    token: string;
}

export interface Usuarios{
    /*tipousuario: String;
    rol: String;
    estado: boolean;
    google:boolean;
    nombre:string;
    correo: string;
    uid:string;
    img?: string;*/


    tipo_usuario: String;
    email: String;
}
