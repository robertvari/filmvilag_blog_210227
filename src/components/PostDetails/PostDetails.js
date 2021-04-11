import React, {useState, useEffect} from 'react';
import {Link, useParams} from "react-router-dom"
import axios from "axios";

function PostDetails(props) {
    const {id} = useParams()

    const API_URL = process.env.REACT_APP_API_URL
    const [post_data, set_post_data] = useState({})

    const fetch = () => {
        axios({
            method: "get",
            url: `${API_URL}/posts/${id}/`
        })
            .then(res => set_post_data(res.data))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        fetch()
    }, [])

    return (
        <div className="blog-card-container">
            <div className="card-header">
                <h1>{post_data.title}</h1>
            </div>

            <img src={post_data.image} alt=""/>
            <p>{post_data.summary}</p>
        </div>
    );
}

export default PostDetails;