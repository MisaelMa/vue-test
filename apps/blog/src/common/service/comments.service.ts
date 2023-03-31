import { User } from '../model/user.entity';
import { httpClient } from '../http/base';

export default class CommentsService {
    url_path = 'comments'
    getCommentsByPost(postId: number){
        return httpClient.get(`${this.url_path}`,{params:{postId}}).then((res)=>res)
    }

}
export const commentsService = new CommentsService();