import { users } from '../mock/userData';
import { User } from '../user/type';


export const getUser = (): User[] => {
  return users;
};
