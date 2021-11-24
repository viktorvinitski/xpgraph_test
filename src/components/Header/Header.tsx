import React, {FC, useState} from 'react';
import ButtonItem from "../common/ButtonItem";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../redux/store";
import {DELETE_CHECKED_POSTS, DELETE_POSTS, SET_CHECKED_POSTS} from "../../redux/constants";
import {useFetchPosts} from "../../hooks/useFetchPosts";
import CreatePostModal from "../Modal/CreatePostModal";


const Header: FC = () => {
    const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
    const checkedPosts = useSelector((state: RootState) => state.mainReducer.checkedPosts)
    const dispatch = useDispatch()
    const getPosts = useFetchPosts()

    const openModal = () => {
        setIsModalVisible(true)
    }

    const deleteHandler = () => {
        if(!checkedPosts.length) return
        dispatch({type: DELETE_POSTS, payload: checkedPosts})
        dispatch({type: DELETE_CHECKED_POSTS})
    }

    const loadHandler = () => getPosts()

    return (
        <>
            <div style={{display: 'flex'}}>
                <ButtonItem onClick={openModal} type={"primary"} value={"CREATE POST"}/>
                <ButtonItem onClick={loadHandler} type={"primary"} value={"LOAD POST"}/>
            </div>
            <ButtonItem onClick={deleteHandler} type={"danger"} value={"SELECTED_DELETE"}/>
            <CreatePostModal isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible}/>
        </>
    );
};

export default Header;
