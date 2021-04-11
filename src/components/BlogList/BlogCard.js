import React from 'react';
import "./styles/BlogCard.css"
import {Link} from "react-router-dom";


function BlogCard(props) {
    const {id, title, summary, image} = props.data

    return (
        <div className="blog-card-container">
            <div className="card-header">
                <Link to={`/posts/${id}`}>
                    <h1>{title}</h1>
                </Link>
            </div>

            <img src={image} alt=""/>
            <p>{summary}</p>

            <div className="card-footer">
                <Link to={`/posts/${id}`}>
                    Tovább...
                </Link>
            </div>
        </div>
    );
}

export default BlogCard;