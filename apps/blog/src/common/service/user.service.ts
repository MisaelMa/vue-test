import { User } from '../model/user.entity';
import { httpClient } from '../http/base';

export default class UserService {
    url_path = 'users'
    getUsers(){
        return httpClient.get(`${this.url_path}`).then((res)=>res)
    }

    getUser(id: number){
        return httpClient.get<User>(`${this.url_path}/${id}`).then((res)=>res)
    }
}
export const userService = new UserService();