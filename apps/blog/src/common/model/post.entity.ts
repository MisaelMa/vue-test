import { User } from "./user.entity";

export interface Post {
    userId: number
    id: number
    title:string
    body: string
    user?: User
}