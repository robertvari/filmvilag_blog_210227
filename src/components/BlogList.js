import React from 'react';
import BlogCard from "./BlogCard";
import "./BlogList.css"

function BlogList(props) {

    return (
        <div className="blog-list-container">
            <BlogCard/>
            <BlogCard/>
            <BlogCard/>
            <BlogCard/>
            <BlogCard/>
            <BlogCard/>
            <BlogCard/>
            <BlogCard/>
            <BlogCard/>
            <BlogCard/>
            <BlogCard/>
            <BlogCard/>
        </div>
    );
}

export default BlogList;