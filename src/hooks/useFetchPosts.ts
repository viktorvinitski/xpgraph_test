import {useEffect} from "react";
import {getPostsRequest} from "../services/requests";
import {useDispatch} from "react-redux";
import {INIT_POSTS} from "../redux/constants";

export const useFetchPosts = () => {
    const dispatch = useDispatch()
    const getPosts = async () => {
        const postsReq = await getPostsRequest()
        dispatch({type: INIT_POSTS, payload: postsReq})
    }

    useEffect(() => {
        getPosts().then()
    }, [])

    return getPosts
}
