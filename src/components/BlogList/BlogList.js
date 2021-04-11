import React, {useState, useEffect} from 'react';
import axios from "axios"
import BlogCard from "./BlogCard";
import "./styles/BlogList.css"

function BlogList(props) {
    const API_URL = process.env.REACT_APP_API_URL
    const [post_list, set_post_list] = useState([])

    const fetch = () => {
        axios({
            method: "get",
            url: `${API_URL}/posts/`
        })
            .then(res => set_post_list(res.data))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        fetch()
    }, [])

    return (
        <div className="blog-list-container">
            {
                post_list.map(post_data => <BlogCard key={post_data.id} data={post_data}/>)
            }
        </div>
    );
}

export default BlogList;