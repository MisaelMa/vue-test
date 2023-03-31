import { Post } from '../model/post.entity';
import { httpClient } from '../http/base';
import { userService } from './user.service';

class BlogService {
    url_path = 'posts'
    getPosts(): Promise<Post[]>{
        return httpClient.get<Post[]>(`${this.url_path}`).then((res)=>res)
    }

    getPost(id: number): Promise<Post>{
        return httpClient.get<Post>(`${this.url_path}/${id}`).then((res)=>res)
    }

   async getPostWithUser(id: number): Promise<Post>{
        const post = await this.getPost(id);
        const user = await userService.getUser(post.userId)
        return {
            ...post,
            user
        }
    }

    async getPostsWithUser(){
        const posts = await this.getPosts();
        const users = await Promise.all(posts.map((post)=>  userService.getUser(post.userId)))   
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