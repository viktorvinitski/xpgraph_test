import React, {FC, useEffect, useMemo, useState} from 'react';
import {Input, Modal} from 'antd';
import {useFormik} from "formik";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../redux/store";
import {ADD_POST} from "../../redux/constants";

interface Props {
    isModalVisible: boolean,
    setIsModalVisible: (_: any) => void
}

const CreatePostModal: FC<Props> = ({isModalVisible, setIsModalVisible}) => {
    const dispatch = useDispatch()
    const postsId = useSelector((state: RootState) => state.mainReducer.posts)[0]?.key

    const formik = useFormik({
        initialValues: {
            key:  postsId,
            userId: 1,
            id: postsId,
            title: '',
            body: '',
        },
        onSubmit: (values) => {
            dispatch({type: ADD_POST, payload: values})
        },
    });

    const handleOk = () => {
        if(!formik.values.title || !formik.values.body) return
        formik.submitForm()
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <Modal title="Create post" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
            <Input style={{marginTop: 5}} onChange={formik.handleChange} id="title" name='title' placeholder="Title" />
            <Input style={{marginTop: 5}} onChange={formik.handleChange} id="body" name='body' placeholder="Body" />
        </Modal>
    );
};

export default CreatePostModal;
