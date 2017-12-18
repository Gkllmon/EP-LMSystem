import { Book } from './Book';

export class User {
  public userId: number;
  public sex: string;
  public name: string;
  public age: string;
  public type: string;
  public email: string;
  public phone: string;
  public password: string;
  public book: Book[] = [];
}
