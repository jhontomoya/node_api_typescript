export class UserTO {
  email: string;
  password: string;
  username?: string;
  id?: string;

  constructor(email: string, password: string, username?: string, id?: string){
    this.email = email;
    this.password = password;
    this.username = username;
    this.id = id;
  }
}