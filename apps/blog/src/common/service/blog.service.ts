import { Post } from '../model/post.entity';
import { httpClient } from '../http/base';
import { userService } from './user.service';

class BlogService {
    url_path = 'posts'
    getPost(){
        return httpClient.get(`${this.url_path}`).then((res)=>res)
    }

    async getPostWithUser(){
        const posts = await httpClient.get<Post[]>(`${this.url_path}`).then((res)=>res)
        const users = await Promise.all(posts.map((post)=>  userService.getUser(post.userId)))
        console.log(users);
        
        return posts.map((post)=>{
            const user = users.find((u)=>u.id===post.userId)
            return {
                ...post,
                user
            }
        })
    }
}
export const blogService = new BlogService();