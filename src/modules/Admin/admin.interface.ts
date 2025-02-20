
export type TRole = "admin" | "user"

export type TAdmin = {
  name: string; 
  email: string;
  password: string; 
  role: TRole;
}