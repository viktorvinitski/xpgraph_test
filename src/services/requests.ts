import {PostInterface} from "../interfaces/interfaces";

export const getPostsRequest = async (): Promise<PostInterface[]> => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    const posts = await res.json()
    return posts.map((p: any) => ({...p, key: +p.id}))
}

