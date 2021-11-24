import React, {FC, useEffect, useState} from 'react';
import {getPostsRequest} from "../../services/requests";
import {Table} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {SET_CHECKED_POSTS} from "../../redux/constants";
import {useFetchPosts} from "../../hooks/useFetchPosts";
import {RootState} from "../../redux/store";

const { Column } = Table

interface DataType {
    key: React.Key
    id: number;
    title: string;
    age: number;
    address: string;
}



const Posts: FC = () => {
    useFetchPosts()
    const dispatch = useDispatch()
    const posts = useSelector((state: RootState) => state.mainReducer.posts)
    const checkedPosts = useSelector((state: RootState) => state.mainReducer.checkedPosts)

    const rowSelection = {
        onChange: (checkedPostKeys: React.Key[], checkedPosts: DataType[]) => {
            dispatch({type: SET_CHECKED_POSTS, payload: checkedPosts })
        },
    };

    return (
        <div style={{height: '500px'}}>
            <Table dataSource={posts} rowSelection={{...rowSelection}}>
                <Column title="UserID" dataIndex="userId" key="userId" />
                <Column title="PostID" dataIndex="id" key="id" />
                <Column title="title" dataIndex="title" key="title" />
                <Column title="content" dataIndex="body" key="body" />
            </Table>
            <div style={{marginTop: -45}}>{`${checkedPosts.length} rows selected`}</div>
        </div>
    );
};

export default Posts;
