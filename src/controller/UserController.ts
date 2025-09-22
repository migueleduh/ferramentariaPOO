import User from "../model/User";
export default class UserController{

    public createUser(name: string):User{
        return new User(name);
    }

    
}