import React from 'react';
import "./styles/BlogCard.css"


function BlogCard(props) {
    const {id, title, summary, image} = props.data

    return (
        <div className="blog-card-container">
            <div className="card-header">
                <h1>{title}</h1>
            </div>

            <img src={image} alt=""/>
            <p>{summary}</p>

            <div className="card-footer">
                <a href="">Tovább...</a>
            </div>
        </div>
    );
}

export default BlogCard;