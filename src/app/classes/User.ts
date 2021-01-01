import { UserInterface } from "../interfaces/UserInterface";

export class User implements UserInterface {
  id: number = 0;
  name: string = '';
  lastname: string = '';
  email: string = '';
  fiscalcode: string = '';
  provincia: string = '';
  phone: string = '';
  age: number = 0;
}
