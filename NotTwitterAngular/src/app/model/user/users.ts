import {UserCreate} from "./userCreate"
export interface Users extends UserCreate {
    id: number;
    username: string;
    email: string;
    firstname: string,
    lastname: string;
    friends:[];
    gender: number;
  };
  