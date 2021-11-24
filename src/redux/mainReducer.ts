import {ADD_POST, DELETE_CHECKED_POSTS, DELETE_POSTS, INIT_POSTS, SET_CHECKED_POSTS} from "./constants";
import {PostInterface} from "../interfaces/interfaces";

interface InitialStateInterface {
    posts: PostInterface[]
    checkedPosts: PostInterface[]
}

const initialState: InitialStateInterface = {
    posts: [],
    checkedPosts: []
}

const mainReducer = (state = initialState, action: {type: string, payload: any})=> {
    const { type, payload } = action

    switch (type) {


        case INIT_POSTS: {
            return {
                ...state,
                posts: payload
            }
        }

        case ADD_POST: {
            return {
                ...state,
                posts: [payload, ...state.posts]
            }
        }

        case DELETE_POSTS: {
            const newPosts = state.posts?.filter((post: any) => {
                return !payload.some((p: any) => p.id === post.id)
            })

            return {
                ...state,
                posts: newPosts
            }
        }

        case SET_CHECKED_POSTS:
            return {
                ...state,
                checkedPosts: payload
            }
        case DELETE_CHECKED_POSTS:
            return {
                ...state,
                checkedPosts: []
            }

        default:
            return state
    }
}

export default mainReducer
