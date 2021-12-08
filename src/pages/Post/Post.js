import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { loadPostStart } from "../redux/app.action";

const Post = () => {

    const dispatch = useDispatch();

    const fetchPost = () => {
        dispatch(loadPostStart())
    };

    const state = useSelector((state) => ({ ...state.app }));

    return (
        <>
            <h2>fetch data</h2>
            {
                !state.loading &&
                state.posts.map((post) => (
                    <li key={post.id}>
                        {post.title}
                    </li>
                ))
            }
            <button onClick={fetchPost}>FETCH</button>
        </>
    );
};

export default Post;